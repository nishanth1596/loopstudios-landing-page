import { LogoProps } from "../types/types";
import NavBar from "./NavBar";

function Logo({ onClick, img, ariaLabel }: LogoProps) {
  return (
    <div className="flex items-center justify-between px-6 pt-10 md:px-10 md:py-14 lg:pt-16 xl:px-[10.31rem]">
      <img src="/logo.svg" alt="Loopstudios logo" />
      <button
        onClick={onClick}
        className="cursor-pointer transition-transform duration-300 active:scale-90 lg:hidden"
        aria-label={ariaLabel}
      >
        <img src={img} alt="Menu button icon" />
      </button>
      <NavBar hiddenOnSmallScreen={true} />
    </div>
  );
}

export default Logo;
