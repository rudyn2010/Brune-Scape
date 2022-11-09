import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";
import LogoutModal from "../auth/LogoutModal";
import "./UserNavBar.css"

const UserNavBar = () => {

    const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);

    return (
        <div className="user-navbar-container">
            <div className="user-navbar-logout">
                <div className="session-user-name">
                    Welcome, {sessionUser?.first_name} {sessionUser?.last_name}!
                </div>
                <LogoutModal />
            </div>
        </div>
    )

};

export default UserNavBar;
