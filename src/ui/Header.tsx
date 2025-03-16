import { useState } from "react";
import Logo from "../feature/Logo";
import openMenuIcon from "/icon-hamburger.svg";
import closeMenuIcon from "/icon-close.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenu() {
    setIsMenuOpen((show) => !show);
  }

  return (
    <header className="relative h-screen w-full bg-[url(/image-hero.jpg)] bg-cover bg-no-repeat">
      <Logo
        onClick={handleMenu}
        ariaLabel="Open navigation menu"
        img={openMenuIcon}
      />
      {!isMenuOpen ? (
        <>
          <h1 className="font-JosefinSans mx-6 mt-40 border-2 px-6 py-[1.63rem] text-[2.5rem] leading-[2.34rem] font-light text-white uppercase">
            Immersive experiences that deliver
          </h1>
        </>
      ) : (
        <div className="fixed inset-0 bg-black">
          <Logo
            onClick={handleMenu}
            ariaLabel="Close navigation menu"
            img={closeMenuIcon}
          />

          <nav>
            <ul className="mx-6 mt-40 space-y-6 leading-6 uppercase">
              <li className={`navList show`}>
                <a href="#">About</a>
              </li>
              <li className={`navList show`}>
                <a href="#">Careers</a>
              </li>
              <li className={`navList show`}>
                <a href="#">Events</a>
              </li>
              <li className={`navList show`}>
                <a href="#">Products</a>
              </li>
              <li className={`navList show`}>
                <a href="#">Support</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
