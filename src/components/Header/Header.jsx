import Logo from '../../images/nasa_3x.png'

const Header = () => {
    return (
        <>
            <div className="header">
                <a href="/">
                    <img src={Logo} alt="logo" className="logo" />
                </a>
            </div>
            <style jsx>
                {`
                    .header {
                        height: 46px;
                        padding-top: 11px;
                        display: flex;
                        justify-content: center;
                    }
                    .logo {
                        width: 89px;
                        height: 24px;
                    }
                `}
            </style>
        </>
    );
};

export default Header;
