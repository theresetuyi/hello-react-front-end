import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <Link to="/greeting">Greeting</Link>
      <h1>Home page</h1>
    </div>
  );
}

export default HomePage;
