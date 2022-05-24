import React, { useEffect, useState } from 'react'
import './style.css'
const Home = () => {
    const[city,setCity]=useState('')
    const[search,setSearch]=useState("Delhi")
     useEffect(()=>{
        const fetchApi = async () => {

          const url= `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=040b2844d924dbed978f03d5748c75b2`;
          const response= await fetch(url);
          const resJson= await response.json();
          setCity(resJson.main)
         

        }
          fetchApi();

     },[search])
    return (
        <>
            <h1>THis is techno shailesh 
                by making this websites i  learn how to fetch api 
            </h1>

            <div className='box'>

                <h1>Weather App</h1>
               <div><span>city name</span><input  className='inputField' type='search' placeholder='Search'  
               onChange={

                    (event) => {
                     setSearch(event.target.value)

                    }
                }/>
                </div> 

                {
                    !city ? (<p>No data found</p>) : (  <div> 

                <div className='location'>
                <i class="fa-solid fa-street-view"></i>  <h1>{search}</h1>

                </div>
                <div className='temp'>

                    <h1>{city.temp}Celsius</h1>
                </div>
                <div className='maxtemp'>

                    <h5>{city.temp_min}C||{city.temp_max}C</h5>
                </div>
                </div> )} 
               

            </div>
        </>
    )
}

export default Home