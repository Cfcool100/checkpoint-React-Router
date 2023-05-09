import React,{useState} from 'react';
import Card from './movieCard';
import {Link} from 'react-router-dom'

const MovieList = ({ films }) => {
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
        <div className="search">
                <input onChange={e => setSearchTerm(e.target.value)} type="search" name="search" id="" />
            </div>
        <div className='cardFilm'>
            {films.filter((film) => {
                return film.title.toLowerCase().includes(searchTerm)
            }).map((film) => {
                return (
                    <>
                    <Link style={ {textDecoration: 'none', color: '#cccccc'}} to={`/movie/${film.id}`} key={film.id}>
                        <div className='box'>
                        <Card film={film} />
                    </div>
                    </Link>
                    </>
                )
            })}
        </div>
        </>
    );
};

export default MovieList;