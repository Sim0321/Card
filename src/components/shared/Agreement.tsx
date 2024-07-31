import { MouseEvent } from 'react';

import { css } from '@emotion/react';
import Flex from '@shared/Flex';
import Icon from '@shared/Icon';
import Text from '@shared/Text';

function Agreement({ children }: { children: React.ReactNode }) {
  return (
    <Flex as="ul" direction="column" css={agreementContainerStyles}>
      {children}
    </Flex>
  );
}

function AgreementTitle({
  children,
  checked,
  onChange,
}: {
  children: React.ReactNode;
  checked: boolean;
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void;
}) {
  return (
    <Flex as="li" onClick={(e) => onChange(e, !checked)}>
      <Icon
        name={checked ? 'IconAgreeChecked' : 'IconAgreeUnchecked'}
        size={24}
      />
      <Text bold={true}>{children}</Text>
    </Flex>
  );
}

function AgreementDescription({
  children,
  checked,
  onChange,
  link,
}: {
  children: React.ReactNode;
  checked: boolean;
  onChange: (e: MouseEvent<HTMLElement>, checked: boolean) => void;
  link?: string;
}) {
  return (
    <Flex as="li" justify="space-between">
      <Flex onClick={(e) => onChange(e, !checked)}>
        <Icon
          name={checked ? 'IconAgreeDescChecked' : 'IconAgreeDescUnChecked'}
        />
        <Text typography="t6">{children}</Text>
      </Flex>
      {link != null ? (
        <a href={link} target="_blank">
          <Text typography="t6">링크</Text>
        </a>
      ) : null}
    </Flex>
  );
}

Agreement.Title = AgreementTitle;
Agreement.Description = AgreementDescription;

const agreementContainerStyles = css`
  padding: 24px;

  & li {
    cursor: pointer;
  }
`;

export default Agreement;
