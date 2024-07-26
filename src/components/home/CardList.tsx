import { getCards } from '@remote/card';
import ListRow from '@shared/ListRow';
import { useQuery } from 'react-query';

function CardList() {
  const { data } = useQuery(['cards'], () => getCards());

  if (data == null) {
    return null;
  }

  return (
    <div>
      <ul>
        {data.map((card, index) => {
          return (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${index + 1}위`} subTitle={card.name} />
              } // ListRow.Texts 이게 바로 컴포넌트 합성. 만약 이렇게 하지 않았다면
              // title=""
              // subTitle="" 이렇게 props들이 주렁주렁 달려 있을 것임
              right={card.payback != null ? <div>{card.payback}</div> : null}
              withArrow={true}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default CardList;
