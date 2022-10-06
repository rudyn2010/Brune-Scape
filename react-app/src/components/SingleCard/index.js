import EditCardModal from "../EditCardModal";


const SingleCard = ({ card }) => {

    return (
        <div className="deck-container">
            <div>
                {card?.question}
            </div>
            <div>
                {card?.answer}
            </div>
            <div className="icon-bar">
                <div>
                    <EditCardModal card={ card }/>
                </div>
                <div>
                    D
                </div>
                <div> Arrow </div>
            </div>
        </div>
    )
};

export default SingleCard;
