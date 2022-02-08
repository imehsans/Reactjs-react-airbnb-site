import React from "react"

export default function Navbar(){
    return (
        <nav>

            <img 
            className="nav--logo"
            src={ require("../images/airbnb-logo.png") } 
            alt="Logo-Image"
            

            />
            {/* <h2 className="nav--h2">Ehsan Created site for CV</h2> */}
        </nav>
    )
}
