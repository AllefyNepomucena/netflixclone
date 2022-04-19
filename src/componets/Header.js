import React from "react";
import "./Header.css"

export default () => {
   return(
       <header>
        <div className="header--logo">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Logonfx.png/800px-Logonfx.png" alt="Netflix" />
            </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Usuario" />
                </a>
            </div>
       </header>
    )
}
