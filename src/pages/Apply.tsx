import React, { useState } from 'react';
import Terms from '@components/apply/Terms';
import Apply from '@/components/apply';
import useApplyCardMutation from '@/hooks/apply/useApplyCardMutation';
import usePollApplyStatus from '@/hooks/apply/usePollApplyStatus';
import { APPLY_STATUS } from '@/models/apply';
import useUser from '@/hooks/auth/useUser';
import { useNavigate, useParams } from 'react-router-dom';
import { updateApplyCard } from '@/remote/apply';

const ApplyPage = () => {
  const [readyToPoll, setReadyToPoll] = useState(false);
  const user = useUser();
  const { id } = useParams() as { id: string };

  const navigate = useNavigate();

  usePollApplyStatus({
    onSuccess: async () => {
      await updateApplyCard({
        applyValues: {
          status: APPLY_STATUS.COMPLETE,
        },
        userId: user?.uid as string,
        cardId: id,
      });
      navigate(`/apply/done?success=true`);
    },

    onError: async () => {
      await updateApplyCard({
        applyValues: {
          status: APPLY_STATUS.REJECT,
        },
        userId: user?.uid as string,
        cardId: id,
      });
      navigate(`/apply/done?success=false`);
    },
    enabled: readyToPoll,
  });

  // 이렇게 props로 뚫어줌으로써 후속처리에 대해 해당 파일에 들어가지 않아도 알 수 있게 됨
  const { mutate, isLoading } = useApplyCardMutation({
    onSuccess: () => {
      // 값이 추가되었을 때 -> 폴링 시작
      setReadyToPoll(true);
    },
    onError: () => {
      // 실패했을 때 -> 폴링 시작
      window.history.back();
    },
  });

  if (readyToPoll || isLoading) {
    return <div>Loading ...</div>;
  }
  return <Apply onSubmit={mutate} />;
};

export default ApplyPage;
