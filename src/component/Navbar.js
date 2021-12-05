import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    const appMode = document.getElementsByTagName('body');
    const navbarMode = document.getElementsByClassName('navbar');
    const app_mode_func = (event)=>{
        appMode[0].classList = `${event.target.classList[0]}` ;
        if(event.target.classList[0] !== 'app_mode_bg_color_f5f4f4'){
            navbarMode[0].classList.remove('navbar-light');
            navbarMode[0].classList.add('navbar-dark');
        }else{
            navbarMode[0].classList.add('navbar-light');
            navbarMode[0].classList.remove('navbar-dark');
        }
    }
    return (
        <nav className="navbar navbar-light navbar-expand-lg px-lg-5">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><b><i>{props.title}</i></b></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <div className="app-style d-flex align-items-center">
                        <div className="app-mode d-flex mx-1">
                            <div onClick={app_mode_func} className="app_mode_bg_color_1F1D36 mode mx-1"></div>
                            <div onClick={app_mode_func} className="app_mode_bg_color_3D0000 mode mx-1"></div>
                            <div onClick={app_mode_func} className="app_mode_bg_color_1E5F74 mode mx-1"></div>
                            <div onClick={app_mode_func} className="app_mode_bg_color_FF4D00 mode mx-1"></div>
                            <div onClick={app_mode_func} className="app_mode_bg_color_f5f4f4 mode mx-1"></div>
                        </div>
                        <span>Enable DarkMode</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Set Tittle here',
    aboutText: 'About Us'
}
