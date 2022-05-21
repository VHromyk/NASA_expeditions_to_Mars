const Sidebar = ({ children }) => {
    return (
        <>
            <div className="container_sidebar">{children}</div>
            <style jsx>
                {`
                    .container_sidebar {
                        width: 25%;
                        padding-left: 15px;
                        padding-right: 15px;
                        display: flex;
                        flex-direction: column;
                    }
                    
                `}
            </style>
        </>
    );
};

export default Sidebar;
