import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import './choiceIngredients.css'
// import React from 'react'

let logo = <img src={process.env.PUBLIC_URL, 'images/logo1.png'} alt="" />
let salade = <img src={process.env.PUBLIC_URL, 'images/salade.png'} alt="" />
let tomates = <img src={process.env.PUBLIC_URL, 'images/tomate.png'} alt="" />
let oignon = <img src={process.env.PUBLIC_URL, 'images/oignon.png'} alt="" />
let saladelabel = 'Salade'
let tomateslabel = 'Tomates'
let oignonlabel = 'Oignon'

const Button = ({img, label, onChoice}) =>{
    return(
        <button className="breadChoice--btn" onClick={onChoice}> {img} <span className="breadChoice--btn-label">{label}</span></button>
    )
}

const IngredientsChoice = () => {
    const [choice, setChoice] = useState("")
    const history = useHistory()

    const handleChoice = (btnId) => {
        setChoice(btnId)
        choice !== '' && history.push("/choice-sauce")
    }
    
    return (
        <div className='breadChoice'>
            {logo}
            <h2 className="breadChoice--title">Salade, tomates ou oignons ?</h2>
            <div className="breadChoice--btnsContainer">
                <Button img={salade} label={saladelabel} onChoice={() =>
                handleChoice('Pain')}/>
                <Button img={tomates} label={tomateslabel} onChoice={() =>
                handleChoice('Galette')}/>
                <Button img={oignon} label={oignonlabel} onChoice={() =>
                handleChoice('Galette')}/>
            </div>                       
        </div>
    )
}

export default IngredientsChoice
