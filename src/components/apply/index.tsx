import Terms from '@components/apply/Terms';
import CardInfo from '@components/apply/CardInfo';
import BasicInfo from '@components/apply/BasicInfo';
import { ApplyValues, APPLY_STATUS } from '@/models/apply';
import { useEffect, useState } from 'react';
import useUser from '@/hooks/auth/useUser';
import { useParams } from 'react-router-dom';

const Apply = ({
  onSubmit,
}: {
  onSubmit: (applyValues: ApplyValues) => void;
}) => {
  const user = useUser();
  const { id } = useParams() as { id: string };

  const [step, setStep] = useState(0);
  const [applyValues, setApplyValues] = useState<Partial<ApplyValues>>({
    userId: user?.uid,
    cardId: id,
  });

  // Pick으로 뽑아오면 객체로 뽑힘
  const handleTermsChange = (terms: ApplyValues['terms']) => {
    // console.log('terms ::', terms);
    setApplyValues((prevValues) => ({
      ...prevValues,
      terms,
    }));

    setStep((prevStep) => prevStep + 1);
  };

  const handleBasicInfoChange = (
    infoValues: Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>,
  ) => {
    // console.log('infoValues ::', infoValues);
    setApplyValues((prevValues) => ({
      ...prevValues,
      ...infoValues,
    }));

    setStep((prevStep) => prevStep + 1);
  };

  const handleCardInfoChange = (
    cardInfoValues: Pick<ApplyValues, 'isMaster' | 'isHipass' | 'isRf'>,
  ) => {
    // console.log('cardInfoValues ::', cardInfoValues);
    setApplyValues((prevValues) => ({
      ...prevValues,
      ...cardInfoValues,
    }));

    setStep((prevStep) => prevStep + 1);
  };

  useEffect(() => {
    if (step === 3) {
      onSubmit({
        ...applyValues,
        appliedAt: new Date(),
        status: APPLY_STATUS.READY,
      } as ApplyValues);
    }
  }, [applyValues, step, onSubmit]);

  return (
    <div>
      {step === 0 && <Terms onNext={handleTermsChange} />}
      {step === 1 && <BasicInfo onNext={handleBasicInfoChange} />}
      {step === 2 && <CardInfo onNext={handleCardInfoChange} />}
    </div>
  );
};

export default Apply;
