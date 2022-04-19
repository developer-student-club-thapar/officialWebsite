import styles from './Podcast.module.css';
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Episode =({episode})=>{
    return(
        <div className={styles.episodeContainer}>
            <FontAwesomeIcon icon="play"/>
            <span>{"Episode "+episode.number}</span>
        </div>
    )
}

export default Episode;