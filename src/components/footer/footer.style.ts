'use client';

import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  height: 34px;
  width: 100%;


  p {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;