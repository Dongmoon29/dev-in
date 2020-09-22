import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Emoji from 'react-emoji-render';

import { createProfile, getCurrentProfile } from '../../actions/profile';

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  history,
  getCurrentProfile,
}) => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });
  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(
    () => {
      getCurrentProfile();
      setFormData({
        company: loading || !profile.company ? '' : profile.company,
        website: loading || !profile.website ? '' : profile.website,
        location: loading || !profile.location ? '' : profile.location,
        status: loading || !profile.status ? '' : profile.status,
        skills: loading || !profile.skills ? '' : profile.skills,
        githubusername:
          loading || !profile.githubusername ? '' : profile.githubusername,
        bio: loading || !profile.bio ? '' : profile.bio,
        twitter: loading || !profile.social ? '' : profile.twitter,
        facebook: loading || !profile.social ? '' : profile.facebook,
        linkedin: loading || !profile.social ? '' : profile.linkedin,
        youtube: loading || !profile.social ? '' : profile.youtube,
        instagram: loading || !profile.social ? '' : profile.instagram,
      });
    }, // eslint-disable-next-line
    [getCurrentProfile, loading]
  );

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <div style={{ width: '50%' }}>
      <h1 className='large text-primary'>프로필</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> {profile.user.name}님을 소개해주세요!
      </p>
      <small>* = 필수 작성 항목</small>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <select name='status' value={status} onChange={(e) => onChange(e)}>
            <option value='0'>
              현재 {profile.user.name}님이 속한 포지션을 선택해주세요
            </option>
            <option value='개발자'>개발자</option>
            <option value='쥬니어 개발자'>쥬니어 개발자</option>
            <option value='시니어 개발자'>시니어 개발자</option>
            <option value='매니져'>매니져</option>
            <option value='학생 or 취준생'>학생 or 취준생</option>
            <option value='강사'>강사</option>
            <option value='인턴'>인턴</option>
            <option value='Etc'>Etc</option>
          </select>
          <small className='form-text'>자신의 포지션을 선택해주세요</small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='직장'
            name='company'
            value={company}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='웹사이트'
            name='website'
            value={website}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            {profile.user.name}님의 직장이나 개인 웹사이트를 적어주세요
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='주소'
            name='location'
            value={location}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            주소를 간략히 적어주세요 (ex: 서울, 부산, 경기....)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* 보유 기술'
            name='skills'
            value={skills}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            기술명 각각을 쉼표로 나누어 작성해주세요 (ex.
            HTML,CSS,JavaScript,PHP)
          </small>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='깃헙 Username'
            name='githubusername'
            value={githubusername}
            onChange={(e) => onChange(e)}
          />
          <small className='form-text'>
            Github repo들을 공유하고 싶으시면 Github username을 적어주세요
          </small>
        </div>
        <div className='form-group'>
          <textarea
            placeholder='A short bio of yourself'
            name='bio'
            value={bio}
            onChange={(e) => onChange(e)}></textarea>
          <small className='form-text'>간단한 자기소개글을 작성해주세요</small>
        </div>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light'>
            <Emoji text='공유하고 싶으신 📷SNS가 있으신가요?' />
          </button>
          <span>(선택사항)</span>
        </div>

        {displaySocialInputs && (
          <Fragment>
            <div className='form-group social-input'>
              <i className='fab fa-twitter fa-2x'></i>
              <input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-facebook fa-2x'></i>
              <input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-youtube fa-2x'></i>
              <input
                type='text'
                placeholder='YouTube URL'
                name='youtube'
                value={youtube}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-linkedin fa-2x'></i>
              <input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={(e) => onChange(e)}
              />
            </div>

            <div className='form-group social-input'>
              <i className='fab fa-instagram fa-2x'></i>
              <input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={(e) => onChange(e)}
              />
            </div>
          </Fragment>
        )}

        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          뒤로
        </Link>
      </form>
    </div>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
