import { NavLink } from "react-router-dom";
import DeleteDeckModal from "../DeleteDeckModal";
import EditDeckModal from "../EditDeckModal";
import "./SingleDeck.css";


const SingleDeck = ({ deck }) => {

    return (
        <div className="deck-container">
            <NavLink to={`/decks/${deck.id}/cards`}>
                <div>
                    {deck?.name}
                </div>
            </NavLink>
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
