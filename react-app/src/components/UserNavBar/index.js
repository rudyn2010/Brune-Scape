import { useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LogoutModal from "../auth/LogoutModal";
import "./UserNavBar.css"

const UserNavBar = () => {

    const history = useHistory();

    return (
        <div className="user-navbar-container">
            {/* <div className='modal-div-nb'>
                <div
                className="login-modal-btn"
                onClick={() => history.goBack()}
                > Back
                </div>
            </div> */}
            <div className="user-navbar-logout">
                <LogoutModal />
            </div>
        </div>
    )

};

export default UserNavBar;
