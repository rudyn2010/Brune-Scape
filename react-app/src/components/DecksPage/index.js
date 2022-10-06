import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getCurrUsersDecks } from "../../store/deck";
import CreateDeckModal from "../CreateDeckModal";
import SingleDeck from "../SingleDeck";
import "./DecksPage.css"

const DecksPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ isLoaded, setIsLoaded ] = useState(false);

    const curr_decks = useSelector((state) => Object.values(state.decks));

    const display_curr_decks = curr_decks.map((deck, i) => (
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
            <div className="decks-header">
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
        </div>
    )
};

export default DecksPage;
