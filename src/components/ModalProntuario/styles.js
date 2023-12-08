import styled, { css } from 'styled-components';

const breakpoints = {
  small: '576px',
  xsmall: '600px',
  medium: '768px',
  xmedium: '925px',
  large: '992px',
  xlarge: '1200px',
};

const respondTo = (size) => (content) => css`
  @media (min-width: ${breakpoints[size]}) {
    ${content}
  }
`;

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* display: flex;
  justify-content: center;
  align-items: center; */

  z-index: 1000;
`;

export const Container = styled.div`
  //position: sticky;
  position: fixed;
  z-index: 100;
  //top: 72px;
  top: 64px;
  left: 0;
  right: 0;
  //top: 100vh;
  //top: ${({ $isOpen }) => $isOpen ? '24px' : '100vh'};
  width: calc(100% - 40px);
  height: 100%;

  overflow: auto;

  padding: 48px 24px;

  max-width: 600px;
  max-height: 600px;

  margin-left: auto;
  margin-right: auto;

  @media (max-height: 668px) {
    top: calc(100vh - 628px);
  }

  @media (max-height: 633px) {
    top: 36px;
  }

  background: white;
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  gap: 16px;

  .close-button {
    position: absolute;
    top: 48px;
    right: 24px;
  }

  .filters__group {
      display: grid;
      gap: 16px;

      ${respondTo('large')`
        grid-template-columns: repeat(2, 1fr);
      `}
    }
`;