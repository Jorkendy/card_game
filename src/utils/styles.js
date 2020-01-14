import styled from "styled-components";

export const breakPoints = {
  desktopL: 1600,
  desktopM: 1200,
  desktopS: 1024,
  tabletL: 992,
  tabletM: 768,
  tabletS: 480
};

export const Container = styled.div`
  max-width: 1230px;
  margin: 15px auto;
  padding: 0 15px;

  @media screen and (min-width: ${breakPoints.desktopS}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Section = styled.div`
  margin-bottom: 15px;
`;
