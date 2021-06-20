import React, {useEffect , useState} from 'react'
import './Covid.css';


export const Covid = () => {
    
    const [data, setData] = useState([])
    const getCovidData = async () => {
  
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() => {
       getCovidData();
    }, []);
    return (
        <>
       
        
        <h2 className="hea">COVID-19 CORONAVIRUS TRACKER</h2>
        <h2 className="hea">CASES IN OUR INDIA</h2>
        <div className="container">
        
                <div class="box">
            <div class="glass">
            <div class="content">
                       <h2><span>TOTAL</span>RECOVERD</h2>
                       <h4>{data.recovered}</h4>
                    </div>
                    </div>
                </div>
                <div class="box">
            <div class="glass">
            <div class="content">
                       <h2><span>TOATAL</span>CONFIRMED</h2>
                       <h4>{data.confirmed}</h4>
                    </div>
                    </div>
                </div>
                <div class="box">
            <div class="glass">
            <div class="content">
                       <h2><span>TOTAL</span>DEATH</h2>
                       <h4>{data.deaths}</h4>
                    </div>
                    </div>
                </div>
                <div class="box">
            <div class="glass">
            <div class="content">
                       <h2><span>TOTAL</span>ACTIVE</h2>
                       <h4>{data.active}</h4>
                    </div>
                    </div>
                </div>
                <div class="box">
            <div class="glass">
            <div class="content">
                       <h2><span>LAST</span>UPDATED</h2>
                       <h4>{data.lastupdatedtime}</h4>
                    </div>
                    </div>
                </div>
        </div> 
        
        </>
    )
}
