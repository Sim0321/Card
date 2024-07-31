import React, { useState } from 'react';
import Terms from '@components/apply/Terms';
import CardInfo from '@components/apply/CardInfo';
import BasicInfo from '@components/apply/BasicInfo';

const Apply = () => {
  const [step, setStep] = useState(0);

  const handleTermsChange = (terms: string[]) => {
    console.log('terms ::', terms);
  };

  return (
    <div>
      {step === 0 && <Terms onNext={handleTermsChange} />}
      {step === 1 && <BasicInfo />}
      {step === 2 && <CardInfo />}
    </div>
  );
};

export default Apply;
