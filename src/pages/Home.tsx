import CardList from '@components/home/CardList';
import AdBanners from '@components/home/AdBanners';
import Top from '@shared/Top';
import Button from '@/components/shared/Button';
import { Suspense } from 'react';
import ListRow from '@/components/shared/ListRow';

function HomePage() {
  return (
    <div>
      <Top
        title="혜택 좋은 카드"
        subTitle="회원님을 위해서 혜택 좋은 카드를 모아봤어요"
      />
      {/* <Button>안녕하세요</Button> */}
      <AdBanners />
      {/* <Button>안녕하세요</Button> */}
      <Suspense
        fallback={[...new Array(10)].map((_, idx) => (
          <ListRow.Skeleton key={idx} />
        ))}
      >
        <CardList />
      </Suspense>
      {/* <Button>안녕하세요</Button> */}
    </div>
  );
}

export default HomePage;
