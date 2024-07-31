import React, { useState } from 'react';
import Terms from '@components/apply/Terms';
import Apply from '@/components/apply';

const ApplyPage = () => {
  const handleSubmit = () => {
    // TODO 카드신청
  };

  return <Apply onSubmit={handleSubmit} />;
};

export default ApplyPage;
