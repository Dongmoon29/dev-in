import React from 'react';
import { Link } from 'react-router-dom';
const DashboardAction = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light'>
        <i className='fas fa-user-circle text-primary'></i> 프로필 수정
      </Link>
      <Link to='/edit-experience' className='btn btn-light'>
        <i className='fab fa-black-tie text-primary'></i> 경력 추가하기
      </Link>
      <Link to='/edit-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-primary'></i> 학력 추가하기
      </Link>
    </div>
  );
};
export default DashboardAction;
