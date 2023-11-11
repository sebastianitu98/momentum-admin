import React from 'react'
import './LatestEpisodes.css'

function EpisodeComponent({ episodeData }) {
    return (
        <div className='episodeElement mx-10 flex flex-col justify-between'>
            {episodeData.image && <img src={`${episodeData.image}`} alt="IMG" className='episodeImg' />}
            {!episodeData.image && <img src={`momentum_youtube.png`} alt="IMG" className='episodeImg' />}

            {episodeData && <p className='episode-title text-white'> {episodeData.title} </p>}

            <div className="episodeElementLinks flex justify-between">

                {episodeData &&
                    <a href={`${episodeData.youtubeLink}`} target="_blank">
                        <img src={'youtube-logo-2431 (1).png'} alt="IMG" />
                    </a>
                }

                {episodeData &&
                    <a href={`${episodeData.spotifyLink}`} target="_blank">
                        <img src={'spotify-logo-5434 (1).png'} alt="IMG" />
                    </a>
                }

            </div>

            <div className="edit-delete flex justify-between">
                {episodeData._id && <button> DELETE </button>}
                {episodeData._id && <button> EDIT </button>}
            </div>

        </div>

    )
}

export default EpisodeComponent