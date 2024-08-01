import React from 'react';
import Flex from './Flex';
import Spacing from './Spacing';
import Text from './Text';
import Rocket from '../../assets/img/rocket.gif';

const FullPageLoader = ({ message }: { message?: string }) => {
  return (
    <Flex
      align="center"
      justify="center"
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Flex direction="column" align="center">
        <img src={Rocket} width={120} alt="로딩 이미지" />

        {message != null ? (
          <>
            <Spacing size={120} />
            <Text bold={true} typography="t4">
              {message}
            </Text>
          </>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default FullPageLoader;
