import { useState } from "react";
import getData from "../../services/api";
import Button from '@mui/material/Button';
import Selectors from "../Selectors/Selectors";
import Content from "../Content/Content";
import Container from '../Container/Container';
import Header from '../../components/Header/Header';
import Modal from '../Modal/Modal';


const Gallery = () => {
  const [data, setData] = useState([]);
  const [camera, setCamera] = useState([]);
    const [days, setDays] = useState();
    const [rover, setRover] = useState();
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState();
    const [loader, setLoader] = useState(false);


  const onHandleSubmit = (e) => {
      e.preventDefault();
      return getData(rover, camera, days, page).then((res) => {
          if (res.photos.length === 0) {
              setData([]);
              setLoader(true);
          } else {
              setLoader(false);
              setData(res.photos)
          }
          
      });
  };

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

    const onLoadMore = (e) => {
        e.preventDefault();
        setPage((prevState) => prevState + 1);
        return getData(rover, camera, days, page).then((res) =>
            setData([...data, ...res.photos])
        );
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const toggleModal = (obj) => {
        setShowModal(true);
        setImage(obj);
    }

  return (
      <>
          <div className="wrap">
              <Container>
                  <Header />
                  <h1 className="title">Explore with Perseverance</h1>
                  <p className="description">
                      Explore some of the sites the Mars Perseverance rover has
                      studied up close. View images taken by the rover and learn
                      about key points of interest
                  </p>
              </Container>
          </div>
          <Container>
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
                  {data && (
                      <ul className="list_container">
                          {data.map((obj) => (
                              <li
                                  key={obj.id}
                                  className="list_element"
                                  onClick={() => toggleModal(obj)}
                              >
                                  <img
                                      className="list-image"
                                      src={obj.img_src}
                                      alt={obj.id}
                                      width="168px"
                                  />
                              </li>
                          ))}
                      </ul>
                  )}
                 {loader && <p className="loader">
                      No photos were found matching the given parameters. Please
                      change your search parameters and click search...
                  </p>}

                  {data.length >= 25 && 
                      <Button
                          className="load_button"
                          type="submit"
                          variant="contained"
                          color="primary"
                          onClick={onLoadMore}
                      >
                          Load more...
                      </Button>
                  }
              </Content>
          </Container>
          {showModal && (
              <Modal onClose={handleCloseModal}>
                  <img
                      src={image.img_src}
                      alt={image.camera.full_name}
                  />
              </Modal>
          )}
          <style jsx>
              {`
                  .wrap {
                      background-image: url('../../images/mars_3x.png');
                      background-size: cover;
                  }
                  .list_container {
                      display: flex;
                      flex-wrap: wrap;
                      margin: -12px;
                  }
                  .list_element {
                      list-style: none;
                      margin: 12px;
                      cursor: pointer;
                      width: 168px;
                      height: 168px;
                  }
                  .list_element:hover {
                      transform: scale(1.1);
                      transition: transform 0.25s;
                      overflow: hidden;
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
                      margin-top: 150px;
                      font-weight: 500;
                      font-size: 70px;
                      line-height: 140%;
                      letter-spacing: 0.1px;
                  }
                  .description {
                      width: 815px;
                      padding-bottom: 60px;
                      font-weight: 300;
                      font-size: 24px;
                      line-height: 160%;
                      letter-spacing: 0.1px;
                      color: rgba(255, 255, 255, 0.9);
                  }
                  .loader {
                      color: red;
                      text-align: center;
                  }
              `}
          </style>
      </>
  );
}

export default Gallery;