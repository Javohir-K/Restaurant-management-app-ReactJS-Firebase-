import React from 'react'
import "./HomeCounter.css"


function index() {
    return (
        <div className="homecounter-wrapper">
            <div className="counter-inner">
                <div className="time-counter">
                    <CounterCard counter="0" title="day"/>
                    <CounterCard counter="00" title="hr"/>
                    <CounterCard counter="00" title="min"/>
                    <CounterCard counter="00" title="sec"/>

                </div>
                <div className="counter-bottom">
                    <p>our limited offer</p>
                    <h2>buy 3 pizza get 1 for free</h2>
                    <a href="/">read more</a>
                </div>
            </div>
        </div>
    )
}

const CounterCard = ({counter, title})=>{
    return(
        <div className="counter-card">
            <h1>{counter}</h1>
            <p>{title}</p>
        </div>
    )
}

export default index
