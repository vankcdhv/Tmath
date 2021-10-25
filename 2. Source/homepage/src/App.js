import './components/header/header'
import "assets/styles/style.scss"

import Front from "components/front";
import Admin from "components/admin";
import {Route, BrowserRouter as Router} from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Route path="/" exact component={Front}/>
                <Route path="/admin" exact component={Admin}/>
            </div>
        </Router>

    );
}

export default App;
