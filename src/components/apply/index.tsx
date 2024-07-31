import Terms from '@components/apply/Terms';
import CardInfo from '@components/apply/CardInfo';
import BasicInfo from '@components/apply/BasicInfo';
import { ApplyValues } from '@/models/apply';

const Apply = ({ step, onSubmit }: { step: number; onSubmit: () => void }) => {
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
