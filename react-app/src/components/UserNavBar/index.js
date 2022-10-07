import LogoutButton from "../auth/LogoutButton";
import "./UserNavBar.css"

const UserNavBar = () => {

    return (
        <div className="user-navbar-container">
            <div>
                <LogoutButton />
            </div>
            <div className="user-navbar-header">
                {/* <div>
                    Classes
                </div> */}
                <div className="navbar-field">
                    Decks
                </div>
            </div>
        </div>
    )

};

export default UserNavBar;
