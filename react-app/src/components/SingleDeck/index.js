import DeleteDeckModal from "../DeleteDeckModal";
import EditDeckModal from "../EditDeckModal";
import "./SingleDeck.css";


const SingleDeck = ({ deck }) => {

    return (
        <div className="deck-container">
            <div>
                {deck?.name}
            </div>
            <div className="icon-bar">
                <div>
                    <EditDeckModal deck={ deck } />
                </div>
                <div>
                    <DeleteDeckModal deck={ deck } />
                </div>
                <div> Arrow </div>
            </div>
        </div>
    )
};

export default SingleDeck;
