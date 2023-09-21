import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchGreeting } from './redux/slice';

function Greeting() {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, []);
  return (
    <>
      <Link to="/">Home</Link>
      <p>{greeting}</p>

    </>
  );
}

export default Greeting;
