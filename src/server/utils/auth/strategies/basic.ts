import axios from 'axios';
import boom from '@hapi/boom';
import passport from 'passport';
import { BasicStrategy } from 'passport-http';
import { API_URL, PUBLIC_API_KEYS_TOKEN } from '../../../config/config';

passport.use(
  new BasicStrategy((async (email: string, password: string, cb: Function) => {
    try {
      const { data, status } = await axios({
        url: `${API_URL}/api/auth/sign-in`,
        method: 'post',
        auth: {
          username: email,
          password,
        },
        data: {
          apiKeyToken: PUBLIC_API_KEYS_TOKEN,
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
