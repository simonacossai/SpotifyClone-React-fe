import React, { Component } from 'react'
import './ArtistPage.css';
import Gallery from "../Home/Gallery";
import { Button } from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar'
import Player from '../Player/Player'

export default class ArtistPage extends Component {
    state = {
        beatlesSongs: [],
        loading: true,
        error: false,
      };
    
      url = "http://localhost:3001/music/songs/";
      token=  localStorage.getItem("token");

      fetchsongs = () => {
          fetch(this.url + "beatles",{
            headers: new Headers({
              authtoken: `${this.token}`,
            }),
          })
            .then((response) => response.json())
            .then((responseObject) => {
              this.setState({ beatlesSongs: responseObject.data }, () =>
                console.log(this.state.beatlesSongs)
              );
            })
          .then(() => this.setState({ loading: false }))
          .catch((err) => {
            this.setState({ error: true });
            console.log("An error has occurred:", err);
          });
      };
    
      componentDidMount() {
        this.fetchsongs();
      }
    render() {
        return (
            <>
                 <Sidebar/>
<div className="container-fluid mb-5">
        <div className="jumbotron jumbotron-fluid">
          <div className="container text-center jumbotron-text">
            <p className="text-center p-0 m-0 listeners">
              33,000,676 MONTHLY LISTENERS
            </p>
            <h1 className="display-4 text-center queen mt-0 mb-4">Beatles</h1>
            <span className="lead text-center mx-auto">
              <button className="mr-2" id="play">PLAY</button>
              <button className="follow mr-3">FOLLOW</button>
              <svg width="1em" className="dots" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </span>
          </div>
          <nav aria-label="breadcrumb" className="breadcrumb-nav">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="#">OVERVIEW</a></li>
              <li className="breadcrumb-item"><a href="#">RELATED ARTIST</a></li>
              <li className="breadcrumb-item"><a href="#">ABOUT</a></li>
            </ol>
          </nav>
        </div>
      </div>
                  <Gallery
                  className="mt-4"
                  title="The best of Beatles"
                  loading={this.state.loading}
                  songs={this.state.beatlesSongs}
                  props={this.props} 
                />
                      <Player />
            </>
        )
    }
}
