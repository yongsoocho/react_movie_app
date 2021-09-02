import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie(props) {
	const { year, title, summary, poster, genres } = props;
	
	return (
		<div className="movie">
			<div>
				<img src={ poster } alt={ title } title={ title }/>
			</div>
			<div className="movie_data">
				<h3 className="movie_title">{ title }</h3>
				<h5 className="movie_year">{ year }</h5>
				<ul className="genres">
					{
						genres.map((genre, index) => (
							<li className="genres_genre" key={ index }>{ genre }</li>
						))
					}
				</ul>
				<p className="movie_summary">{ summary.slice(0, 50) + '.....' }</p>
			</div>
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	year: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
	poster: PropTypes.string.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;