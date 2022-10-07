import "./SplashPage.css"
import background from "../../images/trusted.png"
import LoginFormModal from "../auth/LoginFormModal";
import GetStartedModal from "../auth/GetStartedModal";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const SplashPage = () => {

    const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);

    if (sessionUser) {
        history.push("/decks")
    }

    return (
        <div className="background" style={ {backgroundImage: `url(${background})`} } >
            <div className="splash-nav">
                <div className="modal-area">
                    <div className="modal-div-nb">
                        <LoginFormModal />
                    </div>
                    <div className="modal-div-nb">
                        <GetStartedModal />
                    </div>
                </div>
            </div>
            <div className="splash-text-container">
                <h1 className="splash-text">
                    Rise to your challenge.
                </h1>
                <h2 className="splash-text-two">
                    Flashcards for serious gamers.
                </h2>
            </div>

        </div>
    );

};

export default SplashPage;
