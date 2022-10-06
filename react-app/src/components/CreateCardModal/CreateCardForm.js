import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { createACard } from "../../store/card";

const CreateCardForm = ({ closeModal }) => {

    const dispatch = useDispatch();

    const [ question, setQuestion ] = useState("");
    const [ answer, setAnswer ] = useState("");

    const [ errors, setErrors ] = useState([]);

    const currUser = useSelector(state => state.session.user);
    const { deckId } = useParams();

    const onSubmit = async (e) => {
        e.preventDefault();

        let new_card = {
            question,
            answer,
            owner_id: currUser.id,
            deck_id: deckId
        }

        const data = await dispatch(createACard(new_card));

        if (data && data.errors) {
            setErrors(data.errors);
        } else {
            closeModal();
        }
    }

    return (
        <form className='login-form' onSubmit={onSubmit}>
            <div>
                {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
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
                <button className='login-button' type='submit'>Create</button>
            </div>
        </form>
    )

};

export default CreateCardForm;
