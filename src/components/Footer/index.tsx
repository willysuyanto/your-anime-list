import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background: #222;
  color: #fff;
  padding: 24px 0;
  text-align: center;
  font-size: 1rem;
  position: relative;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  letter-spacing: 0.5px;
`;

const Footer: React.FC = () => (
  <FooterContainer>
    <FooterText>
      © {new Date().getFullYear()} Your Anime List. All rights reserved.
    </FooterText>
  </FooterContainer>
);

export default Footer;
