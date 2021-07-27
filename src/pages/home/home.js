import React from 'react';
import '../../App.css';
import userLocalStore from '../../store/localStore'
import ReviewForm from './form';
import Reviews from './reviews';
import { useNavigate } from 'react-router-dom';

function Home() {

  let navigate = useNavigate();

  const [user, setUser] = userLocalStore({}, 'user');

  if (!user.name) {
    navigate('/login')
  }

  const [reviews, setReviews] = userLocalStore([], 'reviews');

  const handleSubmit = (data) => {
    setReviews([...reviews, data]);
  }

  const logout = () => {
    setUser({});
    navigate("/login");
  }

  const clearStore = () => {
    setReviews([]);
  }


  return (
    <div className="App">
      <div className="title">
        <ul>
          <li><a className="active" href="#home">Home</a></li>
          <li className="right"><a href='#' onClick={logout}>Logout</a></li>
          <li className="right"><a href='#' onClick={clearStore}>ClearStore</a></li>
          <li className="right"><a href='#'>{user.name}</a></li>
        </ul>
      </div>

      <ReviewForm onSubmit={handleSubmit} />

      {reviews.length ? <Reviews reviews={reviews} /> : null}

    </div >
  );
}

export default Home;
