import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

import { auth } from '@remote/firebase';

function AuthGuard({ children }: { children: React.ReactNode }) {
  const [init, setInit] = useState(false);

  onAuthStateChanged(auth, (user) => {
    console.log('user :', user);

    setInit(true);
  });

  if (init === false) {
    return <div>인증 처리중 ...로딩중...</div>;
  }

  return <>{children}</>;
}

export default AuthGuard;
