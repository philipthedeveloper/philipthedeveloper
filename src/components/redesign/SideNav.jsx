import styled from "styled-components";
import classNames from "classnames";
import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "MY JOURNEY",
    path: "#journey",
  },
  {
    name: "EXPERIENCE",
    path: "#work-experience",
  },
  {
    name: "PROJECTS",
    path: "#projects",
  },
  {
    name: "CONTACT",
    path: "#contact",
  },
];

const SideNav = ({ onClose, isOpen, showModal }) => {
  return (
    <SideNavContainer
      className={classNames(
        { "left-0": isOpen, "-left-64": !isOpen },
        "flex md:hidden relative flex-col side-nav z-[500]"
      )}
    >
      <Underlay
        className={classNames("underlay", { hidden: !isOpen })}
        onClick={onClose}
      />
      <NavHeader className="">
        <Icon
          style={{
            color: "var(--primary-color)",
            cursor: "pointer",
          }}
          onClick={onClose}
          id="hideIcon"
          className="ml-auto rounded-md w-8 h-8 flex justify-center items-center"
        >
          <i className="fi fi-rr-arrow-small-left flex text-white text-3xl"></i>
        </Icon>
      </NavHeader>
      <NavList className="flex flex-col items-stretch">
        <NavItem
          onClick={onClose}
          className="text-xs border-b border-gray-700 border-opacity-20"
        >
          <LinkItem to={"/"}>
            <span className="navTextCont">
              <span className="navtext text-gray-300">HOME</span>
            </span>
          </LinkItem>
        </NavItem>
        {navLinks.map((navItem) => (
          <NavItem
            key={navItem.name.toString()}
            onClick={onClose}
            className="text-xs border-b border-gray-700 border-opacity-20"
          >
            <AnchorItem href={navItem.path} title={navItem.name}>
              <span className="navTextCont">
                <span className="navtext text-gray-300">{navItem.name}</span>
              </span>
            </AnchorItem>
          </NavItem>
        ))}
      </NavList>
      <div className="mt-auto w-full px-4 mb-8 ">
        <button
          onClick={() => showModal()}
          className="rounded-full px-8 py-2 mx-auto bg-[var(--base-color)] block text-sm"
        >
          DOWNLOAD MY CV
        </button>
      </div>
    </SideNavContainer>
  );
};

const Underlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 250px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  opacity: 0;
  animation-name: animateOpacity;
  animation-duration: 0.2s;
  animation-timing-function: ease;
  animation-delay: 0.4s;
  animation-fill-mode: forwards;

  @keyframes animateOpacity {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;

const SideNavContainer = styled.nav`
  background-color: var(--black-background);
  width: 100%;
  height: 100%;
  box-shadow: 4px 0px 10px #0c0c0e;
  transition: 0.4s ease;

  & > *:not(.underlay) {
    position: relative;
    z-index: 5;
  }

  span.navTextCont,
  #logoTextCont {
    white-space: nowrap;
    display: inline-block;
    transition: 0.4s ease;
  }

  &::-webkit-scrollbar {
    appearance: none;
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
  }

  @media (max-width: 928px) {
    & {
      position: fixed;
      top: 0;
      width: 250px;
      z-index: 500;
    }
  }
`;

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  height: 50px;
`;

const NavList = styled.ul`
  list-style: none;
  overflow: auto;

  &::-webkit-scrollbar {
    appearance: none;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-appearance: none;
  }
`;
const NavItem = styled.li`
  color: var(--primary-color);
`;

const Icon = styled.span`
  @media (max-width: 928px) {
    & .fa-arrow-left-long {
      display: none;
    }
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
  display: inline-block;
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 0.8rem;
  transition: 0.4s ease;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: var(--primary-color);
    color: var(--textColor);
  }
`;

const AnchorItem = styled.a`
  text-decoration: none;
  color: var(--primary-color);
  display: inline-block;
  padding: 1rem 1.5rem;
  width: 100%;
  border-radius: 0.8rem;
  transition: 0.4s ease;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    background-color: var(--primary-color);
    color: var(--textColor);
  }
`;

export default SideNav;
