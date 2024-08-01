import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { auth } from '@remote/firebase';
import { userAtom } from '@atoms/user';

function AuthGuard({ children }: { children: React.ReactNode }) {
  const [init, setInit] = useState(false);
  const setUser = useSetRecoilState(userAtom);

  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      setUser({
        uid: user.uid,
        email: user.email ?? '',
        displayName: user.displayName ?? '',
        photoURL: user.photoURL ?? '',
      });
    } else {
      setUser(null);
    }

    setInit(true);
  });

  if (init === false) {
    return null;
  }

  return <>{children}</>;
}

export default AuthGuard;
