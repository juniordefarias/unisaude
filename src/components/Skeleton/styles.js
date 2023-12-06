import styled, { keyframes } from 'styled-components';

const pulseAnimation = keyframes`
  0% {
    opacity: 0.8;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.8;
  }
`;

export const Container = styled.div`
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;

  &.text {
    width: 100%;
    height: 12px;
    background-color: ${({ theme }) => theme.colors.gray.light};
  }

  &.title {
    width: 160px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.gray.light};
    margin-bottom: 4px;
  }

  &.h1 {
    width: 180px;
    height: 38px;
    background-color: ${({ theme }) => theme.colors.gray.light};
    margin-bottom: 4px;
  }
`;