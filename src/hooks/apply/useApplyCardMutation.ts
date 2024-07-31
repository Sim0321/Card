import { useAlertContext } from '@/contexts/AlertContext';
import { ApplyValues } from '@models/apply';
import { applyCard } from '@remote/apply';
import { useMutation } from 'react-query';

// props를 따로 만들어주지 않아도 되지만 현재 폴링 방식으로 후속처리를 해야하며, 만일 폴링 로직까지 useApplyCardMutation안으로 들어가게 된다면 ApplyPage에서는 이 함수가 무엇을 하는지 알기가 어려워짐. 그러므로 단일책임원칙을 준수하기 위해 props로 만들어줌
interface useApplyCardMutationProps {
  onSuccess: () => void;
  onError: () => void;
}

// applyCard
function useApplyCardMutation({
  onSuccess,
  onError,
}: useApplyCardMutationProps) {
  const { open } = useAlertContext();

  return useMutation((applyValues: ApplyValues) => applyCard(applyValues), {
    onSuccess: () => {
      onSuccess();
    },
    onError: () => {
      open({
        title: '카드를 신청하지 못했어요. 나중에 다시 시도해주세요.',
        onButtonClick: () => {
          onError();
        },
      });
    },
  });
}

export default useApplyCardMutation;
