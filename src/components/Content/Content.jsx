const Content = ({ children }) => {
    return (
        <>
            <div className="container_content">{children}</div>
            <style jsx>
                {`
                    .container_content {
                        width: 75%;
                    }
                `}
            </style>
        </>
    );
};

export default Content;
