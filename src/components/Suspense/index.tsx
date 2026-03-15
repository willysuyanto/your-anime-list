import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #fff;
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin: auto;
  display: block;
`;

const LoadingText = styled.div`
  margin-top: 16px;
  color: #555;
  font-size: 1.2rem;
  letter-spacing: 1px;
`;

const SuspenseFallback: React.FC = () => (
  <Container>
    <Spinner />
    <LoadingText>Loading...</LoadingText>
  </Container>
);

export default SuspenseFallback;
