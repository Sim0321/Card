import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback } from 'react';
import { FirebaseError } from 'firebase/app';

import { FormValues } from '@models/signin';
import { auth } from '@remote/firebase';
import Form from '@components/signin/Form';
import { useAlertContext } from '@contexts/AlertContext';
import { useLocation, useNavigate } from 'react-router-dom';

function SigninPage() {
  const { open } = useAlertContext();
  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    async (formValues: FormValues) => {
      const { email, password } = formValues;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        // navigate('/');
        const from = location.state?.from?.pathname || '/';
        navigate(from, { replace: true });
      } catch (e) {
        // firebase의 error인지 네트워크의 error인지 구분
        if (e instanceof FirebaseError) {
          if (e.code === 'auth/invalid-credential') {
            open({
              title: '계정의 정보를 다시 확인해주세요',
              onButtonClick: () => {},
            });

            return;
          }
        }

        // 네트워크 에러
        open({
          title: '잠시 후 다시 시도해주세요',
          onButtonClick: () => {
            //
          },
        });
      }
    },
    [open],
  );
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default SigninPage;
