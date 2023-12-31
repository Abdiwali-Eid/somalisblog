import styled from 'styled-components';

export const SingleCategoryStyles = styled.div`
  .pageHeader {
    position: relative;
    padding: 2rem 0;
    z-index: 1;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, #5580aa, #6696c4 30%, #79a7d4);
      z-index: -1;
    }
    .coverImage {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
  @media only screen and (max-width: 768px) {
    .pageHeader {
      padding: 0;
      &:after {
        display: none;
      }
    }
    .coverImage {
      display: none;
    }
  }
`;
