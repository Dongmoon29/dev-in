const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const config = require('config');
const secret = config.get('jwtSecret');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register User
// @access  Public

router.post(
  '/',
  [
    check('name', '이름을 작성해 주세요.').not().isEmpty(),
    check('email', '유효한 이메일을 작성해 주세요.').isEmail(),
    check('password', '비밀번호는 6자 이상으로 작성해주세요.').isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;
    try {
      // 유저가 존재할 시
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: '이미 존재하는 사용자입니다.' }] });
      }
      // 유저 아바타 가져오기
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm',
      });

      user = new User({
        name,
        email,
        avatar,
        password,
      });
      // 패스워드 encrypt
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // jsontoken 반환
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, secret, { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
      await user.save();
      res.send('회원가입 완료');
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
