import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { colors } from '@styles/colorPalette';
import Flex from '@shared/Flex';
import Text from '@shared/Text';
import { getAdBanners } from '@remote/adBanner';

import 'swiper/css';

const AdBanners = () => {
  const { data } = useQuery(['adBanners'], () => getAdBanners());
  console.log('adBanners ::', data);

  return (
    <Container>
      <Swiper spaceBetween={8}>
        {data?.map((banner, index) => {
          return (
            <SwiperSlide>
              <Link to={banner.link}>
                <Flex
                  direction="column"
                  css={bannerContainerStyles}
                  key={index}
                >
                  <Text bold={true}>{banner.title}</Text>
                  <Text typography="t7">{banner.description}</Text>
                </Flex>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Container>
  );
};

export default AdBanners;

const Container = styled.div`
  padding: 24px;
`;

const bannerContainerStyles = css`
  padding: 16px;
  background-color: ${colors.grey};
  border-radius: 4px;
`;
