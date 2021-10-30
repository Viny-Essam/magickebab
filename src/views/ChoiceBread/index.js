import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import './choiceBread.css'
// import React from 'react'

let logo = <img src={process.env.PUBLIC_URL, 'images/logo1.png'} alt="" />
let bread = <img src={process.env.PUBLIC_URL, 'images/galette.png'} alt="" />
let kebab = <img src={process.env.PUBLIC_URL, 'images/kebab.png'} alt="" />
let painlabel = 'Pain'
let paingalette = 'Galette'

const Button = ({img, label, onChoice}) =>{
    return(
        <button className="breadChoice--btn" onClick={onChoice}> {img} <span className="breadChoice--btn-label">{label}</span></button>
    )
}

const BreadChoice = () => {
    const [choice, setChoice] = useState("")
    const history = useHistory()

    const handleChoice = (btnId) => {
        setChoice(btnId)
        choice !== '' && history.push("/choice-meat")
    }
    
    return (
        <>
        <div className="leftpanier">
            <p>TOTAL: 11$00</p>
            <button>Passer la commande</button><br/>
            
            <h1>Votre commande</h1>

            <input type="text" value="Kebab viande, complet, blanche & BBQ" disabled/><br/>
            <input type="text" value="Kebab viande, complet, blanche & BBQ" disabled/>
        </div>

        <div className='breadChoice'>
            {logo}
            <h2 className="breadChoice--title">Pain ou Galette</h2>
            <div className="breadChoice--btnsContainer">
                <Button img={bread} label={painlabel} onChoice={() => handleChoice('Pain')} />
                <Button img={kebab} label={paingalette} onChoice={() => handleChoice('Galette')} />
            </div>
        </div>
        </>
    )
}

export default BreadChoice
