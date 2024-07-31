// 약관 동의
import Agreement from '@shared/Agreement';
import { 약관목록 } from '@constants/apply';

const Terms = () => {
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
            checked={false}
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
