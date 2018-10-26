import React from 'react';
import './Card.css';
import star from '../../images/star-clear.svg';
import filledStar from '../../images/star.svg';
import { toggleFavorite, addFavorite } from '../../actions/userActions';
import { connect } from 'react-redux';
import * as API from '../../utilities/API'


const Card = ({ movie, user, changeFavorite }) => {
	const handleFavorite = (movie) => {
		const { id, isFavorite } = movie
	 	changeFavorite(id)
	 	if(isFavorite) {
	 		API.removeFavorite(id, user.id)
	 	} else {
	 		API.addFavorite(movie, user.id)
	 	}
	}

	return(
		<div className='Card' style={{backgroundImage: 'url(' + movie.backdrop + ')'}}>
			<div className="card-inner-wrapper">
				<h3 className="movie-title" >{movie.title}</h3>
				<button 
					className="card-favorite-button" 
					onClick={() => handleFavorite(movie)} 
				>
					<img alt="" src={star} />
				</button>
				{/* <img  */}
					{/* src={movie.poster}  */}
					{/* className='poster-image'/> */}
				<p>{movie.overview}</p>
				<p>Opens: {movie.releaseDate}</p>
				<p>Viewer Rating: {movie.rating}</p>
			</div>
	  </div>
  )
}

export const mapStateToProps = (state) => ({
	user: state.user
})

export const mapDispatchToProps = (dispatch) => ({
	changeFavorite: (id) => dispatch(toggleFavorite(id)),
	addToFavorites: (movie, userId) => dispatch(addFavorite(movie, userId))
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
