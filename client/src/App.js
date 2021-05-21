import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import MovieCardContainer from "./components/Movie/MovieCardContainer";
import "./App.css";
import MoviePage from "./components/Movie/MoviePage";
import NotFound from "./components/Error/NotFound";
import Navbar from "./components/Navbar/Navbar";
import {API_URL} from "./Constants";


function App() {
    console.log(API_URL)
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path={"/"}>
                    <MovieCardContainer/>
                </Route>
                <Route exact path={"/movie/:id"}>
                    <MoviePage/>
                </Route>
                <Route exacp path={"/movie"}>
                    <Redirect to={"/"}/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
