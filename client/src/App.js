import "./App.css";
import MovieCardContainer from "./components/movie/MovieCardContainer";

function App() {
    return (
        <Router>
            <Switch>
                <Route path={"/"}>

                </Route>
                <Route path={"/movie"}>

                </Route>
                <Route path={"/movie/:id"}>

                </Route>
                <Route path={"/movie/add"}>

                </Route>
            </Switch>
        </Router>
    );
}

export default App;
