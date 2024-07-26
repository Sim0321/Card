import { colors } from '@/styles/colorPalette';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Button from '@shared/Button';
import { createPortal } from 'react-dom';

interface FixedBottomButtonProps {
  label: string;
  onClick: () => void;
}

function FixedBottomButton({ label, onClick }: FixedBottomButtonProps) {
  const $portalRoot = document.getElementById('root-portal');

  if ($portalRoot == null) {
    return null;
  }

  return createPortal(
    <Container>
      <Button size="medium" full={true} onClick={onClick} css={buttonStyles}>
        {label}
      </Button>
    </Container>,
    $portalRoot,
  );
}

const Container = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
`;

const buttonStyles = css`
  border-radius: 8px;
`;

export default FixedBottomButton;
