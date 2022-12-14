import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getCurrUsersDecks } from "../../store/deck";
import CreateDeckModal from "../CreateDeckModal";
import SingleDeck from "../SingleDeck";
import "./DecksPage.css"

const DecksPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { categoryId } = useParams();

    const [ isLoaded, setIsLoaded ] = useState(false);

    const curr_decks = useSelector((state) => Object.values(state.decks));

    const category_decks = curr_decks.filter((x) => x.category_id == categoryId);

    const display_curr_decks = category_decks.map((deck, i) => (
        <div
        key={ i }
        className="single-deck-div">
            <SingleDeck deck={ deck }/>
        </div>
    ));

    useEffect(() => {
        dispatch(getCurrUsersDecks())
        .then(() => setIsLoaded(true));
    }, [ ]);

    return isLoaded && (
        <div className="decks-container">
            <div className="scroll-top"></div>
            <div className="decks-header">
                <div
                    className="cards-back-arrow"
                    onClick={() => history.goBack()}
                    ><i class="fa-solid fa-arrow-left"></i>
                    </div>
                <div className="decks-text">
                    DECKS
                </div>
                <div className="decks-plus">
                    <CreateDeckModal />
                </div>
            </div>
            <div className="decks-display-container">
                { display_curr_decks }
            </div>
            <div className="scroll-bottom"></div>
        </div>
    )
};

export default DecksPage;
