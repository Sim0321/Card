import React, { useState } from 'react';
import Terms from '@components/apply/Terms';
import Apply from '@/components/apply';
import useApplyCardMutation from '@/hooks/apply/useApplyCardMutation';

const ApplyPage = () => {
  // 이렇게 props로 뚫어줌으로써 후속처리에 대해 해당 파일에 들어가지 않아도 알 수 있게 됨
  const { mutate } = useApplyCardMutation({
    onSuccess: () => {
      // 값이 추가되었을 때 -> 폴링 시작
      console.log('카드 추가!');
    },
    onError: () => {
      // 실패했을 때 -> 폴링 시작
      window.history.back();
    },
  });

  return <Apply onSubmit={mutate} />;
};

export default ApplyPage;
