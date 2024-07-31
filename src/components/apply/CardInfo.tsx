// 카드의 정보
import { ApplyValues } from '@/models/apply';
import Button from '@shared/Button';
import Spacing from '@shared/Spacing';
import { MouseEvent, useCallback, useState } from 'react';
import FixedBottomButton from '../shared/FixedBottomButton';

type CardInfoValues = Pick<ApplyValues, 'isMaster' | 'isHipass' | 'isRf'>;

const CardInfo = ({
  onNext,
}: {
  onNext: (cardInfoValues: CardInfoValues) => void;
}) => {
  const [cardInfoValues, setCardInfoValues] = useState<CardInfoValues>({
    isMaster: false,
    isHipass: false,
    isRf: false,
  });

  const { isMaster, isHipass, isRf } = cardInfoValues;

  // onClick으로 cardInfoValues의 isMaster를 boolean 값으로 할 수도 있지만 비효율적이기 때문에 data set 사용
  const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const $button = e.target as HTMLButtonElement;
    // console.log($button.dataset.value);
    const { name, dataset } = $button;

    setCardInfoValues((prevValues) => ({
      ...prevValues,
      [name]: JSON.parse(dataset.value as string),
    }));
  }, []);

  console.log(cardInfoValues);

  return (
    <div>
      <Button.Group title="해외결제">
        <Button
          name="isMaster"
          weak={isMaster === false}
          size="medium"
          data-value={true}
          onClick={handleButtonClick}
        >
          Master
        </Button>
        <Button
          name="isMaster"
          weak={isMaster === true}
          size="medium"
          data-value={false}
          onClick={handleButtonClick}
        >
          국내전용
        </Button>
      </Button.Group>

      <Spacing size={12} />

      <Button.Group title="후불교통기능">
        <Button
          name="isRf"
          weak={isRf === true}
          size="medium"
          data-value={false}
          onClick={handleButtonClick}
        >
          신청안함
        </Button>
        <Button
          name="isRf"
          weak={isRf === false}
          size="medium"
          data-value={true}
          onClick={handleButtonClick}
        >
          신청
        </Button>
      </Button.Group>

      <Spacing size={12} />

      <Button.Group title="후불하이패스카드">
        <Button
          name="isHipass"
          weak={isHipass === true}
          size="medium"
          data-value={false}
          onClick={handleButtonClick}
        >
          신청안함
        </Button>
        <Button
          name="isHipass"
          weak={isHipass === false}
          size="medium"
          data-value={true}
          onClick={handleButtonClick}
        >
          신청
        </Button>
      </Button.Group>

      <FixedBottomButton label="다음" onClick={() => onNext(cardInfoValues)} />
    </div>
  );
};

export default CardInfo;
