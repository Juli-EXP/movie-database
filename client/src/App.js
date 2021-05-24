import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import MovieCardContainer from "./components/Movie/MovieCardContainer";
import "./App.css";
import MoviePage from "./components/Movie/MoviePage";
import NotFound from "./components/Error/NotFound";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/movie/:id"}>
                    <MoviePage/>
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
