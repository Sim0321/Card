import { colors } from '@/styles/colorPalette';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

import Button from '@shared/Button';
import { createPortal } from 'react-dom';

interface FixedBottomButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function FixedBottomButton({
  label,
  onClick,
  disabled,
}: FixedBottomButtonProps) {
  const $portalRoot = document.getElementById('root-portal');

  if ($portalRoot == null) {
    return null;
  }

  return createPortal(
    <Container>
      <Button
        size="medium"
        full={true}
        onClick={onClick}
        css={buttonStyles}
        disabled={disabled}
      >
        {label}
      </Button>
    </Container>,
    $portalRoot,
  );
}

const slideUp = keyframes`
  to{
    transform: translateY(0);
  }
`;

const Container = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: ${colors.white};
  padding: 20px 10px 8px;
  transform: translateY(100%);
  animation: ${slideUp} 0.5s ease-in-out forwards;
`;

const buttonStyles = css`
  border-radius: 8px;
`;

export default FixedBottomButton;
