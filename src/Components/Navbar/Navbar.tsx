import React from "react";
import { Dashboard, Match, Message, Profile } from "./svg";
import { useReactPath } from "./path.hook";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type NavItem = {
  path: string;
  Icon: React.ElementType; // Using React.ElementType for icon components
  color: string;
};

type Props = {};

export const Navbar = (_props: Props) => {
    const navigate = useNavigate();

    const handleNavigation = (value:string) => {
      navigate(value);
    };
  const path = useReactPath();

  const navItems: NavItem[] = [
    { path: "/dashboard", Icon: Dashboard, color: "blue" },
    { path: "/match", Icon: Match, color: "green" },
    { path: "/message", Icon: Message, color: "red" },
    { path: "/profile", Icon: Profile, color: "black" },
  ];

  useEffect(() => {}, [path]);

  const renderNavButton = ({ path, Icon, color }: NavItem) => (
    <button
      onClick={() => handleNavigation(path)}
      style={{
        backgroundColor: window.location.href.includes(path)
          ? "#05B570"
          : "#696969",
      }}
    >
      <Icon color={color} />
    </button>
  );

  return <div>{navItems.map((item) => renderNavButton(item))}</div>;
};
