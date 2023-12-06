import styled, { css } from 'styled-components';

const breakpoints = {
  small: '576px',
  xsmall: '600px',
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
  ${respondTo('medium')`
    padding: 0 32px;
  `}
`;

export const ScheduleSection = styled.div`
  display: grid;
  gap: 48px;

  margin-top: 16px;  

  ${respondTo('medium')`
    margin-top: 24px;
  `}

  ${respondTo('large')`
    display: flex;
  `}
`;

export const FilterContainer = styled.aside`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;
  padding: 48px 24px;

  ${respondTo('small')`
    padding: 48px;
  `}

  flex: 1;

  align-self: start;

  ${respondTo('large')`
    position: sticky;
    top: 32px;
  `}

  h3 {
    font-size: 32px;
    margin-bottom: 24px;
  }

  .filters {
    display: grid;
    gap: 16px;

    ${respondTo('medium')`
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    `}

    ${respondTo('large')`
      grid-template-columns: 1fr;
      gap: 24px;
    `}
  }

  .filter {
    border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 16px;
    padding: 16px;

    display: flex;
    gap: 12px;

    & + & {
      margin-top: 16px;
    }

    .filter__input {
      display: flex;
      flex-direction: column;
      gap: 8px;
      
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

export const DoctorsContainer = styled.section`
  display: grid;
  gap: 32px;

  align-self: start;

  flex: 3;
`;

export const DoctorCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;

  padding: 32px 24px;

  display: grid;
  gap: 48px;

  ${respondTo('medium')`
    display: flex;
    gap: 48px

    .card__schedule {
      flex: 1;
    }
  `}

  .card__description {
    display: grid;
    gap: 24px;

    ${respondTo('small')`
      grid-template-columns: repeat(2, 1fr);
    `}

    ${respondTo('medium')`
      width: 100%;
      grid-template-columns: 1fr;
      gap: 48px;
    `}

    .card__profile {
      display: flex;
      gap: 16px;

      .profile__description {
        h4 {
          font-size: 20px;
          margin-bottom: 2px;
        }

        span {
          font-size: 14px;
        }

        ${respondTo('medium')`
          h4 {
            font-size: 24px;
            margin-bottom: 4px;
          }

          span {
            font-size: 16px;
          }
        `}

        div:last-of-type {
          margin-top: 4px;

          line-height: 1;

          ${respondTo('medium')`
            margin-top: 8px;
          `}

          img {
            height: 12px;

            ${respondTo('medium')`
              height: 16px;
            `}
          }

          span {
            margin-left: 8px;
            font-size: 12px;
            color: ${({ theme }) => theme.colors.primary.main};

            ${respondTo('medium')`
              font-size: 16px;
            `}
          }
        }
      }
    }

    .card__more-info {
      color: ${({ theme }) => theme.colors.gray.dark};

      li {
        span {
          margin-left: 12px;
          font-size: 14px;
        }
      }

      li + li {
        margin-top: 8px;
      }
    }
  }

  .card__schedule {
    display: flex;
    justify-content: space-between;
    align-items: start;

    width: 100%;

    img {
      margin-top: 8px;
    }

    .schedule__item {
      p {
        font-weight: 500;
        margin-bottom: 8px;
        text-align: center;
      }
      span {
        font-size: 14px;
        color: ${({ theme }) => theme.colors.gray.dark};
        display: inline-block;
        width: 100%;
        text-align: center;
      }

      .hours {
        display: grid;
        gap: 16px;

        margin-top: 18px;
        
        button {
          background-color: ${({ theme }) => theme.colors.primary.light};
          color: #0084FF;
          /* color: ${({ theme }) => theme.colors.primary.dark}; */

          padding: 6px 10px;
          border-radius: 4px;

          ${respondTo('medium')`
            padding: 8px 12px;
            font-size: 18px;
            font-weight: 400;
          `}

          font-weight: 500;
        }
      }
    }
  }
`;