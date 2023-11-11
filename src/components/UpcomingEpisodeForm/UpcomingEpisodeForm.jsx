import React, { useState } from 'react'
import './UpcomingEpisodeForm.css'
import EventElement from '../EventElement/EventElement'

function UpcomingEpisodeForm() {

    const upcomingEventsData = [
        {
            eventDate: '23/10/2023',
            eventTitle: 'Cum se fac banii in 2023?',
        },
        {
            eventDate: '28/10/2023',
            eventTitle: 'Cum si cine a facut 1 milion de euro in recesiune?',
        },
        {
            eventDate: '23/11/2023',
            eventTitle: 'Cine este magnata care a facut 180.000 euro in doar 17 zile?',
        }
    ]

    const [upcomingEvent, setUpcomingEvent] = useState(
        {
            date: Date.now(),
            eventTitle: ''
        })

    return (
        <div className=''>
            <form action="#" id='upcomingEpisodeForm' className='flex flex-col items-center justify-center'>
                <label htmlFor="date" className='text-center'>DATA URMATORULUI</label>
                <input type="date" onChange={e => { setUpcomingEvent({ ...upcomingEvent, date: e.target.value }) }} value={upcomingEvent.date} className='text-center' />

                <label htmlFor="title" className='text-center'>TITLUL EPISODULUI</label>
                <input type="text" onChange={e => { setUpcomingEvent({ ...upcomingEvent, eventTitle: e.target.value }) }} value={upcomingEvent.eventTitle} className='text-center' />

                <button className='my-5' onClick={e => e.preventDefault()}>ADAUGA</button>
            </form>

            <EventElement eventElement={upcomingEvent} />

            {upcomingEventsData.map((element, index) => <EventElement key={index} eventElement={element} />)}

        </div>
    )
}

export default UpcomingEpisodeForm