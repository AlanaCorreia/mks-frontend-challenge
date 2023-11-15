'use client';

import styled from 'styled-components';

export const Card = styled.div`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.veryDarkGray};
  border-radius: 8px;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 101px;
  width: 385px;
`;

export const Title = styled.p`
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
`;

export const Price = styled.p`
  color: ${({theme}) => theme.colors.black};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const ButtonContainer = styled.div`
  background: ${({theme}) => theme.colors.white};
  border: 0.3px solid ${({theme}) => theme.colors.gray2};
  border-radius: 4px;
  width: 50px;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CountButton = styled.button`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.black};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 5px;


  font-size: 8px;
  font-style: normal;
  font-weight: 400;

`;

export const CountText = styled.p`
  color: ${({theme}) => theme.colors.black};
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  width: 5px;
`;

export const QuantityText = styled.p`
  color: ${({theme}) => theme.colors.black};
  font-size: 5px;
  font-style: normal;
  font-weight: 400;
`;

export const CloseButton = styled.button`
  background: ${({theme}) => theme.colors.black};
  color: ${({theme}) => theme.colors.white};
  border: none;
  border-radius: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 18px;
  width: 18px;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;