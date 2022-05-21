import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const getData = async (rover, camera, days) => {

const data = await axios
    .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${days}&camera=${camera}&page=1&api_key=${API_KEY}`
    )
    .then((res) => res.data);
  
  return data;
}


export default getData;