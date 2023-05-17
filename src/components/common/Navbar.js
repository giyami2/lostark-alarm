import styled from "@emotion/styled";
import Typography from "./Typography";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { useRouter } from "next/router";
import { setNavbar } from "@/store/slices/navbar";
import { useAppDispatch, useAppSelector } from "@/store";

export const Navbar = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const tabIdx = useAppSelector(state => state.navbar.tabIndex);

  return (
    <NavbarContainer>
      <NavbarItem
        className={`${tabIdx === 0 ? "is-current" : ""}`}
        tabIdx="0"
        onClick={() => {
          dispatch(setNavbar(0));
          router.push("/");
        }}
      >
        <Typography typeface={"M1"}>Wandering Merchant</Typography>
      </NavbarItem>
      <NavbarItem
        tabIdx="1"
        className={`${tabIdx === 1 ? "is-current" : ""}`}
        onClick={() => {
          dispatch(setNavbar(1));
          router.push("/notice");
        }}
      >
        <Typography typeface={"M1"}>Notice</Typography>
      </NavbarItem>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.ul`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 50px;
`;

const NavbarItem = styled.li`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  position: relative;

  &.is-current:after {
    position: absolute;
    content: "";
    bottom: -6px;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 60px;
    height: 6px;
    background: ${props => props.theme.colors.primary};
  }
`;
