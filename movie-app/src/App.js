import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie';
import './App.css';

class App extends Component {
	state = {
		isLoading: true,
		movies: []
	}

	getMovies = async () => {
		const { data:{ data: { movies } } } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
		this.setState(prevState => ({
			...prevState,
			movies,
			isLoading:false
		}))
	}

	componentDidMount() {
		this.getMovies();
		setTimeout(()=> {
			this.setState((prevState) => ({
				...prevState,
				isLoading: false
			}))
		}, 3000);
	}

	render() {
		const { isLoading, movies } = this.state;
		
		return(
			<section className="container">
				{ 
					isLoading ? (
						<div className="loader">
							<span className="loader_text">Loading...</span>
						</div>
					) : (
						movies.map(movie => (
							<div key={ movie.id }>
								<div className="movies">
									<Movie 
										id={ movie.id }
										year={ movie.year }
										title={ movie.title }
										summary={ movie.summary }
										poster={ movie.medium_cover_image }
										genres={ movie.genres }
										/>
								</div>
							</div>
						)) 
					) 
				}
			</section>
		)	
	}
}

export default App;