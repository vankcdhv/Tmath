import Item from "components/header/item";

const mockdata = [
    {
        title: "Trang chủ",
        link: "www.google.com"
    },
    {
        title: "Trang chủ",
        link: "www.google.com"
    },
    {
        title: "Trang chủ",
        link: "www.google.com"
    },
]
const Header = (props) => {
    return (
        <div className="header">
            <div className="header--container">
                <div className="header--logo">
                    <img src="/Tmath_logo.png" alt="TMath"/>
                    <span>TMATH</span>
                </div>
                {mockdata.map(item => <Item title={item.title} link={item.link} icon={item.icon}/>)}
            </div>
        </div>
    )
}

export default Header;