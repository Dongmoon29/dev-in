import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import { Link } from 'react-router-dom';
const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td className='hide-sm'>{edu.degree}</td>
      <td>
        <Moment format='YYYY-MM-DD'>{edu.from}</Moment>{' '}
        {edu.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY-MM-DD'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteEducation(edu._id)}>
          삭제
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>학력사항</h2>
      {education.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <th>학교/학원</th>
              <th className='hide-sm'>학위</th>
              <th className='hide-sm'>기간</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{educations}</tbody>
        </table>
      ) : (
        <Link to='/edit-education'>
          <button className='btn btn-skyblue'>학력정보를 등록해주세요</button>
        </Link>
      )}
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);
