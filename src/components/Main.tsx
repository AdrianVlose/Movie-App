import SearchBar from './bars/SearchBar.jsx';
import { Outlet } from 'react-router';

function Main() {
  return (
    <main className='main'>
      <SearchBar />
      <Outlet />
    </main>
  );
}

export default Main;
