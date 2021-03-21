import React, { Component } from "react";
import Gallery from "./Gallery";
import './Gallery.css';
import Sidebar from '../Sidebar/Sidebar'
import Player from '../Player/Player'

import { Alert } from "react-bootstrap";

class Home extends Component {
  state = {
    eminemSongs: [],
    museSongs: [],
   arianaGrandeSongs: [],
    loading: true,
    error: false,
  };

  url = "http://localhost:3001/music/songs/";
   token=  localStorage.getItem("token");
  fetchsongs = () => {
    Promise.all([
      fetch(this.url + "eminem",{
        headers: new Headers({
          authtoken: `${this.token}`,
        }),
      })
        .then((response) => response.json())
        .then((responseObject) => {
          this.setState({ eminemSongs: responseObject.data }, () =>
            console.log(this.state.eminemSongs)
          );
        }),
      fetch(this.url + "muse",{
        headers: new Headers({
          authtoken: `${this.token}`,
        }),
      })
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({ museSongs: responseObject.data })
         
        ),
      fetch(this.url + "halsey",{
        headers: new Headers({
          authtoken: `${this.token}`,
        }),
      })
        .then((response) => response.json())
        .then((responseObject) =>
          this.setState({arianaGrandeSongs: responseObject.data })
        ),
    ])
      .then(() => this.setState({ loading: false }))
      .catch((err) => {
        this.setState({ error: true });
        console.log("An error has occurred:", err);
      });
  };

  componentDidMount() {
    this.fetchsongs();
    console.log(this.state.arianaGrandeSongs)
  }

  render() {
    return (
      <>
           <Sidebar/>
      <div>
        <div className="container-fluid mb-5">
  
          {this.state.error && (
            <Alert variant="danger" className="text-center">
              An error has occurred, please try again later
            </Alert>
          )}

     
          {!this.state.error &&
           
              <>
      <div className="container mb-4 text-center d-flex mx-auto justify-content-center">
      <nav aria-label="breadcrumb ml-5">
        <ol className="breadcrumb ml-5">
          <li className="breadcrumb-item ml-3">
            <a href="#">Trending</a>
            <div className="underbar"></div>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Podcast</a>
            <div className="underbar"></div>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Moods and genres</a>
            <div className="underbar"></div>
          </li>
          <li className="breadcrumb-item">
            <a href="#">New releases</a>
            <div className="underbar"></div>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Discover</a>
            <div className="underbar"></div>
          </li>
        </ol>
      </nav>
    </div>
                <Gallery
                  title="#THROWBACKTHURSDAY"
                  loading={this.state.loading}
                  songs={this.state.museSongs.slice(0, 5)}
                  props={this.props} 
                />
                <Gallery
                  title="#TOP50ITALY"
                  loading={this.state.loading}
                  songs={this.state.arianaGrandeSongs.slice(0, 5)}
                  props={this.props} 
                />
                <Gallery
                  title="#TRENDINGNOW"
                  loading={this.state.loading}
                  songs={this.state.eminemSongs.slice(0, 5)}
                  style={{marginBottom: "100px"}}
                  props={this.props} 
                />
              </>
            }
        </div>
      </div>
      <Player />
      </>
    );
  }
}
export default Home;