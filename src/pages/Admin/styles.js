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

export const Container = styled.main`
  ${respondTo('medium')`
    padding: 0 32px;
  `}
`;

export const AdminSection = styled.div`
  display: grid;
  gap: 48px;

  ${respondTo('medium')`
    display: flex;
  `}
`;

export const NavBar = styled.aside`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;
  /* padding: 48px 24px; */
  padding: 24px;

  /* ${respondTo('large')`
    padding: 48px;
  `} */

  display: flex;

  align-self: start;
  justify-content: space-between;

  ${respondTo('medium')`
    position: sticky;
    top: 32px;

    display: grid;
    padding: 48px;
  `}

  h3 {
    font-size: 32px;
    
    ${respondTo('medium')`
      margin-bottom: 48px;
    `}
  }

  button.button-menu {
    display: flex;
    /* display: block; */
    height: 24px;
    width: 24px;

    align-items: center;
    align-self: center;

    ${respondTo('medium')`
      display: none;
    `}
  }

  ul {
    display: none;
    
    margin-bottom: 64px;

    cursor: pointer;

    ${respondTo('medium')`
      display: grid;
      gap: 8px;
    `}
  }

  li {
    //border: 1px solid ${({ theme }) => theme.colors.gray.light};
    border-radius: 8px;
    padding: 16px;

    display: flex;
    gap: 12px;

    font-weight: 600;

    transition: all 0.2s ease-in;

    color: ${({ theme }) => theme.colors.gray.dark};
    &:hover {
      /* background-color: ${({ theme }) => theme.colors.gray.light}; */
      background-color: /* #efefef; */ #e6e6e6;
    }

    &.selected {
      background-color: ${({ theme }) => theme.colors.primary.light};
      color: ${({ theme }) => theme.colors.primary.dark};
      svg {
        path {
          fill: ${({ theme }) => theme.colors.primary.dark};
        }
      }

      &:hover {
        //color: #1b438d;
        background-color: #8ed5ff;

        svg {
          path {
            //fill: #1b438d;
          }
        }
      }
    }
  }

  button.button-close {
    border-radius: 8px;
    padding: 16px;

    font-weight: 600;
    font-size: 16px;

    display: none;
    ${respondTo('medium')`
      display: flex;
      gap: 12px;
    `}

    transition: all 0.4s ease;

    color: #F4324A;
    svg {
      path {
        fill: #F4324A;
      }
    }

    &:hover {
      color: #9D1728;
      svg {
        path {
          fill: #9D1728;
        }
      }
      background-color: #ffe1e5;
    }
  }
`;

export const AdminContainer = styled.main`
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 16px;
  padding: 48px 24px;

  flex: 1;

  ${respondTo('medium')`
    padding: 64px 48px;
  `}

  h3 {
    font-size: 32px;
    margin-bottom: 42px;

    ${respondTo('medium')`
      margin-bottom: 56px; 
    `}
  }

  .filters {
    display: grid;
    gap: 16px;

    .filters__group {
      display: grid;
      gap: 16px;

      ${respondTo('large')`
        grid-template-columns: repeat(2, 1fr);
      `}
    }

    ul {
      display: flex;
      justify-content: space-between;

      margin: calc(32px - 16px) 0 calc(24px - 16px);

      li {
        border-bottom: 2px solid #B3B3B3;

        padding-bottom: 12px;

        flex: 1;
        text-align: center;
        font-size: 18px;
        font-weight: 500;

        color: #B3B3B3;

        &.selected {
          color: ${({ theme }) => theme.colors.primary.main};
          border-color: ${({ theme }) => theme.colors.primary.main};
        }
      }
    }
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

      input {
        border: none;
        outline: none;
        font-weight: 400;

        width: 100%;
      }

      select {
        border: none;
        outline: none;
      }
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 32px;

    .button__register {
      font-size: 16px;
      font-weight: 600;

      color: ${({ theme }) => theme.colors.primary.main};
    }

    .button__login {
      padding: 0 32px;
      height: 48px;

      background-color: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.white};

      display: flex;
      align-items: center;

      font-size: 16px;
      font-weight: 600;
      
      border-radius: 8px;
    }
  }
`;

export const AppointmentCard = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray.light};
  
  border-radius: 16px;

  display: grid;
  gap: 24px;
  
  ${({$userTypeDoctor}) => console.log($userTypeDoctor)}

  ${respondTo('large')`
    grid-template-columns: 1fr auto;
    grid-template-rows: repeat(2, 1fr);

    gap: 32px;
  `}

  ${respondTo('xlarge')`
    grid-template-columns: 1fr auto 220px;
    align-items: center;
    justify-content: space-between;

    grid-template-rows: 1fr;
  `}

  .card__profile {
    display: flex;
    gap: 16px;
    align-items: center;

    h4 {
      font-size: 20px;
      flex-shrink: 10;
    }

    /* ${respondTo('large')`
      grid-column: span 1;  
      grid-row: span 1; 
    `} */
  }

  .card__schedule {
    p {
      font-size: 16px;

      display: flex;
      align-items: center;
      gap: 6px;
    }

    p + p {
      margin-top: 8px;
    }

    ${respondTo('medium')`

    `}

      /* ${respondTo('large')`
        grid-column: span 1;  
        grid-row: span 1; 
      `} */
  }

  .card__more-info {
    ${respondTo('large')`
        grid-column: span 2;  
        grid-row: span 1;

        display: block;
    `}

    ${respondTo('xmedium')`
      display: flex;
      justify-content: space-between;
    `}

    ${respondTo('xlarge')`
        grid-column: 3; 
        display: block;
    `}

    p {
     color: ${({ theme }) => theme.colors.gray.dark};

     font-size: 14px;

     display: flex;
     /* justify-content: space-between; */
     gap: 12px; 

     ${respondTo('large')`
      justify-content: start;
      gap: 12px;  
    `}
    }

    p + p {
      margin-top: 8px;
    }

    

    .card__action {
      margin-top: 12px;

      svg {
        height: 24px;
        width: 24px;

        path {
          /* fill: ${({ theme }) => theme.colors.white}; */
          fill: ${({ theme }) => theme.colors.primary.dark};
        }
      }

      button {
        display: flex;
        gap: 8px;
        align-items: center;

        font-size: 18px;
        font-weight: 600;

        /* padding: 8px 12px;
        border-radius: 8px; */
        /* background-color: ${({ theme }) => theme.colors.primary.main};
        color: ${({ theme }) => theme.colors.white}; */
        color: ${({ theme }) => theme.colors.primary.dark};
      }
    }
  }

  
`;