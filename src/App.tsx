import { Outlet } from 'react-router';
import Header from './components/header/Header.jsx';
function App() {
  return (
    <div className='page'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
