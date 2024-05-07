import './general.css'
import { useState } from 'react'

export default function Customize({color, setColor}) {


    return (
    <div className="customize">
        <h2>Customize</h2>
        <div className="colors-div">
            <div onClick={()=> setColor("rgb(191, 236, 236)")} id="blue"></div>
            <div onClick={()=> setColor("rgb(0, 0, 0)")} id="black"></div>
            <div onClick={()=> setColor("rgb(250, 187, 187)")} id="red"></div>
            <div onClick={()=> setColor("rgb(225, 201, 255)")} id="purple"></div>
            <div onClick={()=> setColor("rgb(20, 7, 133)")} id="darkblue"></div>
            <div onClick={()=> setColor("rgb(245, 216, 165)")} id="orange"></div>
        </div>
    </div>
    )
}