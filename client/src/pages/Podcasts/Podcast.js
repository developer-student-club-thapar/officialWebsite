import React, {useEffect, useState} from "react";
import styles from './Podcast.module.css';
import axios from "axios";
import Loader from "../Loader";
import Series from "./Series";

const Podcast =() =>
{
    axios.defaults.baseURL = "https://api.dsctiet.tech/api";
    const [loading, setLoading] = useState(true);
    const [series, setSeries] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get("/podcast-series/");
            setSeries(result.data);
            setLoading(false);
          };
          fetchData();
    },[]); 

    let count = series.length;
    console.log(count);
    
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Podcasts</h1>
            </div>
            {
                loading?<Loader/>:
                <div className={styles.seriesList}>
                    {
                        series.map((series)=>{
                            count--;
                            return(
                                <>
                                    <Series key={series.id} series={series}/>
                                    {
                                        count>0?<hr/>:null
                                    }
                                </>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default Podcast;