import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <p>404 - Page not found</p>
        <Link className="App-link" to="/">
          Go home
        </Link>
      </header>
    </div>
  );
}

export default NotFound;
