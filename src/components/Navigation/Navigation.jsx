import React from 'react'
import './Navigation.css'

function Navigation({ setPage }) {
    return (
        <nav className='navigation w-full flex justify-around my-4'>
            <button onClick={() => setPage('lastEpisode')} className='nav-button'>ADAUGA ULTIM EPISOD</button>
            <button onClick={() => setPage('upcomingEvent')} className='nav-button'>ADAUGA EVENIMENT CARE URMEAZA</button>
        </nav>
    )
}

export default Navigation