
const Container = ({children}) => {
  return (
      <>
          <div className="container_box">{children}</div>
          <style jsx>
              {`
                  .container_box {
                      width: 100%;
                      margin-top: 20px;
                      display: flex;
                  }
              `}
          </style>
      </>
  );
}


export default Container;