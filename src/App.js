import React,{useState} from 'react'
import axios from 'axios'

function App() {
  const [data,setData] = useState({})
  const [location,setLocation] =useState('')



  const url='https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b43ed3b82d35b3abcf7608ed7f7a63ef'
  
  const searchLocation = (event) =>{ //ffgg
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      

    }
    
  }
  return (
    <div className="app">
    <div className='search'>
      <input 
      value ={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder='Enter Location'
      type='text'/>
    </div>
      <div className='container'>
      <div className='top'>
      <div className='location'>
        <p>{data.name}</p>
      </div>
      <div className='temp'>
      <h1>{data.main.temp}deg F</h1>
      
      </div>
      <div className='description'>
        <p>Clouds</p>
      </div>
      </div>

      <div className='bottom'> 
      <div className='feels'>
        <p>65 deg F</p>
        <p className='bold'>Feels Like</p>
      </div>
      <div className='humidity'>
        <p>20%</p>
        <p className='bold'>Humidity</p>
      </div>
      <div className='wind'>
        <p>12 MPH</p>
        <p className='bold'>Wind Speed</p>
      </div>
      </div>

      </div>


    </div>
  );
}

export default App;
