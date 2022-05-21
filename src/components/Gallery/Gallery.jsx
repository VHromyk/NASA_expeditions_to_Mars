import { useState, useEffect } from "react";
import getData from "../../services/api";
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Sidebar from "../Sidebar/Sidebar";
import Content from "../Content/Content";
import Container from '../Container/Container';

const rovers = ['curiosity', 'opportunity', 'spirit'];
const cameras = [
    {
        abv: 'fhaz',
        name: 'Front Hazard Avoidance Camera',
    },
    {
        abv: 'rhaz',
        name: 'Rear Hazard Avoidance Camera',
    },
    {
        abv: 'mast',
        name: 'Mast Camera',
    },
    {
        abv: 'chemcam',
        name: 'Chemistry and Camera Complex',
    },
    {
        abv: 'minites',
        name: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
    },
];

const Gallery = () => {
  const [data, setData] = useState([]);
  const [camera, setCamera] = useState([]);
  const [days, setDays] = useState();
  const [rover, setRover] = useState();


  const onHandleSubmit = (e) => {
      e.preventDefault();
      return getData(rover, camera, days).then((res) => setData(res.photos));
  };

  // useEffect(() => {

  // }, [])

  const onChangeCamera = (e) => {
    e.preventDefault();
    setCamera(e.target.value)
  }

   const onChangeDays = (e) => {
    e.preventDefault();
    setDays(e.target.value)
  }

    const onChangeRover = (e) => {
        e.preventDefault();
        setRover(e.target.value);
    };

  


  const styledName = (name) => {
    const styledStr = name[0].toUpperCase() + name.slice(1);

    return styledStr;
  };

  
  
  console.log(camera, days, rover);
  console.log(!data);

  return (
      <>
          <Container>
              <Sidebar>
                  <FormControl className="form_control">
                      <InputLabel id="demo-simple-select-label-rover">
                          Rover
                      </InputLabel>
                      <Select
                          labelId="demo-simple-select-label-rover"
                          id="demo-simple-select-rover"
                          value={rover}
                          label="Rover"
                          onChange={onChangeRover}
                      >
                          {rovers.map((rover) => (
                              <MenuItem value={rover} key={rover}>
                                  {styledName(rover)}
                              </MenuItem>
                          ))}
                      </Select>
                  </FormControl>
                  <FormControl className="form_control">
                      <InputLabel id="demo-simple-select-label">
                          Camera
                      </InputLabel>
                      <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={camera}
                          label="Camera"
                          onChange={onChangeCamera}
                      >
                          {cameras.map(({ abv, name }) => (
                              <MenuItem value={abv} key={name}>
                                  {name}
                              </MenuItem>
                          ))}
                      </Select>
                  </FormControl>
                  <TextField
                      enabled
                      id="outlined-disabled"
                      label="Days"
                      value={days}
                      onChange={onChangeDays}
                  />
                  <Button
                      className="form_button"
                      type="submit"
                      variant="contained"
                      color="primary"
                      onClick={onHandleSubmit}
                  >
                      Explore
                  </Button>
              </Sidebar>
              <Content>
                  {data ? (
                      <ul className="list_container">
                          {data.map((obj) => (
                              <li key={obj.id} className="list_element">
                                  <img
                                      src={obj.img_src}
                                      alt={obj.id}
                                      width="300px"
                                  />
                                  <p>{obj.camera.full_name}</p>
                              </li>
                          ))}
                      </ul>
                  ) : (
                      <p>Choose options for search images!</p>
          )}
          
          {data.length > 6 ? <Button
                      className="load_button"
                      type="submit"
                      variant="contained"
                      color="primary"
                      // onClick={onHandleSubmit}
                  >
                      Load more...
                  </Button> : ''}
              </Content>
          </Container>

          <style jsx>
              {`
                  .list_container {
                      display: flex;
                      flex-wrap: wrap;
                      margin: -10px;
                  }
                  .list_element {
                      list-style: none;
                      margin: 20px;
                  }
                  .form_button {
                      margin-top: 20px;
                      width: 160px;
                      margin-left: auto;
                      margin-right: auto;
                  }
                  .form_control {
                      margin-bottom: 20px;
                  }
                  .load_button {
                    margin-left: 400px;
                  }
              `}
          </style>
      </>
  );
}

export default Gallery;