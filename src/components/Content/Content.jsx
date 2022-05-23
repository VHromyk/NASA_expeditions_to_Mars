const Content = ({ children }) => {
    return (
        <>
            <div className="container_content">{children}</div>
            <style jsx>
                {`
                    .container_content {
                        margin-top: 48px;
                    }
                `}
            </style>
        </>
    );
};

export default Content;
