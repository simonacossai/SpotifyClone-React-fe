import React, { Component } from 'react'
import './Sidebar.css';
import logo from '../../asset/SpotifyLogo.png'
import { Link, withRouter } from 'react-router-dom'
class Sidebar extends Component {
    state={
        user:[]
    }
    logout=async()=>{
        localStorage.clear()
        this.props.history.push('/')
    }
    componentDidMount(){
        this.getProfile()
    }

    getProfile=async()=>{
        let id=  localStorage.getItem("id");
        try {
            let response = await fetch("http://localhost:3001/users/"+ id)
            if (response.ok) {
                let user = await response.json()
                console.log("state",user)
                this.setState({user})
            } else {
                console.log("error during fetch")
            }
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <>
                <nav
                    className="navbar navbar-expand-sm navbar-dark bg-dark navbar-fixed-left">
                    <Link to="/home">
                    <a className="navbar-brand mt-3" href="#"><img src={logo} width="140" height="42"/></a>
                    </Link>
                    <div className="collapse navbar-collapse mt-3" id="navbarNavDropdown">
                        <ul className="navbar-nav text-left">
                        <Link to="/home" className="add-link">
                            <li className="nav-item active text-left">
                                <a className="nav-link" href="homePage.html"
                                ><svg
                                    width="1em"
                                    height="1em"
                                    className="mr-3"
                                    viewBox="0 0 16 16"
                                    className="bi bi-house-door"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"/>
                                        <path
                                            fill-rule="evenodd"
                                            d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                    </svg>  Home <span className="sr-only">(current)</span></a>
                            </li>
                            </Link>
                          
                            <li className="nav-item">
                                <a className="nav-link"><svg
                                    width="1em"
                                    className="mr-2"
                                    height="1em"
                                    viewBox="0 0 16 16"
                                    className="bi bi-search"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                        <path
                                            fill-rule="evenodd"
                                            d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                                        />
                                        <path
                                            fill-rule="evenodd"
                                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                                        />
                                    </svg>  Discover</a>
                            </li>
                            <Link to="/AlbumPage" className="add-link">
                            <li className="nav-item">
                                <a className="nav-link">
                                    <svg
                                        className="mr-2"
                                        viewBox="0 0 512 512"
                                        width="1.2em"
                                        height="1.2em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            className="mr-2"
                                            d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>Your library
                                </a>
                            </li>
                            </Link>
                            <Link to="/ArtistPage" className="add-link">
                            <li className="nav-item">
                                <a className="nav-link" href="artistPage.html"
                                ><svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-music-note-beamed mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 13c0 1.105-1.12 2-2.5 2S1 14.105 1 13c0-1.104 1.12-2 2.5-2s2.5.896 2.5 2zm9-2c0 1.105-1.12 2-2.5 2s-2.5-.895-2.5-2 1.12-2 2.5-2 2.5.895 2.5 2z" />
                                        <path fill-rule="evenodd" d="M14 11V2h1v9h-1zM6 3v10H5V3h1z" />
                                        <path d="M5 2.905a1 1 0 0 1 .9-.995l8-.8a1 1 0 0 1 1.1.995V3L5 4V2.905z" />
                                    </svg>Artist page</a>
                            </li>
                            </Link>
                            <span className="profile-nav">
                                <li className="nav-item nav-profile-item" onClick={()=>this.logout()}>
                                    <a className="nav-link bottom" href="#">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-download mr-2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                            <path fill-rule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                        </svg>Log out</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link bottom" href="#" style={{ fontSize: "15px" }}>
                                        <svg width="1.3em" height="1.3em" viewBox="0 0 16 16" className="bi bi-person-circle mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                            <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                   </svg>  {this.state.user.username ?? "User 82903"}
                                      </a>
                                </li>
                            </span>
                        </ul>
                    </div>
                </nav>       </>

        )
    }
}
export default withRouter(Sidebar);