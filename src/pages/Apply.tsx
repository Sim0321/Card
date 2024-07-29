import React, { useState } from 'react';
import Terms from '@components/apply/Terms';
import CardInfo from '@components/apply/CardInfo';
import BasicInfo from '@components/apply/BasicInfo';

const Apply = () => {
  const [step, setStep] = useState(0);

  return (
    <div>
      {step === 0 && <Terms />}
      {step === 1 && <BasicInfo />}
      {step === 2 && <CardInfo />}
    </div>
  );
};

export default Apply;
