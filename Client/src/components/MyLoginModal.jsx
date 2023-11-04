import { useEffect, useState } from 'react';
import '../style/MyLoginModal.css'
import { useAuth0 } from "@auth0/auth0-react";

const MyLoginModal = ({closeLoginModal}) => {

    useEffect(() => {

        document.body.style.overflowY = "hidden";

        return () => { document.body.style.overflowY = "scroll"; }
    }, [])

    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');

    const HandleChange = (e) => {
        const { name, value } = e.target

        if (name === "loginName") {
            setLoginName(value)
        }
        else {
            if (name === "Password") {
                setPassword(value)
            }
        }
    }

    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <>
            <div className="modal-wrapper"></div>
            <div className="modal-container">

                <div className="closebutton">
                    
                <i className="fa-solid fa-xmark" onClick={closeLoginModal}></i>

                </div>
                <div className="login">

                    {isAuthenticated && <div className="profile">

                        <img src={user.picture} alt={user.name} className="profileImg" />

                        <p><h4 className='centre'>{user.name}</h4>  </p>
                        
                        </div>}
                    {isAuthenticated ? (
                        <button className="btn" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                    ) : (<>
                        <div className="header">
                        <h4 className='centre'>Login/Signup</h4>
                        </div>
                        <br />


                        <span>Login Name :</span>
                        <input type="text" className="input" value={loginName}
                            onChange={HandleChange} name='loginName' required />
                        <br />
                        <span>Password : </span>
                        <input type="text" value={password} className='input' onChange={HandleChange} name='Password' required />
                        <br />

                        <button className="btnL">Sign Up</button>
                        <br />
                        <div className="btn-holder">
                        <span className='centre'>Or</span>
                        <br />
                        <span className='Login' onClick={() => loginWithRedirect()}>Log In</span>
                        </div>

                    </>

                    )
                    }


                </div>
            </div>
        </>
    );
};

export default MyLoginModal;