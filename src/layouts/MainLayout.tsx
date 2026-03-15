import Footer from "@/components/Footer";
import { Navbar } from "@components";
import { Outlet } from "react-router";
import styled from "styled-components";

type MainLayoutProps = object;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const MainLayout: React.FC<MainLayoutProps> = () => {
  return (
    <div className="main-layout">
      <Navbar />
      <MainContent>
        <Outlet />
      </MainContent>
      <Footer />
    </div>
  );
};

export default MainLayout;
