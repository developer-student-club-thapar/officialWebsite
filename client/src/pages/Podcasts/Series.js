import styles from './Podcast.module.css';
import React, {useEffect, useState} from "react";

const Series =({series})=>{
    return(
        <div>
            <img src={'https://media.dsctiet.tech/'+series.logo} alt="logo" className={styles.logo}/>
            <div>
                
            </div>
        </div>
    )
}

export default Series