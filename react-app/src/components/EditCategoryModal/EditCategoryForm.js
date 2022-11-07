import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { updateACategory } from "../../store/category";
import hitsplat from "../../images/hitsplat.png"

const EditCategoryForm = ({ category, closeModal }) => {

    const dispatch = useDispatch();

    const [ name, setName ] = useState(category?.name);
    const [ description, setDescription ] = useState(category?.description);

    const [ errors, setErrors ] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const currUser = useSelector(state => state.session.user);

    const onSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitted(true)

        if(errors.length) return

        let new_category = {
            name,
            description,
            categoryId: category.id,
            owner_id: currUser.id
        }

        const data = await dispatch(updateACategory(new_category));

        if (data && data.errors) {
            setErrors(data.errors);
        } else {
            closeModal();
        }
    }

    useEffect(() => {
        let errors = []
        if (name.length < 2 || name.length > 254) errors.push("Name: Name must be between 1 - 255 chars")
        if (description.length > 254 || description.length < 2) errors.push("Description: Description must be between 1 - 255 chars")
        setErrors(errors)
    }, [ name, description ]);


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
                min={2}
                max={255}
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className='input-areas-lf'>
                <label className="input-label" >Description</label>
                <input
                className='input-field'
                type='text'
                min={2}
                max={255}
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="login-form-buttons">
                <button className='login-button' type='submit'>Edit!</button>
            </div>
        </form>
    )

};

export default EditCategoryForm;
