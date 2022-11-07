import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getCurrUsersCategories } from "../../store/category";
import CreateDeckModal from "../CreateDeckModal";
import SingleDeck from "../SingleDeck";
import "./DecksPage.css"

const CategoriesPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ isLoaded, setIsLoaded ] = useState(false);

    const curr_categories = useSelector((state) => Object.values(state.categories));

    const display_curr_categories = curr_categories.map((category, i) => (
        <div
        key={ i }
        className="single-deck-div">
            <SingleDeck deck={ category }/>
        </div>
    ));

    useEffect(() => {
        dispatch(getCurrUsersCategories())
        .then(() => setIsLoaded(true));
    }, [ ]);

    return isLoaded && (
        <div className="decks-container">
            <div className="scroll-top"></div>
            <div className="decks-header">
                <div className="decks-text">
                    CATEGORIES
                </div>
                <div className="decks-plus">
                    <CreateDeckModal />
                </div>
            </div>
            <div className="decks-display-container">
                { display_curr_categories }
            </div>
            <div className="scroll-bottom"></div>
        </div>
    )
};

export default CategoriesPage;
