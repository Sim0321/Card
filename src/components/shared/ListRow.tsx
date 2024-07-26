import { css } from '@emotion/react';
import Flex from './Flex';
import Icon from './Icon';
import Text from './Text';

interface ListRowProps {
  left?: React.ReactNode;
  contents: React.ReactNode;
  right?: React.ReactNode;
  withArrow?: boolean;
  onClick?: () => void;
}

function ListRow({ left, contents, right, withArrow, onClick }: ListRowProps) {
  return (
    <Flex as="li" css={listRowContainerStyles} onClick={onClick} align="center">
      <Flex css={listRowLeftStyles}>{left}</Flex>
      <Flex css={listRowContentStyles}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <Icon name="IconRightArrow" /> : null}
    </Flex>
  );
}

function ListRowTexts({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <Flex direction="column">
      <Text bold={true}>{title}</Text>
      <Text typography="t7">{subTitle}</Text>
    </Flex>
  );
}

const listRowContainerStyles = css`
  padding: 8px 24px;
`;

const listRowLeftStyles = css`
  margin-right: 14px;
`;

const listRowContentStyles = css`
  flex: 1;
`;

ListRow.Texts = ListRowTexts; // 함수도 객체이기 때문에 가능

export default ListRow;
