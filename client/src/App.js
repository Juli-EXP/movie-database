import {useState} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MovieCardContainer from "./components/Movie/MovieCardContainer";
import "./App.css";


function App() {
    return (
        <Router>
            <Switch>
                <Route path={"/"}>
                    <MovieCardContainer/>
                </Route>
                <Route path={"/movie/:id"}>

                </Route>
            </Switch>
        </Router>
    );
}

export default App;
