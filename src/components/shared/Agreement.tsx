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

/**
 * <Agreement>
 *  <Agreement.Title>약관 모두 동의</Agreement.Title>
 *  <Agreement.Description>약관1</Agreement.Description>
 *  <Agreement.Description>약관2</Agreement.Description>
 * </Agreement>
 *
 * Title 부분에 label이라는 props로 넘겨줄 수 있지만 children으로 넘겨서 태그로도 받을 수 있게 확장성 고려
 */
