import React from "react"

export default function card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }else {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="card--bage">{badgeText}</div>}
            {props.item.img && <img className="card--image" src={ props.item.img} alt="" />}
            <div className="card--stats">
                <img className="card--star" src={ require("../images/sta-icon.png") } alt="Star" />
                <span style={{display: props.item.rating ? "block": "none"}}>{ props.item.rating }</span>
                <span style={{display: props.item.poin ? "block": "none"}} className="gray">{ props.item.poin }</span>
                {props.item.country && <span className="gray"> . { props.item.country }</span>}
            </div>
            {props.item.info && <p>{ props.item.info }</p>}
            <p><span className="bold" style={{display: props.item.price ? "block" :  "none"}}>From ${ props.item.price } /</span>person</p>
        </div>
    )
}
