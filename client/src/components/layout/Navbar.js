import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

function Navbar({ logout, auth: { isAuthenticated, loading } }) {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
          <span>👩🏻🧑🏻</span>Devs
        </Link>
      </li>
      <li>
        <Link to='/posts'>
          <span>📚</span>게시물
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <span>👤</span>내정보
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <span>👋</span>로그아웃
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
          <span>👩🏻🧑🏻</span>Devs
        </Link>
      </li>
      <li>
        <Link to='/register'>
          <span>👐</span>회원가입
        </Link>
      </li>
      <li>
        <Link to='/login'>
          <span>🚪</span>로그인
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> Dev-In
        </Link>
      </h1>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
}
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateProps, { logout })(Navbar);
