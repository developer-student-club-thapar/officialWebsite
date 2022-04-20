import styles from './Podcast.module.css';
import React, {useEffect, useState} from "react";
import Episode from './Episode';

const Series =({series})=>{
    
    const [episodes, setEpisodes] = useState(series.podcasts);
    
    return(
        <div className={styles.seriesContainer}>
            <img src={'https://media.dsctiet.tech/'+series.logo} alt="logo" className={styles.seriesImage}/>
            <div className={styles.text}>
                <h2>{series.name}</h2>
                <p>{series.note}</p>
                <div className={styles.episodeList}>
                    {
                        episodes.map((episode)=>{
                            return(<Episode episode={episode} key={episode.id}/>)
                        })
                    }
                    {
                        episodes.length < 3?
                        <span>More episodes incoming!</span>
                        :null
                    }
                </div>
            </div>
        </div>
    )
}

export default Series