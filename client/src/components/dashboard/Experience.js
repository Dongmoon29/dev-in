import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteExperience } from '../../actions/profile';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className='hide-sm'>{exp.title}</td>
      <td>
        <Moment format='YYYY-MM-DD'>{exp.from}</Moment>{' '}
        {exp.to === null ? (
          ' Now'
        ) : (
          <Moment format='YYYY-MM-DD'>{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => deleteExperience(exp._id)}>
          삭제
        </button>
      </td>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>경력사항</h2>
      {experience.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <th>직장</th>
              <th className='hide-sm'>직책</th>
              <th className='hide-sm'>근무년도</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{experiences}</tbody>
        </table>
      ) : (
        <Link to='/edit-experience'>
          <button className='btn btn-skyblue'>경력사항을 등록해주세요</button>
        </Link>
      )}
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);
