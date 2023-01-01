import React from "react";
// import { auth } from "../Firebase";
import './Signinscreen.css';
// import './Loginscreen.css';

function Signinscreen(){
    // const emailRef=useRef(null);
    // const passwordRef=useRef(null);

    // const register = (e) => {
    //     e.preventDefault();
    //     auth.createUserWithEmailAndPassword(
    //         emailRef.current.value,
    //         passwordRef.current.value
    //     )
    //     .then((authUser) =>{
    //         console.log(authUser);
    //     })
    //     .catch((error) =>{
    //         alert(error.message);
    //     });
    // };
    // const signIn = (e) => {
    //     e.preventDefault();
    // };

    return(
        <div className="loginscreen_gradient">
        <div className="signinscreen">
            
            <form className="signinform">
                <div classname="signindiv">
                <label for="Email">Email</label>
                <input  className="Emailtb"  type="email" name="Email" placeholder="Email"/>
                <br />
                <label for="pass">Password</label>
                <input  type="password" name="pass"  placeholder="Email"/>
                <br />
                <button type="submit" >Sign In</button>
                <br></br>
                <button type="submit">Register</button>
                </div>
            </form>
        </div>
        </div>
    )

    
}

export default Signinscreen; 