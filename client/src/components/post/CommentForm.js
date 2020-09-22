import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  return (
    <div class='post-form'>
      <div
        class='bg-white p'
        style={{ border: 'none', borderBottom: '1px solid black' }}>
        <h3>댓글</h3>
      </div>
      <form
        class='form my-1'
        onSubmit={(e) => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}>
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='이 게시물에 댓글 달기'
          value={text}
          onChange={(e) => setText(e.target.value)}
          required></textarea>
        <input type='submit' class='btn btn-dark my-1' value='확인' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
