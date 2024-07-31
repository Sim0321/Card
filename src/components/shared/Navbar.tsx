import { Link, useLocation, useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { useCallback } from 'react';
import { signOut } from 'firebase/auth';

import Flex from '@shared/Flex';
import Button from '@shared/Button';
import { colors } from '@styles/colorPalette';
import useUser from '@hooks/auth/useUser';
import { auth } from '@remote/firebase';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false;

  const user = useUser();

  const handleLogout = useCallback(() => {
    signOut(auth);
    // navigate('/signin');
  }, []);

  const renderButton = useCallback(() => {
    if (user != null) {
      return <Button onClick={handleLogout}>로그아웃</Button>;
    }

    if (showSignButton) {
      return (
        <Link to="signin">
          <Button>로그인/회원가입</Button>
        </Link>
      );
    }

    return null;
  }, [user, showSignButton, handleLogout]);

  // console.log('user', user);

  return (
    <Flex css={navbarContainerStyles} justify="space-between" align="center">
      <Link to="/">홈</Link>
      {renderButton()}
    </Flex>
  );
}

const navbarContainerStyles = css`
  padding: 10px 24px;
  position: sticky;
  top: 0;
  background-color: ${colors.white};
  z-index: 10;
  border-bottom: 1px solid ${colors.grey};
`;

export default Navbar;
