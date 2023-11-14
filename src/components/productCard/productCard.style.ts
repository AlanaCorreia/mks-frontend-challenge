'use client';

import styled from 'styled-components';

export const Card = styled.div`
  background: ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.veryDarkGray};
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 285px;
  width: 218px;

  img {
    margin-top: 18px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Title = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  width: 124px;
  height: 38px;
`;

export const Price = styled.p`
  background: ${({theme}) => theme.colors.darkGray};
  color: ${({theme}) => theme.colors.white};
  border-radius: 5px;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  padding: 4px 6px 4px 7px;
  text-align: center;
`;

export const Description = styled.p`
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px; 
  width: 192px;
`;

export const BuyButton = styled.button`
  background: ${({theme}) => theme.colors.blue};
  color: ${({theme}) => theme.colors.white};
  border: none;
  border-radius: 0px 0px 8px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 31.907px;
  width: 218px;

  img {
    margin-top: 0;
    margin-right: 14px;
  }

  p {
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  }
`;
