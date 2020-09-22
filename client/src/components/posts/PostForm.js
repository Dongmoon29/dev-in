import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');
  return (
    <div className='post-form' style={{ width: '80%' }}>
      <div
        className='bg-white p'
        style={{ border: 'none', borderBottom: '1px solid black' }}>
        <h3>게시물 작성</h3>
      </div>
      <form
        className='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='작성하실 게시물'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required></textarea>
        <input type='submit' className='btn btn-dark my-1' value='확인' />
      </form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
