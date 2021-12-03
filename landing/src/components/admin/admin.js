import "components/admin/assets/styles/style.scss"
import {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Sidebar from "components/admin/sidebar/index"
import ArticleList from "components/admin/content/article/index"
import MenuList from "components/admin/content/menu/index"


const Admin = (props) => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        if (isLoading) {
            setIsLoading(false)
        }
    }, [isLoading]);
    return (
        <div className={"dashboard h-100vh"}>
            <Sidebar/>
            <div className={"dashboard__content"}>
                <Switch>
                    <Route path={"/admin/article"}>
                        <ArticleList/>
                    </Route>
                    <Route path={"/admin/menu"}>
                        <MenuList/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default Admin;