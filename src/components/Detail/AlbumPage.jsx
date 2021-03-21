import React from 'react'
import { Badge, Card, Col, Container, Row, Spinner, ListGroupItem, ListGroup } from 'react-bootstrap'
import './AlbumPage.css';
import {BsMusicNote} from 'react-icons/bs';
import Sidebar from '../Sidebar/Sidebar'
import Player from '../Player/Player'

class AlbumPage extends React.Component {
    state = {
        songs: null,
        props: this.props
    }


    componentDidMount = async () => {
        const albumIdFromTheSearchBar = this.props.match.params.id;
        let token=  localStorage.getItem("token");

        try {
            let response = await fetch("http://localhost:3001/music/album/"+ albumIdFromTheSearchBar,{
                headers: new Headers({
                    authtoken: `${token}`,
                  }),
            })
            if (response.ok) {
                let song = await response.json()
                this.setState({
                    songs: song
                })
                console.log("state", this.state.songs)
            } else {
                console.log("error during fetch")
            }
        } catch (e) {
            console.log(e);
        }
    }

    render(props) {
        console.log("props", this.state.props)

        return (
<>
<Sidebar/>

            <div className="container mt-5 middleRow">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12 coverWrapper mt-3">
                        <div className="row">
                            {this.state.songs &&
                                <img
                                    src={this.state.songs.cover_big}
                                    className="albumCoverImg"
                                    style={{ width: "300px" }}
                                />
                            }
                        </div>
                        <div className="row">
                            {this.state.songs && <h6 className="albumName">{this.state.songs.title}</h6>}
                        </div>
                        <div className="row">
                            {this.state.songs && <h6 className="artist">{this.state.songs.artist.name}</h6>}
                        </div>
                        <div className="row">
                            <button type="button" className="btn btn-lg mt-3 mb-1">Play</button>
                        </div>
                        <div className="row my-2">
                            {this.state.songs && <h6 className="artist">2018 - {this.state.songs.nb_tracks} songs</h6>}
                        </div>
                        <div className="row mt-2">
                            <i
                                className="far fa-heart mr-3"
                                style={{ width: "25px" }}
                            ></i>
                            <i className="fas fa-ellipsis-h"></i>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 text-center" id="songs" style={{ display: "flex", flexDirection: "column" }}>
                        <ListGroup className="listgroup">

                            {this.state.songs && this.state.songs.tracks.data.map((song) => <ListGroupItem className="SongList">
                              <span className="text-left text-white">  <BsMusicNote className="mr-2"/>{song.title_short}</span>
                                <span className="text-right text-white">{((song.duration % 60) / 10).toFixed(2)}</span>
                            </ListGroupItem>)}

                        </ListGroup>
                    </div>
                </div>
            </div>
            <Player />
</>
        )
    }
}

export default AlbumPage

