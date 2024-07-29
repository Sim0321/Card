import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { collection, doc, setDoc } from 'firebase/firestore';

import { FormValues } from '@models/signup';
import Form from '@components/signup/Form';
import { auth, store } from '@remote/firebase';
import { COLLECTIONS } from '@constants';

function SignupPage() {
  // 여기서 회원가입을 처리하는 이유는 만약 회원가입까지 하는 로직이 Form 컴포넌트 안에 작성하게 된다면 컴포넌트의 역할이 너무 많아지기 때문
  const handleSubmit = async (formValues: FormValues) => {
    const { email, password, name } = formValues;
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    // 첫 회원가입하면 displayName이 null이라 따로 업데이트를 해줘야 함
    await updateProfile(user, {
      displayName: name,
    });

    // 가지고 와서 사용하는 용도(store에 저장)
    const newUser = {
      uid: user.uid,
      email: user.email,
      displayName: name,
    };

    await setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), newUser);
    //TODO:로그인

    console.log('user :', user);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  );
}

export default SignupPage;
