import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createADeck } from "../../store/deck";
import hitsplat from "../../images/hitsplat.png"

const CreateDeckForm = ({ closeModal }) => {

    const dispatch = useDispatch();
    const [ errors, setErrors ] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [ name, setName ] = useState("");
    const [ classId, setClassId ] = useState("");

    const currUser = useSelector(state => state.session.user);

    const onSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)

        if (errors.length) {
            return
        }

        let new_deck = {
            name,
            // class_id: classId,
            owner_id: currUser.id
        }

        const data = await dispatch(createADeck(new_deck));

        if (data && data.errors) {
          setErrors(data.errors);
        } else {
          closeModal();
        }
    };

    useEffect(() => {
        let errors = []
        if (name.length < 2 || name.length > 50) errors.push("Name: Deck names should be between 2 - 50 chars")

        setErrors(errors)
      }, [ name ]);

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
                <label className="input-label" >Name</label>
                <input
                className='input-field'
                type='text'
                placeholder='Name'
                value={name}
                min={2}
                max={50}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            {/* <div className='input-areas-lf'>
                <label className="input-label" >Class Id</label>
                <input
                className='input-field'
                type='number'
                min={0}
                placeholder='Class Id'
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
                />
            </div> */}
            <div className="login-form-buttons">
                <button className='login-button' type='submit'>Create</button>
            </div>
        </form>
    )
}

export default CreateDeckForm;
