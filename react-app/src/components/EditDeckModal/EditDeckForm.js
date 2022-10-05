import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateADeck } from "../../store/deck";

const EditDeckForm = ({ deck, closeModal }) => {

    const dispatch = useDispatch();

    const [ name, setName ] = useState(deck?.name);
    const [ classId, setClassId ] = useState(deck?.class_id);

    const currUser = useSelector(state => state.session.user);

    const [ errors, setErrors ] = useState([]);

    const onSubmit = async (e) => {
        e.preventDefault();

        let new_deck = {
            deckId: deck.id,
            name,
            class_id: classId,
            owner_id: currUser.id
        }

        const data = await dispatch(updateADeck(new_deck));

        if (data && data.errors) {
          setErrors(data);
        } else {
          closeModal();
        }
    };

    return (
        <form className='login-form' onSubmit={onSubmit}>
            <div>
                {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
                ))}
            </div>
            <div className='input-areas-lf'>
                <label className="input-label" >Name</label>
                <input
                className='input-field'
                type='text'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='input-areas-lf'>
                <label className="input-label" >Class Id</label>
                <input
                className='input-field'
                type='number'
                placeholder='Class Id'
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
                />
            </div>
            <div className="login-form-buttons">
                <button className='login-button' type='submit'>Create</button>
            </div>
        </form>
    )
};

export default EditDeckForm;
