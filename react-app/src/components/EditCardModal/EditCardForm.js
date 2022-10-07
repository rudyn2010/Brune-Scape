import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { createACard, updateACard } from "../../store/card";
import hitsplat from "../../images/hitsplat.png"

const EditCardForm = ({ card, closeModal }) => {

    const dispatch = useDispatch();

    const [ question, setQuestion ] = useState(card?.question);
    const [ answer, setAnswer ] = useState(card?.answer);

    const [ errors, setErrors ] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const currUser = useSelector(state => state.session.user);

    const onSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)

        if(errors.length) return

        let new_card = {
            question,
            answer,
            cardId: card.id,
            owner_id: currUser.id,
            deck_id: card.deck_id
        }

        const data = await dispatch(updateACard(new_card));

        if (data && data.errors) {
            setErrors(data.errors);
        } else {
            closeModal();
        }
    }

    useEffect(() => {
        let errors = []
        if (question.length < 2 || question.length > 254) errors.push("Question: Question must be between 1 - 255 chars")
        if (answer.length > 254 || answer.length < 2) errors.push("Answer: Answer must be between 1 - 255 chars")
        setErrors(errors)
    }, [ question, answer ]);


    return (
        <form className='login-form' onSubmit={onSubmit}>
            <div className='error-container'>
                {isSubmitted && errors.map((error, ind) => (
                    <div key={ind}>
                        <div className='error-div'>
                            <img
                            className='error-splat'
                            src={hitsplat} />
                            {error.split(": ")[1]}
                        </div>
                    </div>
                ))}
            </div>
            <div className='input-areas-lf'>
                <label className="input-label" >Question</label>
                <input
                className='input-field'
                type='text'
                min={3}
                max={255}
                placeholder='Question'
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                />
            </div>
            <div className='input-areas-lf'>
                <label className="input-label" >Answer</label>
                <input
                className='input-field'
                type='text'
                min={2}
                max={255}
                placeholder='Answer'
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                />
            </div>
            <div className="login-form-buttons">
                <button className='login-button' type='submit'>Edit!</button>
            </div>
        </form>
    )

};

export default EditCardForm;
