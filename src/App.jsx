import { useState } from 'react'
import './App.css'
import LastEpisodeForm from './components/LastEpisodeForm/LastEpisodeForm'
import UpcomingEpisodeForm from './components/UpcomingEpisodeForm/UpcomingEpisodeForm'
import Navigation from './components/Navigation/Navigation'

function App() {

  const [page, setPage] = useState('lastEpisode')

  return (
    <div className='w-full'>
      <h1 className='py-4' id='title-admin'>MOMENTUM ADMIN</h1>

      <Navigation setPage={setPage} />


      {page == 'lastEpisode' && <LastEpisodeForm />}

      {page == 'upcomingEvent' && <UpcomingEpisodeForm />}

      {console.log(page == 'lastEpisode')}

    </div>
  )
}

export default App
