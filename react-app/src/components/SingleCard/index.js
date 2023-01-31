import { useState } from "react";
import { NavLink } from "react-router-dom";
import DeleteCardModal from "../DeleteCardModal";
import EditCardModal from "../EditCardModal";
import MasteryTracker from "../MasteryTracker";
import "./SingleCard.css"

const SingleCard = ({ card }) => {

    const [ showAnswer, setShowAnswer ] = useState(false);

    const toggle = () => {
        setShowAnswer((prev) => !prev);
    };


    return (
        <>
            <div className="deck-container">
                <div>
                    {showAnswer ? card?.answer : card?.question}
                </div>
                <div className="icon-bar">
                    <div
                    onClick={() => toggle()}
                    style={{cursor: "pointer"}}
                    >
                        {
                            showAnswer ?
                            <i class="fa-solid fa-eye-slash"></i> :
                            <i class="fa-solid fa-eye"></i>
                        }
                    </div>
                    <div>
                        <EditCardModal card={ card }/>
                    </div>
                    <div>
                        <DeleteCardModal card={ card }/>
                    </div>
                </div>
            </div>
            <MasteryTracker card={ card }/>
        </>
    )
};

export default SingleCard;
