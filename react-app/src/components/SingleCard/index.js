

const SingleCard = ({ card }) => {

    return (
        <div className="deck-container">
            <div>
                {card?.question}
            </div>
            <div className="icon-bar">
                <div>
                    E
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
