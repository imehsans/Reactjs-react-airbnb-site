import React from "react"

export default function Hero(props){
    return (
        <div className="card">
            <img className="card--image" src={ props.img} alt="" />
            <div className="card--stats">
                <img className="card--star" src={ require("../images/sta-icon.png") } alt="Star" />
                <span>{ props.rating }</span>
                <span className="gray">{ props.poin }</span>
                <span className="gray">{ props.country }</span>
            </div>
            <p>{ props.info }</p>
            <p><span className="bold">From ${ props.price } / </span>person</p>
        </div>
    )
}
