import {NavLink, useRouteMatch} from "react-router-dom";

const Sidebar = (props) => {
    let {url} = useRouteMatch();
    return (
        <div className={"dashboard__sidebar"}>
            <div className={"title text-align-center mt8 text-bold"}>
                TMATH - CODING ACADEMY
            </div>
            <NavLink activeClassName={"item--active"} className={"item mt24 cursor-pointer"} to={`${url}/menu`}>
                Menu
            </NavLink>
            <NavLink activeClassName={"item--active"} className={"item mt16"} to={`${url}/article`}>
                Bài viết
            </NavLink>
        </div>
    )
}

export default Sidebar;