import { useEffect } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import "../style/Menu.css";

const Menu = ({ closeMenu}) => {

    useEffect(() => {

        document.body.style.overflowY = "hidden";

        return () => { document.body.style.overflowY = "scroll"; }
    }, [])

    const { isAuthenticated, user } = useAuth0();

    return (
        <>
          <div className="modal-wrapper2">
                <div className="modal-container2">

                    <i class="fa-solid fa-xmark" onClick={closeMenu}></i>


                    <div className="menu">
                        <div className="fir">

                            <div className="ProfileImg">
                                {isAuthenticated ? (
                                    <img className="ProfileImg" alt='ProfileImg' src={user.picture} />) :
                                    (
                                        <i className="fa-solid fa-user"></i>
                                    )}
                            </div>
                            {isAuthenticated ? (

                                <div className="UserName">{user.name}</div>) :
                                (
                                    <div className="UserName">User Profile</div>
                                )}
                        </div>

                        <div className="fir">History</div>

                        <Link to = "/CreateQuiz">
                        <div className="fir" >Create Quiz</div>
                        </Link>

                        <div className="fir">Contact</div>

                        <div className="fir">About OneMNC</div>

                        <div className="fir">Settings</div>


                    </div>
                </div>


            </div>

        </>
    );
};


export default Menu;