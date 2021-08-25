import './App.css';
import Navbar from './components/Navbar';
import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <div className="w-full bg-darkgray max-w-5xl m-auto">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/">
              <ListPage />
            </Route>
            <Route path=":roomID">
              <DetailsPage />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
