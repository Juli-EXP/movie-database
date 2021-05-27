import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MovieCardContainer from "./components/movie/MovieCardContainer";
import "./App.css";
import MoviePage from "./components/movie/MoviePage";
import AddMovie from "./components/movie/AddMovie";
import AddRating from "./components/rating/AddRating";
import NotFound from "./components/error/NotFound";


const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={"/movie/add"}>
                    <AddMovie/>
                </Route>
                <Route exact path={"/movie/:id"}>
                    <MoviePage/>
                </Route>
                <Route exact path={"/movie/:id/rating/add"}>
                    <AddRating/>
                </Route>
                <Route exact path={["/movie", "/"]}>
                    <MovieCardContainer/>
                </Route>
                <Route>
                    <NotFound/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
