import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import './choiceMeat.css'
// import React from 'react'

let logo = <img src={process.env.PUBLIC_URL, 'images/logo1.png'} alt="" />
let viande = <img src={process.env.PUBLIC_URL, 'images/viande.png'} alt="" />
let tofu = <img src={process.env.PUBLIC_URL, 'images/tofu.png'} alt="" />
let viandelabel = 'Viande'
let tofulabel = 'Tofu'

const Button = ({img, label, onChoice}) =>{
    return(
        <button className="breadChoice--btn" onClick={onChoice}> {img} <span className="breadChoice--btn-label">{label}</span></button>
    )
}

const MeatChoice = () => {
    const [choice, setChoice] = useState("")
    const history = useHistory()

    const handleChoice = (btnId) => {
        setChoice(btnId)
        choice !== '' && history.push("/choice-ingredients")
    }
    
    return (
        <div className='breadChoice'>
            {logo}
            <h2 className="breadChoice--title">Viande ou Tofu</h2>
            <div className="breadChoice--btnsContainer">
                <Button img={viande} label={viandelabel} onChoice={() =>
                handleChoice('Viande')}/>
                <Button img={tofu} label={tofulabel} onChoice={() =>
                handleChoice('Tofu')}/>
            </div>                       
        </div>
    )
}

export default MeatChoice
