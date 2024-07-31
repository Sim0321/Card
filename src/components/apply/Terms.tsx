// 약관 동의
import { useState } from 'react';

import Agreement from '@shared/Agreement';
import { 약관목록 } from '@constants/apply';

const Terms = () => {
  const [termsAgreements, setTermsAgreements] = useState(() => {
    return 약관목록.reduce<Record<string, boolean>>(
      (prev, term) => ({
        ...prev,
        [term.id]: false,
      }),
      {},
    );
  });
  console.log(termsAgreements);
  return (
    <div>
      <Agreement>
        <Agreement.Title
          checked={false}
          onChange={(e, checked) => {
            console.log(e, checked);
          }}
        >
          약관에 모두 동의
        </Agreement.Title>

        {약관목록.map(({ id, title, link }) => (
          <Agreement.Description
            key={id}
            checked={termsAgreements[id]}
            link={link}
            onChange={() => {}}
          >
            {title}
          </Agreement.Description>
        ))}
      </Agreement>
    </div>
  );
};

export default Terms;
