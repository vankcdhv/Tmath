const Item = ({title, link, icon}) => {
    return (
        <div className="header--item">
            <a href={link}>{title}</a>
        </div>
    )
}
export default Item;