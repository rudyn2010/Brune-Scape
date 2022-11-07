import { NavLink } from "react-router-dom";
import DeleteCategoryModal from "../DeleteCategoryModal";
import EditCategoryModal from "../EditCategoryModal";


const SingleCategory = ({ category }) => {

    return (
        <div className="deck-container">
            <NavLink
            className="deck-link"
            to={`/categories/${category.id}/decks`}>
                <div className="deck-text">
                    {category?.name}
                </div>
            </NavLink>
            <div className="icon-bar">
                <div>
                    <EditCategoryModal category={ category } />
                </div>
                <div>
                    <DeleteCategoryModal category={ category } />
                </div>
                <div></div>
            </div>
        </div>
    )
};

export default SingleCategory;
