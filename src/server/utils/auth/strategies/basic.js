const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom');
const axios = require('axios');
const config = require('../../../config/config');

const {
  API_URL,
  ADMIN_API_KEYS_TOKEN,
  // MANAGER_API_KEYS_TOKEN,
  // TEACHER_API_KEYS_TOKEN,
  // STUDENT_API_KEYS_TOKEN,
  // PUBLIC_API_KEYS_TOKEN,
} = config;

passport.use(
  new BasicStrategy((async (email, password, cb) => {
    // const token = email === 'public@eduli.com' ? PUBLIC_API_KEYS_TOKEN : STUDENT_API_KEYS_TOKEN;
    try {
      const { data, status } = await axios({
        url: `${API_URL}/api/auth/sign-in`,
        method: 'post',
        auth: {
          username: email,
          password,
        },
        data: {
          apiKeyToken: ADMIN_API_KEYS_TOKEN,
          // apiKeyToken: bloke === 'admin' ?
          //   ADMIN_API_KEYS_TOKEN :
          //   bloke === 'manager' ?
          //     MANAGER_API_KEYS_TOKEN :
          //     bloke === 'teacher' ?
          //       TEACHER_API_KEYS_TOKEN :
          //       bloke === 'student' ?
          //         STUDENT_API_KEYS_TOKEN :
          //         PUBLIC_API_KEYS_TOKEN,
        },
      });

      if (!data || status !== 200) {
        return cb(boom.unauthorized(), false);
      }

      return cb(null, data);
    } catch (error) {
      return cb(error);
    }
  })),
);
