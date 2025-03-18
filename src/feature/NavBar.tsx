import { NavBarProps } from "../types/types";

function NavBar({ footer, hiddenOnSmallScreen }: NavBarProps) {
  const style = {
    base: "mx-6 mt-40 space-y-6 leading-6 uppercase lg:gap-8 lg:capitalize lg:mt-0 lg:flex lg:space-y-0",
    footer: {
      ulStyle: "mt-8 space-y-4 lg:mt-3.5 lg:space-y-0 lg:flex lg:gap-8 ",
      liStyle: "font-Atlat text-base leading-[1.56rem] font-normal text-white",
    },
  };

  let currentStyle = style.base;

  if (footer) {
    currentStyle = style.footer.ulStyle;
  }

  return (
    <nav
      className={hiddenOnSmallScreen ? "hidden lg:block" : undefined}
      aria-label={
        hiddenOnSmallScreen ? "Primary Navigation" : "Main Navigation"
      }
    >
      <ul className={currentStyle}>
        <li
          className={`${footer ? style.footer.liStyle : "navList show"} underlineCustomClass`}
        >
          <a href="#">About</a>
        </li>
        <li
          className={`${footer ? style.footer.liStyle : "navList show"} underlineCustomClass`}
        >
          <a href="#">Careers</a>
        </li>
        <li
          className={`${footer ? style.footer.liStyle : "navList show"} underlineCustomClass`}
        >
          <a href="#">Events</a>
        </li>
        <li
          className={`${footer ? style.footer.liStyle : "navList show"} underlineCustomClass`}
        >
          <a href="#">Products</a>
        </li>
        <li
          className={`${footer ? style.footer.liStyle : "navList show"} underlineCustomClass`}
        >
          <a href="#">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
