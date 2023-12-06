import styled from 'styled-components';

export default styled.button`
  padding: 0 32px;
  height: 48px;

  background-color: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 600;
  
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    
  }

  &[disabled] {
    //opacity: 0.3;
    cursor: initial;
    background-color: ${({ theme }) => theme.colors.gray.light};
    color: ${({ theme }) => theme.colors.gray.dark};
  }
`;