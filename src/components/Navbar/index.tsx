import { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "@/assets/images/logo-white.webp";
import { Link } from "react-router";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  background: ${(props) => props.theme.colors.primary};
  align-items: center;
  padding: 0 24px;
  color: white;
  z-index: 1000;
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  height: 70px;
`;

const Logo = styled.img`
  height: 50px;
`;

const DesktopMenu = styled.ul`
  display: flex;
  gap: 30px;
  list-style: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.neutral};
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Hamburger = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  transition: 0.3s;
  z-index: 998;
`;

const Drawer = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  padding-top: 70px;
  background: ${(props) => props.theme.colors.background};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.3s ease;
  z-index: 999;
`;

const DrawerMenu = styled.ul`
  list-style: none;
`;

const DrawerItem = styled.li`
  padding: 15px 0;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.lightGray};
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Categories",
      path: "/categories",
    },
  ];

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo src={logo} alt="Logo" />

          <DesktopMenu>
            {menus.map((menu) => (
              <MenuItem key={menu.name}>
                <MenuLink to={menu.path}>{menu.name}</MenuLink>
              </MenuItem>
            ))}
          </DesktopMenu>

          <Hamburger onClick={() => setOpen(!open)}>
            {open ? <FiX size={30} /> : <FiMenu size={30} />}
          </Hamburger>
        </NavContainer>
      </Nav>

      <Overlay open={open} onClick={() => setOpen(false)} />

      <Drawer open={open}>
        <DrawerMenu>
          {menus.map((menu) => (
            <DrawerItem key={menu.name} onClick={() => setOpen(false)}>
              <MenuLink to={menu.path}>{menu.name}</MenuLink>
            </DrawerItem>
          ))}
        </DrawerMenu>
      </Drawer>
    </>
  );
}
