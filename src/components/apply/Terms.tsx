// 약관 동의
import { MouseEvent, useCallback, useState } from 'react';

import Agreement from '@shared/Agreement';
import { 약관목록 } from '@constants/apply';
import FixedBottomButton from '@shared/FixedBottomButton';
import { ApplyValues } from '@models/apply';

const Terms = ({
  onNext,
}: {
  onNext: (terms: ApplyValues['terms']) => void;
}) => {
  const [termsAgreements, setTermsAgreements] = useState(() => {
    return 약관목록.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    );
  });
  // console.log(Object.keys(termsAgreements));

  const isAllCheck = Object.values(termsAgreements).every((allTrue) => allTrue);
  // console.log('isAllCheck ::', isAllCheck);

  const handleAllAgreement = useCallback(
    (_: MouseEvent<HTMLElement>, checked: boolean) => {
      // console.log(checked);

      setTermsAgreements((prevTerms) => {
        return Object.keys(prevTerms).reduce(
          (prev, key) => ({
            ...prev,
            [key]: checked,
          }),
          {},
        );
      });
    },
    [],
  );

  return (
    <div>
      <Agreement>
        <Agreement.Title checked={isAllCheck} onChange={handleAllAgreement}>
          약관에 모두 동의
        </Agreement.Title>

        {약관목록.map(({ id, title, link }) => (
          <Agreement.Description
            key={id}
            checked={termsAgreements[id]}
            link={link}
            onChange={(_, checked) => {
              setTermsAgreements((prevTerms) => ({
                ...prevTerms,
                [id]: checked,
              }));
            }}
          >
            {title}
          </Agreement.Description>
        ))}
      </Agreement>
      <FixedBottomButton
        label="약관동의"
        disabled={isAllCheck === false}
        onClick={() => {
          onNext(Object.keys(termsAgreements));
        }}
      />
    </div>
  );
};

export default Terms;
