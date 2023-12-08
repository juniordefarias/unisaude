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

export const Container = styled.footer`

  max-width: 1200px;
  width: calc(100% - 40px);
  margin: 96px auto 64px;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.dark};

  padding: 88px 32px 64px;

  display: flex;
  flex-direction: column;
  gap: 48px;
  
  h3 {
    font-size: 36px;
    margin-bottom: 24px;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 24px;
  }

  li + li {
    margin-top: 12px;
  }

  .footer__description {
    display: grid;
    gap: 80px;

    ${respondTo('medium')`
      grid-template-columns: repeat(2, 1fr);
      gap: 32px;
    `}

    .more-info {
      display: grid;
      gap: 80px;

      ${respondTo('medium')`
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
      `}
    }
  }

  .footer__copyright {
    padding-top: 24px;
    border-top: 1px solid  rgba(0,98,189,0.3);

    text-align: center;
  }

  ${respondTo('small')`
    width: calc(100% - 104px);
  `}
`;