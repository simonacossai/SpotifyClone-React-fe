import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Player from './components/Player/Player';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import AlbumPage from './components/Detail/AlbumPage'
import ArtistPage from './components/ArtistPage/ArtistPage';
import Comments from './components/Comments/Comments';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
function App({props}) {
  return (
    <>
      <Router>
      <Route
       path="/"
       exact
       render={(props ) => <Login {...props} />} />
        <Route
       path="/register"
       exact
       render={(props ) => <Registration {...props} />} />
      <Route
       path="/home"
       exact
       render={(props ) => <Home {...props} />} />
       <Route
      path="/AlbumPage/:id"
      render={(
      props 
      ) => <AlbumPage {...props} />} 
      />
      <Route
      path="/ArtistPage"
      exact
      render={(
      props 
      ) => <ArtistPage {...props} />} 
      />
       <Route
      path="/Comments/:songId"
      render={(
      props 
      ) => <Comments {...props} />} 
      />
      </Router>

    </>
  );
}

export default App;
