import './components/header/header'
import "assets/styles/style.scss"

import Front from "components/front";
import Admin from "components/admin/admin";
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <switch>
                    <Route path="/" exact component={Front}/>
                    <Route path="/admin" component={Admin}/>
                </switch>
            </div>
        </Router>

    );
}

export default App;
