import React from "react"

export default function Hero(){
    return (
        <section className="hero">
            <img 
            className="hero--photo"
            src={ require("../images/photo-grid.png") } 
            alt="Grid-Image"

            />

            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique intaricative activities lied by one of a kind hosts oil without leacing home.</p>

        </section>
    )
}
