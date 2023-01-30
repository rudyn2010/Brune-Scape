import { NavLink } from "react-router-dom";
import DeleteDeckModal from "../DeleteDeckModal";
import EditDeckModal from "../EditDeckModal";
import "./SingleDeck.css";


const SingleDeck = ({ deck }) => {

    return (
        <div className="deck-container">
            <NavLink className="deck-link" to={`/categories/${deck.category_id}/decks/${deck.id}/cards`}>
                <div className="deck-text">
                    {deck?.name}
                </div>
            </NavLink>
            <div className="mastery-percentage">
                {deck?.mastery}% Learned!
            </div>
            <div className="icon-bar">
                <div>
                    <EditDeckModal deck={ deck } />
                </div>
                <div>
                    <DeleteDeckModal deck={ deck } />
                </div>
            </div>
        </div>
    )
};

export default SingleDeck;
