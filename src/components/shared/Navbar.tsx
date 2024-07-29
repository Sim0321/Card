import { Link, useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

import Flex from '@shared/Flex';
import Button from '@shared/Button';
import { colors } from '@styles/colorPalette';

function Navbar() {
  const location = useLocation();
  const showSignButton =
    ['/signup', '/signin'].includes(location.pathname) === false;

  return (
    <Flex css={navbarContainerStyles} justify="space-between" align="center">
      <Link to="/">홈</Link>
      {showSignButton && (
        <Link to="signup">
          <Button>로그인/회원가입</Button>
        </Link>
      )}
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
