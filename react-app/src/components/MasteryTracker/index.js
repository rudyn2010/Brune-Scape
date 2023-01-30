import { useDispatch } from "react-redux";
import { updateACard } from "../../store/card";
import "./MasteryTracker.css";

function MasteryTracker({card}) {

    const dispatch = useDispatch();

    const handleMastery = (e, mastery) => {

        e.preventDefault();

        const data = {
            question: card.question,
            answer: card.answer,
            cardId: card.id,
            owner_id: currUser.id,
            deck_id: card.deck_id,
            mastery
        };

        dispatch(updateACard(data));
    };

    return (
        <div className="mastery-display">
            <div className="mastery-display-header">
                How well did you know this?
            </div>
            <div className="number-display">
                <button
                    className="mastery-number"
                    onClick={(e) => handleMastery(e, 1)}
                >
                 1
                </button>
                <button
                    className="mastery-number"
                    onClick={(e) => handleMastery(e, 2)}
                >
                 2
                </button>
                <button
                    className="mastery-number"
                    onClick={(e) => handleMastery(e, 3)}
                >
                 3
                </button>
                <button
                    className="mastery-number"
                    onClick={(e) => handleMastery(e, 4)}
                >
                 4
                </button>
                <button
                    className="mastery-number"
                    onClick={(e) => handleMastery(e, 5)}
                >
                 5
                </button>
            </div>
            <div className="scale">
                <div>Bad</div>
                <div>Poor</div>
                <div>Fair</div>
                <div>Good</div>
                <div>Excellent</div>
            </div>
        </div>
    )
};

export default MasteryTracker;
