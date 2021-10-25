import Item from "components/header/item";

const Header = (props) => {
    return (
        <div className="header">
            <div className="header--container">
                <a href="/" className="header--logo">
                    <img src="/Tmath_logo.png" alt="TMath"/>
                    <span>TMATH</span>
                </a>
                {props.data.map(item => <Item title={item.title} link={item.link} icon={item.icon}/>)}
            </div>
        </div>
    )
}

export default Header;