import React, { useState } from 'react';
import Terms from '@components/apply/Terms';
import Apply from '@/components/apply';
import useApplyCardMutation from '@/hooks/apply/useApplyCardMutation';
import usePollApplyStatus from '@/hooks/apply/usePollApplyStatus';
import { APPLY_STATUS } from '@/models/apply';
import useUser from '@/hooks/auth/useUser';
import { useNavigate, useParams } from 'react-router-dom';
import { updateApplyCard } from '@/remote/apply';
import useAppliedCard from '@/hooks/apply/useAppliedCard';
import { useAlertContext } from '@/contexts/AlertContext';

const ApplyPage = () => {
  const [readyToPoll, setReadyToPoll] = useState(false);
  const user = useUser();
  const { id } = useParams() as { id: string };
  const { open } = useAlertContext();

  const { data } = useAppliedCard({
    userId: user?.uid as string,
    cardId: id,
    options: {
      onSuccess: (applied) => {
        if (applied == null) {
          return;
        }

        if (applied.status === APPLY_STATUS.COMPLETE) {
          open({
            title: '이미 발급이 완료된 카드입니다',
            onButtonClick: () => {
              window.history.back();
            },
          });
          return;
        }

        setReadyToPoll(true);
      },
      onError: () => {},
      suspense: true,
    },
  });

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
      navigate(`/apply/done?success=true`, { replace: true });
    },

    onError: async () => {
      await updateApplyCard({
        applyValues: {
          status: APPLY_STATUS.REJECT,
        },
        userId: user?.uid as string,
        cardId: id,
      });
      navigate(`/apply/done?success=false`, {
        replace: true,
      });
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

  if (data != null && data.status === APPLY_STATUS.COMPLETE) {
    return null;
  }

  if (readyToPoll || isLoading) {
    return <div>Loading ...</div>;
  }
  return <Apply onSubmit={mutate} />;
};

export default ApplyPage;
