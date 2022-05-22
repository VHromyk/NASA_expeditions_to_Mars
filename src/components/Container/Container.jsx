
const Container = ({children}) => {
  return (
    <div style={{
      // backgroundImage: 'url(../../images/mars.png)',
      height: '100vh',
      backgroundSize: 'cover',
      color: "white",
    }}>
          <div className="container_box">{children}</div>
          <style jsx>
              {`
                  .container_box {
                      width: 1200px;
                      margin-left: auto;
                      margin-right: auto;
                      padding-left: 36px;
                      padding-right: 36px;
                  }
              `}
          </style>
      </div>
  );
}


export default Container;