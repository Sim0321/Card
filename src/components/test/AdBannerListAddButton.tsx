import Button from '@shared/Button';

import { collection, doc, writeBatch } from 'firebase/firestore';

import { adBanners } from '@/mock/data';
import { store } from '@remote/firebase';
import { COLLECTIONS } from '@constants';

function AdBannerListAddButton() {
  const handleButtonClick = async () => {
    // 데이터를 한번에 넣기 위해서
    const batch = writeBatch(store);

    adBanners.forEach((banner) => {
      const docRef = doc(collection(store, COLLECTIONS.ADBANNER));

      batch.set(docRef, banner);
    });

    await batch.commit();

    alert('배너 리스트 추가완료');
  };

  return <Button onClick={handleButtonClick}>배너 리스트 추가하기</Button>;
}

export default AdBannerListAddButton;
