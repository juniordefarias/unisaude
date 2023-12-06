import styled, { css } from 'styled-components';

const breakpoints = {
  small: '576px',
  medium: '768px',
  large: '992px',
  xlarge: '1200px',
};

const respondTo = (size) => (content) => css`
  @media (min-width: ${breakpoints[size]}) {
    ${content}
  }
`;

export const Container = styled.main`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;
  padding: 16px;

  display: flex;
  gap: 12px;

  .filter__input {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    
    label {
      font-weight: 500;
    }

    input {
      border: none;
      outline: none;
      font-weight: 400;

      font-size: 14px;
      width: 100%;
    }

    input:hover + label {
      color: red;
    }

    select {
      border: none;
      outline: none;

      font-size: 14px;
    }
  }
`;