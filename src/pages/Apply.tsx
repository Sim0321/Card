import React, { useState } from 'react';
import Terms from '@components/apply/Terms';
import CardInfo from '@components/apply/CardInfo';
import BasicInfo from '@components/apply/BasicInfo';
import { ApplyValues } from '@/models/apply';

const Apply = () => {
  const [step, setStep] = useState(2);

  // 현재 페이지가 할 작업은 카드 신청이지만 page 입장에선 데이터들이 궁금하지 않음. 그러므로 컴포넌트를 또 하나 생성해 데이터를 합친 최종 데이터만 받길 원함

  // Pick으로 뽑아오면 객체로 뽑힘
  const handleTermsChange = (terms: ApplyValues['terms']) => {
    console.log('terms ::', terms);
  };

  const handleBasicInfoChange = (
    infoValues: Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>,
  ) => {
    console.log('infoValues ::', infoValues);
  };

  const handleCardInfoChange = (
    cardInfoValues: Pick<ApplyValues, 'isMaster' | 'isHipass' | 'isRf'>,
  ) => {
    console.log('cardInfoValues ::', cardInfoValues);
  };

  return (
    <div>
      {step === 0 && <Terms onNext={handleTermsChange} />}
      {step === 1 && <BasicInfo onNext={handleBasicInfoChange} />}
      {step === 2 && <CardInfo onNext={handleCardInfoChange} />}
    </div>
  );
};

export default Apply;
