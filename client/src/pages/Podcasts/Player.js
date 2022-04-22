import styles from './Podcast.module.css';
import React, {useEffect, useState} from "react";

const Player =({url})=>{
    return(
        <div className={styles.playerContainer}>
            <iframe src={url} height="102px" width="400px" frameborder="0" scrolling="no" className={styles.player}></iframe>
            {
                console.log(url)
            }
        </div>
    )
}

export default Player