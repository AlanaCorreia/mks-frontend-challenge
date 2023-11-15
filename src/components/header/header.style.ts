'use client';

import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.colors.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 101px;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 65px;

  h1 {
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    height: 44px;
    position: absolute;
    width: 128px;
  }

  p {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 19px; 
    height: 44px;
    position: relative;
    left: 100px;
    top: 19px;
    width: 200px;
  }
`;
