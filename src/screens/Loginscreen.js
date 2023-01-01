import React, { useState } from "react";
import './Loginscreen.css'
// import Nav from "../Nav";
import Signinscreen from "./Signinscreen";


function Loginscreen() {
    const [signin,setsignin]=useState(false);
return(

       
  <div className="loginscreen">

        <button className="signinbutton" onClick={()=>{setsignin(true)}}> Sign In</button>
        <div className="cineflixlogo">
            <img className="cineflix_logo" src={require("D:\\MRS05\\cineflix\\src\\Cineflix.png")} alt="Cineflix logo" />
            {/* <h1 className="welcometext">Welcome to Cineflix!</h1> */}
            {/* <img className="image" src={require("D:\\MRS04\\netflix-clone\\src\\screens\\1512217.jpg")} alt="Main_image" /> */}

        </div>
     {   (signin) ? 
        (<Signinscreen />) :
        (
        <div className="loginscreen_gradient">

            <div className="text">
                <h1 className="welcometext">Welcome to Cineflix!</h1> 
                <h2 className="welcometext2">Get unlimited access to your favourite <br/> 
                    TV episodes and movies.</h2>
                    <h3 className="signintext">
                        Sign up now!!
                    </h3>
                    <form>
                        <input type="text" placeholder="Email Address" />
                        <button onClick={()=>{setsignin(true)}}>Get Started</button>
                    </form>
            </div>
            <div className="image_div">
                <img className="image" src={require("D:\\MRS05\\cineflix\\src\\screens\\3658600.jpg")} alt="Main_image" />
            </div>
         </div>
    )       }                
    </div>    

);

}
export default Loginscreen;