import { useInfiniteQuery } from 'react-query';
import { getCards } from '@remote/card';
import { flatten } from 'lodash';

import ListRow from '@shared/ListRow';

function CardList() {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      // console.log('pageParam ::', pageParam);
      return getCards(pageParam);
    },
    {
      getNextPageParam: (snapshot) => {
        // console.log('snapshot ::', snapshot);
        return snapshot.lastVisible;
      },
    },
  );

  console.log('data ::', data);

  const cards = flatten(data?.pages.map(({ items }) => items));

  if (data == null) {
    return null;
  }

  return (
    <div>
      <button onClick={() => fetchNextPage()}>more</button>
      <ul>
        {cards.map((card, index) => {
          return (
            <ListRow
              key={card.id}
              contents={
                <ListRow.Texts title={`${index + 1}위`} subTitle={card.name} />
              }
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
