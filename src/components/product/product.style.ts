'use client';

import styled from 'styled-components';

export const Main = styled.main`
  background: ${({theme}) => theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 101px - 34px);
`;

export const CardsContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 217.562px);
  gap: 22px;
`;