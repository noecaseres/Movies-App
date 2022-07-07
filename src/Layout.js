import { Outlet } from 'react-router-dom';
import './CSS/App.css';

function Layout() {
  return (
    <div className="Layout_container mb-5">
      <div className='d-flex align-items-center justify-content-center mt-5'>
        <img src="https://www.svgrepo.com/show/99301/popcorn.svg" className='popcorn-icon'/>
        <h1 className='text-light p-3 text-uppercase m-0'>Cinema Movies</h1>
      </div>
      <Outlet />
    </div>
  );
}
export default Layout;
