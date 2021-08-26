import './App.css';
import Navbar from './components/Navbar';
import ListPage from './pages/ListPage';
import DetailsPage from './pages/DetailsPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen text-gray-light box-border px-2">
      <div className="w-full max-w-4xl m-auto">
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
