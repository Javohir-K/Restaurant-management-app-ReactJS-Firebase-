import React from 'react'
import "./HomeBanner.css"

function index() {
    return (
        <div className="homebanner-wrapper">
            <div className="homebanner-inner">
                <p>for 10% discount</p>
                <h2>get promocode</h2>
                <form >
                    <input type="text" placeholder="Enter your email" name="" id="inputemail" />
                    <input type="submit" value="Send" id="submitbtn"/>
                </form>
            </div>
        </div>
    )
}

export default index
