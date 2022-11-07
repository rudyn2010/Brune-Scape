import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory, useParams } from "react-router-dom";
import { getCurrUsersCards } from "../../store/card";
import CreateCardModal from "../CreateCardModal";
import SingleCard from "../SingleCard";
import "./CardsPage.css"

const CardsPage = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const { deckId, categoryId } = useParams();
    const [ isLoaded, setIsLoaded ] = useState(false);


    const curr_cards = useSelector((state) => Object.values(state.cards));

    const deck_cards = curr_cards.filter((x) => x.deck_id == deckId);

    const display_curr_cards = deck_cards.map((card, i) => (
        <div key={ i } className="single-deck-div">
            <SingleCard card={ card } />
        </div>
    ));

    useEffect(() => {
        dispatch(getCurrUsersCards())
        .then(() => setIsLoaded(true));
    }, [ ]);

    return isLoaded && (
        <div className="decks-container">
            <div className="scroll-top"></div>
            <div className="decks-header">
                <div className="decks-text">
                    <div
                    className="cards-back-arrow"
                    onClick={() => history.goBack()}
                    ><i class="fa-solid fa-arrow-left"></i>
                    </div>
                    <div>
                        CARDS
                    </div>
                </div>
                <div className="decks-plus">
                    <CreateCardModal />
                </div>
            </div>
            <div className="decks-display-container">
                {display_curr_cards}
            </div>
            <div className="scroll-bottom"></div>
        </div>
    )
}

export default CardsPage;
