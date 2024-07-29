import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import { motion } from 'framer-motion';

import { getCard } from '@remote/card';
import Top from '@components/shared/Top';
import ListRow from '@components/shared/ListRow';
import Icon from '@components/shared/Icon';
import FixedBottomButton from '@components/shared/FixedBottomButton';
import Flex from '@components/shared/Flex';
import Text from '@components/shared/Text';

function CardPage() {
  const { id = '' } = useParams();

  const { data } = useQuery(['card', id], () => getCard(id), {
    enabled: id !== '',
  });

  if (data == null) {
    return null;
  }
  // console.log(data);
  const { name, corpName, tags, promotion, benefit } = data;

  const subTitle =
    promotion != null ? removeHtmlTags(promotion?.title) : tags?.join(', ');

  return (
    <div>
      <Top title={`${corpName} ${name}`} subTitle={subTitle} />

      <ul>
        {benefit.map((text, index) => {
          return (
            <motion.li
              key={text}
              initial={{
                opacity: 0,
                translateX: -90,
              }}
              // whileInView={{
              //   opacity: 1,
              //   translateX: 0,
              // }}
              transition={{
                duration: 0.7,
                // ease: [0.25, 0.1, 0.25, 0.1],
                ease: 'easeInOut',
                delay: index * 0.1,
              }}
              animate={{
                opacity: 1,
                translateX: 0,
              }}
            >
              <ListRow
                as="div"
                left={<Icon name="IconCheck" size={20} />}
                contents={
                  <ListRow.Texts title={`혜택 ${index + 1}`} subTitle={text} />
                }
              />
            </motion.li>
          );
        })}
      </ul>

      {promotion != null ? (
        <Flex direction="column" css={termsContainerStyles}>
          <Text bold={true}>유의사항</Text>
          <Text typography="t7">{removeHtmlTags(promotion.terms)}</Text>
        </Flex>
      ) : null}

      <FixedBottomButton label="신청하기" onClick={() => {}} />
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

const termsContainerStyles = css`
  margin-top: 80px;
  padding: 0 24px 80px;
`;

export default CardPage;
