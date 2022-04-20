// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getFavourite } from '../../state/reducers/favouritesReducer';
// import Card from '../../commons/Card';

// const apiKey = 'a3c6f3168add0be9ecdcc3ef1a95095b';

// const Favourites = () => {
//   const dispatch = useDispatch();

//   const user = useSelector(state => state.user);

//   console.log('soy el user', user);

//   const favs = useSelector(state => state.favourites);

//   console.log('soy tus favs', favs);

//   Promise.all(
//     favs.map(movie => {
//       return axios
//         .get(
//           `https://api.themoviedb.org/3/movie/${movie.movieId}?api_key=${apiKey}&language=en-US`
//         )
//         .then(res => res.data);
//     })
//   ).then(values => (movies = values));

//   console.log('soy las moviessssss', movies);

//   useEffect(() => {
//     dispatch(getFavourite({ userId: user.id }));
//   }, [dispatch]);

//   return (
//     <div class='box'>
//       <div class='columns is-multiline layout'>
//         {movies.map((movie, i) => (
//           <div className='column is-one-quarter' key={i}>
//             <Card element={movie} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Favourites;
