import React, {useEffect, useState} from "react";
import styles from './Podcast.module.css';
import axios from "axios";
import Loader from "../Loader";
import Series from "./Series";

const Podcast =() =>
{
    axios.defaults.baseURL = "https://api.dsctiet.tech/api";
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("/podcast-series/");
            setProjects(result.data);
            setLoading(false);
          };
          fetchData();
    },[]); 
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Podcasts</h1>
            </div>
            {
                loading?<Loader/>:
                <div className={styles.seriesList}>
                    {
                        projects.map((series, index)=>{
                            return(
                                <Series key={index} series={series}/>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Podcast;