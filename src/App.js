import './App.css';
import { SearchMovies } from './components/SearchMovies';

function App() {
  return (
    <div className="app_container container">
      <h1 className='text-primary p-3 text-uppercase mr-0'>Cinema Movies</h1>
      <SearchMovies/>
    </div>
  );
}

export default App;
