const jwt = require('jsonwebtoken');
const config = require('config');
const secret = config.get('jwtSecret');

module.exports = function (req, res, next) {
  // 토큰 헤더에서 가져오기
  const token = req.header('x-auth-token');

  // 토큰이 없는 경우
  if (!token) {
    return res.status(401).json({ msg: '인증이 거부되었습니다' });
  }

  // 토큰 인증
  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: '유효한 토큰이 아닙니다.' });
  }
};
