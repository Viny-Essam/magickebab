import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import './choiceSauce.css'
// import React from 'react'

let logo = <img src={process.env.PUBLIC_URL, 'images/logo1.png'} alt="" />
let sauceblanche = <img src={process.env.PUBLIC_URL, 'images/sauce-blanche.png'} alt="" />
let sauceharissa = <img src={process.env.PUBLIC_URL, 'images/sauce-harissa.png'} alt="" />
let sauceandalise = <img src={process.env.PUBLIC_URL, 'images/sauce-andalouse.png'} alt="" />
let saucebbq = <img src={process.env.PUBLIC_URL, 'images/sauce-bbq.png'} alt="" />
let sauceketchup = <img src={process.env.PUBLIC_URL, 'images/sauce-ketchup.png'} alt="" />
let saucecurry = <img src={process.env.PUBLIC_URL, 'images/sauce-curry.png'} alt="" />

let sauceblanchelabel = 'Blanche'
let sauceharissalabel = 'Harissa'
let sauceandaliselabel = 'Andalise'
let saucebbqlabel = 'BBQ'
let sauceketchuplabel = 'Ketchup'
let saucecurrylabel = 'Curry'

const Button = ({img, label, onChoice}) =>{
    return(
        <button className="breadChoice--btn" onClick={onChoice}> {img} <span className="breadChoice--btn-label">{label}</span></button>
    )
}

const SauceChoice = () => {
    const [choice, setChoice] = useState("")
    const history = useHistory()

    const handleChoice = (btnId) => {
        setChoice(btnId)
        choice !== '' && history.push("/choice-recapitulatif")
    }
    
    return (
        <div className='breadChoice'>
            {logo}
            <h2 className="breadChoice--title">Quelques Sauces ? </h2>
            <div className="breadChoice--btnsContainer">
                <Button img={sauceblanche} label={sauceblanchelabel} onChoice={() =>
                handleChoice('Pain')}/>
                <Button img={sauceharissa} label={sauceharissalabel} onChoice={() =>
                handleChoice('Galette')}/>
                <Button img={sauceandalise} label={sauceandaliselabel} onChoice={() =>
                handleChoice('Galette')}/>
                <Button img={saucebbq} label={saucebbqlabel} onChoice={() =>
                handleChoice('Pain')}/>
                <Button img={sauceketchup} label={sauceketchuplabel} onChoice={() =>
                handleChoice('Galette')}/>
                <Button img={saucecurry} label={saucecurrylabel} onChoice={() =>
                handleChoice('Galette')}/>
            </div>                       
        </div>
    )
}

export default SauceChoice
