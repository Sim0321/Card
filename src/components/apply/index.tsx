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

  const storageKey = `applied-${user?.uid}-${id}`;

  // 지연 초기화
  const [applyValues, setApplyValues] = useState<Partial<ApplyValues>>(
    () => {
      const applied = localStorage.getItem(storageKey);

      if (applied == null) {
        return {
          userId: user?.uid,
          cardId: id,
          step: 0,
        };
      }

      return JSON.parse(applied);
    }, // useState에 콜백함수를 넣으면 리렌더링이 되더라도 최초에 단 한번만 실행이 된다
  );

  // Pick으로 뽑아오면 객체로 뽑힘
  const handleTermsChange = (terms: ApplyValues['terms']) => {
    // console.log('terms ::', terms);
    setApplyValues((prevValues) => ({
      ...prevValues,
      terms,
      step: (prevValues.step as number) + 1,
    }));
  };

  const handleBasicInfoChange = (
    infoValues: Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>,
  ) => {
    // console.log('infoValues ::', infoValues);
    setApplyValues((prevValues) => ({
      ...prevValues,
      ...infoValues,
      step: (prevValues.step as number) + 1,
    }));
  };

  const handleCardInfoChange = (
    cardInfoValues: Pick<ApplyValues, 'isMaster' | 'isHipass' | 'isRf'>,
  ) => {
    // console.log('cardInfoValues ::', cardInfoValues);
    setApplyValues((prevValues) => ({
      ...prevValues,
      ...cardInfoValues,
      step: (prevValues.step as number) + 1,
    }));
  };

  useEffect(() => {
    if (applyValues.step === 3) {
      localStorage.removeItem(storageKey);

      onSubmit({
        ...applyValues,
        appliedAt: new Date(),
        status: APPLY_STATUS.READY,
      } as ApplyValues);
    } else {
      localStorage.setItem(storageKey, JSON.stringify(applyValues));
    }
  }, [applyValues, onSubmit, storageKey]);

  return (
    <div>
      {applyValues.step === 0 && <Terms onNext={handleTermsChange} />}
      {applyValues.step === 1 && <BasicInfo onNext={handleBasicInfoChange} />}
      {applyValues.step === 2 && <CardInfo onNext={handleCardInfoChange} />}
    </div>
  );
};

export default Apply;
