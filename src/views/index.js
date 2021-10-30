import React from 'react'
import { useHistory } from 'react-router';

const Home = () => {
    const history = useHistory()
    return (
        <div className="home">
            <button onClick={() => history.push('/choice-bread')}>
                Aller au choix du pain !
            </button>
        </div>
    )
}

export default Home
