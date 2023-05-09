import React from "react";
import { Link, useParams } from "react-router-dom";
import '../App.css';
const MovieDetail = ({ films }) => {
    const { id } = useParams();
    const film = films.find(f => f.id === parseInt(id));

    return (
        <div className="cadre">
        <Link style={ {textDecoration: 'none', color: '#323232'}} to={'/'}><div className="goBack">{'<'}</div></Link>
            <iframe title={film.title} width="560" height="315" src={film.postUrl} frameBorder="0" allowFullScreen></iframe>
            <h2>{film.title}</h2>
            <p>{film.description}</p>
        </div>
    );
};

export default MovieDetail;