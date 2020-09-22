import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Landing({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Dev-In</h1>
          <p className='lead'>
            Dev-In은 개발자들분들과 소통하기 위해 만들어진 Sns입니다.
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              회원가입
            </Link>
            <Link to='/login' className='btn btn-light'>
              로그인
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(Landing);
