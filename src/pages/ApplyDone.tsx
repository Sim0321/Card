import FixedBottomButton from '@/components/shared/FixedBottomButton';
import Flex from '@/components/shared/Flex';
import Text from '@/components/shared/Text';
import { parse } from 'qs';

const ApplyDone = () => {
  const { success } = parse(window.location.search, {
    ignoreQueryPrefix: true,
  }) as { success: string }; // 물음표도 같이 딸려옴 {?success:'ture'}, 그래서 ignore해야함
  console.log('success ::', success);
  return (
    <Flex>
      <Text>
        {success === 'true'
          ? '카드가 발급되었습니다.'
          : '카드 발급에 실패했습니다.'}
      </Text>

      <FixedBottomButton
        label="확인"
        onClick={() => {
          window.history.back();
        }}
      />
    </Flex>
  );
};

export default ApplyDone;
