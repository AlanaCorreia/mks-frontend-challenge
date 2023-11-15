'use client';

import styled from 'styled-components';

export const Container = styled.aside`
  background: ${({theme}) => theme.colors.blue};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

  align-items: center;
  justify-content: center;
  height: 931px;
  position: absolute;
  right: 0;
  z-index: 1;
  width: 486px;
`;

export const RowContainer1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 36px 30px 42px 40px;
  margin:'36px 30px 42px 40px';
`;

export const RowContainer2 = styled.div<{ top: string }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 36px 30px 42px 40px;
  margin: ${(props) => props.top ?
    '520px 30px 40px 40px' :
    '36px 30px 42px 40px'};
  position: absolute;
`;

export const Title = styled.h1`
  color: ${({theme}) => theme.colors.white};
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  border: none;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;

  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  
`;

export const CardsContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  gap: 22px;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`;

export const Text = styled.p`
  color: ${({theme}) => theme.colors.white};
  font-size: 28px;
  font-weight: 700;
  
`;

export const CheckoutButton = styled.button`
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 97px;
  position: absolute;
  bottom: 0;
  width: 486px;

  
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
`;