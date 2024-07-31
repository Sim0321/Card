// 기본정보
import { ChangeEvent, useCallback, useState } from 'react';
import Select from '@shared/Select';
import { 연소득옵션, 신용점수옵션, 결제일옵션 } from '@constants/apply';
import { ApplyValues } from '@models/apply';
import Spacing from '@shared/Spacing';
import FixedBottomButton from '@shared/FixedBottomButton';

type InfoValues = Pick<ApplyValues, 'salary' | 'creditScore' | 'payDate'>;

const BasicInfo = ({
  onNext,
}: {
  onNext: (infoValues: InfoValues) => void;
}) => {
  const [infoValues, setInfoValues] = useState<InfoValues>({
    salary: '',
    creditScore: '',
    payDate: '',
  });

  const handleInfoChange = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInfoValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }, []);

  const isAllSelected = Object.values(infoValues).every((allCheck) => allCheck);

  return (
    <div>
      <Select
        name="salary"
        label="연소득"
        options={연소득옵션}
        placeholder={연소득옵션[0].label}
        value={infoValues.salary}
        onChange={handleInfoChange}
      />
      <Spacing size={24} />

      <Select
        name="creditScore"
        label="신용점수"
        options={신용점수옵션}
        placeholder={신용점수옵션[0].label}
        value={infoValues.creditScore}
        onChange={handleInfoChange}
      />

      <Spacing size={24} />
      <Select
        name="payDate"
        label="결제일"
        options={결제일옵션}
        placeholder={결제일옵션[0].label}
        value={infoValues.payDate}
        onChange={handleInfoChange}
      />

      <FixedBottomButton
        label="다음"
        onClick={() => {
          onNext(infoValues);
        }}
        disabled={isAllSelected === false}
      />
    </div>
  );
};

export default BasicInfo;
