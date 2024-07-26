import Flex from './Flex';

interface ListRowProps {
  left?: React.ReactNode;
  contents: React.ReactNode;
  right?: React.ReactNode;
  withArrow?: boolean;
  onClick: () => void;
}

function ListRow({ left, contents, right, withArrow }: ListRowProps) {
  return (
    <Flex as="li">
      <Flex>{left}</Flex>
      <Flex>{contents}</Flex>
      <Flex>{right}</Flex>
      {withArrow ? <>화살표</> : null}
    </Flex>
  );
}
