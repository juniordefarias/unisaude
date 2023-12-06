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
  h1 {
    font-size: 42px;

    line-height: 110%;

    ${respondTo('large')`
      font-size: 64px;
    `}
  }

  h2 {
    font-size: 42px;
  }
  
  h3 {
    font-size: 32px;
    margin-bottom: 24px;
  }

  h4 {
    font-size: 18px;
    margin-bottom: 24px;
  }

  p {
    margin-top: 24px;
    color: ${({ theme }) => theme.colors.gray.dark};
    font-size: 18px;
  }
  
  ${respondTo('small')`
    padding: 0 32px;
  `}
`;

export const HomeSection = styled.div`
  display: grid;
  gap: 56px;

  align-items: center;

  ${respondTo('medium')`
    grid-template-columns: repeat(2, 1fr);

    .home__description {
      margin-bottom: 48px;
    }

    margin-top: 24px;
  `}

  img {
    max-width: 380px;
    width: calc(100% - 24px);
    
    justify-self: center;
    align-self: end;
    /* width: 100%; */

    ${respondTo('medium')`
      max-width: 420px;
    `}
  }

  .filters {
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 16px;

    display: flex;
    justify-content: space-around;
    align-items: center;

    margin-top: 32px;

    /* medium: '768px',
    large: '992px', */

    /* ${respondTo('medium')`
      flex-direction: column;
      width: 200px;

      button {
      width: calc(100% - 32px) ;
      }
    `}

    ${respondTo('large')`
      flex-direction: row;
      width: 100%;

      button {
        width: initial;
       }
    `} */
  }

  button {
    background-color: ${({ theme }) => theme.colors.primary.main};
    border-radius: 16px;
    max-height: 48px;

    /* padding: 8px;
    margin-right: 16px; */
    /* margin: 16px; */
    margin: 16px 16px 16px 0;
    padding: 12px 16px;

    svg {
      width: 20px;
    }

    ${respondTo('medium')`
      margin: 16px;
      padding: 12px 16px;
    `}
  }

  .filter {
    /* border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 16px; */

   /*  padding: 16px; */
    padding: 16px 8px;

    display: flex;
    gap: 8px;

    & + & {
      margin-top: 16px;
    }

    &:first-of-type {
      padding: 16px 0px 16px 16px;
    }

    &:last-of-type {
      display: none;
    }

    ${respondTo('medium')`
      padding: 16px;
    `}

    ${respondTo('large')`
      padding: 16px;
      gap: 12px;

      &:first-of-type {
        padding: 16px;
      }
    `}

    ${respondTo('xlarge')`
      &:last-of-type {
        display: flex;
      }
    `}

    .filter__input {
      display: flex;
      flex-direction: column;
      gap: 8px;

      font-size: 14px;

      ${respondTo('large')`
        font-size: 16px;
      `}
      
      label {
        
        font-weight: 500;
      }

      select {
        border: none;
        outline: none;
      }
    }
  }
`;

export const Banner = styled.div`
  background-color: ${({ theme }) => theme.colors.primary.light};
  color: ${({ theme }) => theme.colors.primary.dark};

  padding: 96px 24px 128px;

  ${respondTo('small')`
    padding: 96px 32px 128px;
  `}

  ${respondTo('large')`
    padding: 96px 56px 128px;
  `}

  border-radius: 16px;

  display: grid;
  gap: 56px;

  .banner__description {
    p {
      color: ${({ theme }) => theme.colors.primary.dark};
    }

    ${respondTo('large')`
      display: flex;
      gap: 48px;

      h2 {
        min-width: 460px;
      }
    `}
  }

  .banner__cards {
    display: grid;
    gap: 48px;

    ${respondTo('medium')`
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
    `}
    
    ${respondTo('large')`
      gap: 48px;
    `}

    .card {
      padding: 32px 44px 0px;
      border-radius: 16px;

      text-align: center;

      display: grid;
      gap: 48px;

      img {
        //filter: saturate(0);
        transition: filter 0.3s ease; 

        width: 100%;

        justify-self: end;
        align-self: end;
      }

      /* &:hover {
        img {
          filter: saturate(1);
        }
      } */

      ${respondTo('large')`
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;

        img {
          order: -1;
          align-self: end;

          width: 100%;
        }

        .card__description {
          margin-bottom: 32px;
          align-self: end;

          text-align: start;

          button {
            margin: 0;
          }
        }
      `}

      button {
        font-size: 18px;
        font-weight: 500;

        padding: 16px;
        height: 48px;
        border-radius: 8px;

        display: flex;
        align-items: center;

        margin: auto;
      }

      &:first-of-type {
        background-color: ${({ theme }) => theme.colors.primary.main};
        color: ${({ theme }) => theme.colors.white};

        button {
          background-color: ${({ theme }) => theme.colors.white};
          color: ${({ theme }) => theme.colors.primary.main};
        }
      }

      &:nth-of-type(2) {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.primary.main};

        button {
          background-color: ${({ theme }) => theme.colors.primary.main};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  
`;

export const Testimonials = styled.div`
  display: grid;
  gap: 48px;

  margin-top: 56px;

  ${respondTo('medium')`
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  `}

  ${respondTo('large')`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${respondTo('xlarge')`
    gap: 48px;
  `}

  .card {
    padding: 24px 23px 23px;

    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 16px;

    svg {
      margin-bottom: 24px;
    }

    p {
      color: ${({ theme }) => theme.colors.gray.dark};
      font-size: 18px;
    }

    p.testimonial-description {
      text-align: justify;
    }

    .card__profile {
      margin-top: 48px;
    }
    
    .card__info {
      p {
        font-size: 20px;
        font-weight: 500;

        margin-top: 0px;
        margin-bottom: 2px;
      }

      span {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray.dark};
      }
    }
  }
  
`;