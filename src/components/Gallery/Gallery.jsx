import { useState, useEffect } from "react";
import getData from "../../services/api";
import Button from '@mui/material/Button';
import Selectors from "../Selectors/Selectors";
import Content from "../Content/Content";
import Container from '../Container/Container';
import Header from '../../components/Header/Header';


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

  
  console.log(camera, days, rover);
  console.log(!data);

  return (
      <>
          <Container>
              <Header />
              <h1 className="title">Explore with Perseverance</h1>
              <p className="description">
                  Explore some of the sites the Mars Perseverance rover has
                  studied up close. View images taken by the rover and learn
                  about key points of interest
              </p>
              <Selectors
                  rover={rover}
                  camera={camera}
                  days={days}
                  onChangeRover={onChangeRover}
                  onChangeCamera={onChangeCamera}
                  onChangeDays={onChangeDays}
                  onHandleSubmit={onHandleSubmit}
              />

              <Content>
                  {data ? (
                      <ul className="list_container">
                          {data.map((obj) => (
                              <li key={obj.id} className="list_element">
                                  <img
                                      src={obj.img_src}
                                      alt={obj.id}
                                      width="168px"
                                  />
                              </li>
                          ))}
                      </ul>
                  ) : (
                      <p>Choose options for search images!</p>
                  )}

                  {data.length > 6 ? (
                      <Button
                          className="load_button"
                          type="submit"
                          variant="contained"
                          color="primary"
                          // onClick={onHandleSubmit}
                      >
                          Load more...
                      </Button>
                  ) : (
                      ''
                  )}
              </Content>
          </Container>
          <style jsx>
              {`
                  .list_container {
                      display: flex;
                      flex-wrap: wrap;
                      margin: -12px;
                  }
                  .list_element {
                      list-style: none;
                      margin: 12px;
                  }
                  .form_button {
                      width: 147px;
                  }
                  .load_button {
                      display: block;
                      margin-left: auto;
                      margin-right: auto;
                      margin-top: 60px;
                      margin-bottom: 60px;
                  }
                  .title {
                      margin-top: 212px;
                      font-weight: 500;
                      font-size: 70px;
                      line-height: 140%;
                      letter-spacing: 0.1px;
                  }
                  .description {
                      width: 815px;
                      font-weight: 300;
                      font-size: 24px;
                      line-height: 160%;
                      letter-spacing: 0.1px;
                      color: rgba(255, 255, 255, 0.9);
                  }
              `}
          </style>
      </>
  );
}

export default Gallery;