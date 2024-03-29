import { useDispatch } from "react-redux";
import { updateACard } from "../../store/card";
import "./MasteryTracker.css";

const MasteryTracker = ({ card }) => {

    const dispatch = useDispatch();

    const handleMasteryChange = (e, mastery) => {

        e.preventDefault();

        const data = {
            question: card.question,
            answer: card.answer,
            cardId: card.id,
            owner_id: card.owner_id,
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
                    onClick={(e) => handleMasteryChange(e, 1)}
                >
                 1
                </button>
                <button
                    className="mastery-number"
                    onClick={(e) => handleMasteryChange(e, 2)}
                >
                 2
                </button>
                <button
                    className="mastery-number"
                    onClick={(e) => handleMasteryChange(e, 3)}
                >
                 3
                </button>
                <button
                    className="mastery-number"
                    onClick={(e) => handleMasteryChange(e, 4)}
                >
                 4
                </button>
                <button
                    className="mastery-number"
                    onClick={(e) => handleMasteryChange(e, 5)}
                >
                 5
                </button>
            </div>
            <div className="scale">
                <div>Poor</div>
                <div> - </div>
                <div>Aced</div>
            </div>
        </div>
    )
};

export default MasteryTracker;
