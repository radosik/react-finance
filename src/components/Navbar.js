import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.sidenav');
    window.M.Sidenav.init(elems, { edge: 'right' });
  });

  return (
    <Fragment>
      <nav className='z-depth-0'>
        <div className='nav-wrapper'>
          <a href='/home' className='left brand'>
            FinanceControl
          </a>
          <a
            href='#!'
            data-target='slide-out'
            className='left sidenav-trigger'
          >
            <i className='material-icons'>menu</i>
          </a>
          <ul className='left hide-on-med-and-down'>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/shops'>Shops</Link>
            </li>
            <li>
              <Link to='/receipt'>Receipt</Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul id='slide-out' className='sidenav'>
        <li>
          <Link to='/home' className='waves-effect sidenav-close'>
            <i className='material-icons'>home</i>Home
          </Link>
        </li>
        <li>
          <Link to='/dashboard' className='waves-effect sidenav-close'>
            <i className='material-icons'>shops</i>Shops
          </Link>
        </li>
        <li>
          <Link to='/receipt' className='waves-effect sidenav-close'>
            <i className='material-icons'>receipt</i>Receipt
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;