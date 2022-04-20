import styles from './Podcast.module.css';
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Episode =({episode})=>{
    
    const [members, setMembers] = useState(episode.members);
    const [guest, setGuests] = useState(episode.guest);
    
    return(
        <a href={episode.link} target='_blank'>
            <div className={styles.episodeContainer}>
                <FontAwesomeIcon icon={faPlay} size="sm" className={styles.icon} />
                <span>{"Episode "+episode.number+" - "}</span>
                <span className={styles.episodeName}>{episode.name}</span>
                <div className={styles.members}>
                    {
                        members.map((member)=>{
                            return(
                                <img src={'https://media.dsctiet.tech/'+member.image} alt={member.name} title={member.name} className={styles.memberImage}/>
                            )
                        })
                    }
                    {
                        guest?
                        <img src={'https://media.dsctiet.tech/'+guest.image} alt={guest.name} title={guest.name} className={styles.memberImage}/>    
                        :null
                    }
                </div>
            </div>
        </a>
    )
}

export default Episode;