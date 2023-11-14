'use client';

import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 45px;
  margin-right: 88px;
  width: 90px;

  p {
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
  }
`;
