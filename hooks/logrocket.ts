import LogRocket from 'logrocket';
import setupLogRocketReact from 'logrocket-react';
import UIDGenerator from 'uid-generator';
import Cookies from 'universal-cookie';

const LogRocketHook = () => {
  const isProduction = process.env.NODE_ENV === 'production';
  const isBrowser = typeof window !== 'undefined';
  if (isProduction && isBrowser) {
    const cookies = new Cookies();
    const uidGenerator = new UIDGenerator();
    let uid = cookies.get('anonUserUid');
    if (!uid) {
      uid = uidGenerator.generateSync();
      cookies.set('anonUserUid', uid, { path: '/' });
    }
    LogRocket.init('yek-plus/portfolio-v2uuo');
    setupLogRocketReact(LogRocket);
    LogRocket.identify(uid, {
      name: uid,
      email: `${uid}@anon.com`,
    });
  }
};

export default LogRocketHook;
