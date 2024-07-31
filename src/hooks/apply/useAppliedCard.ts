import { ApplyValues } from '@/models/apply';
import { getAppliedCard } from '@/remote/apply';
import { useQuery, UseQueryOptions } from 'react-query';

// 이미 유저가 발급한 카드인가 아닌가
function useAppliedCard({
  userId,
  cardId,
  options,
}: {
  userId: string;
  cardId: string;
  options?: Pick<
    UseQueryOptions<ApplyValues | null>,
    'onSuccess' | 'onError' | 'suspense'
  >;
}) {
  return useQuery(
    ['applied', userId, cardId],
    () => getAppliedCard({ userId, cardId }),
    options,
  );
}

export default useAppliedCard;
