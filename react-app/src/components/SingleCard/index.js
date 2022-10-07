import { useState } from "react";
import { NavLink } from "react-router-dom";
import DeleteCardModal from "../DeleteCardModal";
import EditCardModal from "../EditCardModal";


const SingleCard = ({ card }) => {

    const [ showAnswer, setShowAnswer ] = useState(false);

    const toggle = () => {
        setShowAnswer((prev) => !prev);
    };


    return (
        <div className="deck-container">
            <div>
                {showAnswer ? card?.answer : card?.question}
            </div>
            <div>
                <button onClick={toggle}>Show</button>
            </div>
            <div className="icon-bar">
                <div>
                    <EditCardModal card={ card }/>
                </div>
                <div>
                    <DeleteCardModal card={ card }/>
                </div>
            </div>
        </div>
    )
};

export default SingleCard;
