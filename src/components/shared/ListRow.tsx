import { css } from '@emotion/react';
import React from 'react';
import Flex from './Flex';
import Icon from './Icon';
import Skeleton from './Skeleton';
import Spacing from './Spacing';
import Text from './Text';

interface ListRowProps {
  left?: React.ReactNode;
  contents: React.ReactNode;
  right?: React.ReactNode;
  withArrow?: boolean;
  onClick?: () => void;
  as?: 'div' | 'li';
}

function ListRow({
  left,
  contents,
  right,
  withArrow,
  onClick,
  as = 'li',
}: ListRowProps) {
  return (
    <Flex as={as} css={listRowContainerStyles} onClick={onClick} align="center">
      <Flex css={listRowLeftStyles}>{left}</Flex>
      <Flex css={listRowContentStyles}>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <Icon name="IconRightArrow" /> : null}
    </Flex>
  );
}

function ListRowSkeleton() {
  return (
    <Flex as="li" css={listRowContainerStyles} align="center">
      <Flex css={listRowLeftStyles}></Flex>
      <Flex css={listRowContentStyles}>
        <ListRow.Texts
          title={
            <>
              <Skeleton width={67} height={23} />
              <Spacing size={2} />
            </>
          }
          subTitle={<Skeleton width={85} height={20} />}
        />
      </Flex>
      <Icon name="IconRightArrow" />
    </Flex>
  );
}

function ListRowTexts({
  title,
  subTitle,
}: {
  title: React.ReactNode;
  subTitle: React.ReactNode;
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
ListRow.Skeleton = ListRowSkeleton;

export default ListRow;
