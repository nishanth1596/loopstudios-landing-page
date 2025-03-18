import { useState } from "react";
import Logo from "../feature/Logo";
import openMenuIcon from "/icon-hamburger.svg";
import closeMenuIcon from "/icon-close.svg";
import NavBar from "../feature/NavBar";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen((show) => !show);
  }

  return (
    <header className="relative h-screen w-full bg-[url(/image-hero.jpg)] bg-cover bg-no-repeat md:h-2/3 md:bg-[url(/image-desktop-hero.jpg)] md:pb-20 xl:pb-[11.63rem]">
      <Logo
        onClick={handleMenu}
        ariaLabel="Open navigation menu"
        img={openMenuIcon}
      />

      {!isMenuOpen ? (
        <h1 className="font-JosefinSans mx-6 mt-40 border-2 px-6 py-[1.63rem] text-[2.5rem] leading-[2.34rem] font-light text-white uppercase md:mx-10 md:mt-16 md:max-w-96 xl:mx-[10.31rem] xl:max-w-[40.63rem] xl:p-10 xl:text-7xl xl:leading-[4.5rem]">
          Immersive experiences that deliver
        </h1>
      ) : (
        <div className="fixed inset-0 bg-black">
          <Logo
            onClick={handleMenu}
            ariaLabel="Close navigation menu"
            img={closeMenuIcon}
          />

          <NavBar />
        </div>
      )}
    </header>
  );
}

export default Header;
