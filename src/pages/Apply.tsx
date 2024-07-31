import React, { useState } from 'react';
import Terms from '@components/apply/Terms';
import CardInfo from '@components/apply/CardInfo';
import BasicInfo from '@components/apply/BasicInfo';
import { ApplyValues } from '@/models/apply';

const Apply = () => {
  const [step, setStep] = useState(1);

  // Pick으로 뽑아오면 객체로 뽑힘
  const handleTermsChange = (terms: ApplyValues['terms']) => {
    console.log('terms ::', terms);
  };

  const handleBasicInfoChange = (
    infoValues: Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>,
  ) => {
    console.log('infoValues ::', infoValues);
  };

  return (
    <div>
      {step === 0 && <Terms onNext={handleTermsChange} />}
      {step === 1 && <BasicInfo onNext={handleBasicInfoChange} />}
      {step === 2 && <CardInfo />}
    </div>
  );
};

export default Apply;
