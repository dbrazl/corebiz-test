import React from 'react';
import PropTypes from 'prop-types';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import vector from '~/assets/images/banner/vector.png';

import {
  Container,
  NoData,
  NoDataIcon,
  Message,
  Filter,
  Photo,
  Wrapper,
  Label,
  Title,
  Box,
  DesktopWrapper,
  Vector,
  Image,
} from './styles';

function Banner({ width, data }) {
  if (data.length <= 0)
    return (
      <NoData name="banner">
        <NoDataIcon />
        <Message>Não há banner</Message>
      </NoData>
    );

  if (width < 1024)
    return (
      <Container>
        <Carousel name="banner" showStatus={false} showThumbs={false}>
          {data.map((item, index) => {
            return (
              <Wrapper key={`${index}`}>
                <Filter />
                <Box>
                  <Label>{item.label}</Label>
                  <Title>{item.title}</Title>
                </Box>
                <Photo src={`${item.src}`} />
              </Wrapper>
            );
          })}
        </Carousel>
      </Container>
    );

  return (
    <Container>
      <Carousel name="banner" showStatus={false} showThumbs={false}>
        {data.map((item, index) => {
          return (
            <DesktopWrapper key={`${index}`}>
              <Vector src={vector}>
                <Box>
                  <Label width={300}>{item.label}</Label>
                  <Title>{item.title}</Title>
                </Box>
              </Vector>
              <Image src={item.src} />
            </DesktopWrapper>
          );
        })}
      </Carousel>
    </Container>
  );
}

Banner.propTypes = {
  width: PropTypes.number,
  data: PropTypes.array,
};

Banner.defaultProps = {
  width: window.innerWidth,
  data: [],
};

export default Banner;
