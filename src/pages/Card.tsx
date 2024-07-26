import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { getCard } from '@remote/card';
import Top from '@components/shared/Top';
import ListRow from '@components/shared/ListRow';

function CardPage() {
  const { id = '' } = useParams();

  const { data } = useQuery(['card', id], () => getCard(id), {
    enabled: id !== '',
  });

  if (data == null) {
    return null;
  }
  console.log(data);
  const { name, corpName, tags, promotion, benefit } = data;

  const subTitle =
    promotion != null ? removeHtmlTags(promotion?.title) : tags.join(', ');

  return (
    <div>
      <Top title={`${corpName} ${name}`} subTitle={subTitle} />

      <ul>
        {benefit.map((text, index) => {
          return (
            <ListRow
              key={text}
              contents={
                <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={text} />
              }
            />
          );
        })}
      </ul>
    </div>
  );
}

function removeHtmlTags(text: string) {
  let output = '';

  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === '<') {
      for (let j = i + 1; j < text.length; j += 1) {
        if (text[j] === '>') {
          i = j;
          break;
        }
      }
    } else {
      output += text[i];
    }
  }

  return output;
}

export default CardPage;
