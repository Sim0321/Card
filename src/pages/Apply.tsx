import React, { useState } from 'react';
import Terms from '@components/apply/Terms';
import Apply from '@/components/apply';

const ApplyPage = () => {
  const [step, setStep] = useState(2);

  const handleSubmit = () => {
    // TODO 카드신청
  };

  return <Apply step={step} onSubmit={handleSubmit} />;
};

export default ApplyPage;
