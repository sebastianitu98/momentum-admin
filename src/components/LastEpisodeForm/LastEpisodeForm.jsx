import React, { useState } from 'react'
import './LastEpisodeForm.css'
import EpisodeComponent from '../EpisodeComponent/EpisodeComponent'

function LastEpisodeForm() {

    // const [episodes, setEpisodes] = useState([])

    const episodes = [
        {
            title: 'Tu iti faci patul de dimineata?',
            youtubeLink: 'https://www.youtube.com/watch?v=hF6IcInVlGs&t=136s',
            spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd#login',
        },
        {
            title: 'Tu iti faci patul de dimineata?',
            youtubeLink: 'https://www.youtube.com/watch?v=hF6IcInVlGs&t=136s',
            spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd#login',
        },
        {
            title: 'Tu iti faci patul de dimineata?',
            youtubeLink: 'https://www.youtube.com/watch?v=hF6IcInVlGs&t=136s',
            spotifyLink: 'https://open.spotify.com/playlist/37i9dQZF1DX0XUsuxWHRQd#login',
        },
    ]

    const [lastEpisode, setLastEpisode] = useState({
        title: '',
        youtubeLink: '',
        spotifyLink: ''
    })

    return (
        <div className='lastEpisodeSection w-full flex flex-col items-center'>

            <form action="#" className='flex flex-col items-center justify-center mx-auto' id='lastEpisodeForm'>

                <p className='titluSectiune'>ADAUGA ULTIM EPISOD</p>

                <label htmlFor="title" className='my-auto'>Titlul Episodului</label>
                <input type="text" onChange={e => setLastEpisode({ ...lastEpisode, title: e.target.value })} value={lastEpisode.value} className='text-center' />

                <label htmlFor="title">Link YouTube</label>
                <input type="text" onChange={e => setLastEpisode({ ...lastEpisode, youtubeLink: e.target.value })} value={lastEpisode.youtubeLink} className='text-center' />

                <label htmlFor="title">Link Spotify</label>
                <input type="text" onChange={e => setLastEpisode({ ...lastEpisode, spotifyLink: e.target.value })} value={lastEpisode.spotifyLink} className='text-center' />

                <button className='my-2' id='lastEpisodeformButton' onClick={(e) => e.preventDefault()}>Adauga</button>
            </form>

            <EpisodeComponent episodeData={lastEpisode} />

            <div className="latestEpisodesMap flex mx-auto items-center justify-center">
                {episodes.map((element, index) => <EpisodeComponent key={index} episodeData={element} />)}
            </div>

        </div>
    )
}

export default LastEpisodeForm