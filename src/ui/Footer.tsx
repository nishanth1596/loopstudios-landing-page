import NavBar from "../feature/NavBar";
import SocialMediaNavBar from "../feature/SocialMediaNavBar";
import logoImg from "/logo.svg";

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-black pb-14 text-center lg:flex-row lg:justify-between lg:px-16 lg:py-11 xl:px-[10.31rem]">
      <div className="">
        <img src={logoImg} alt="Loopstuidos Logo" className="mt-14 lg:mt-0" />
        <NavBar footer={true} />
      </div>

      <div className="flex flex-col items-center lg:items-end">
        <SocialMediaNavBar />
        <p className="font-Atlat mt-4 text-base leading-[1.56rem] font-normal text-white opacity-50 lg:mt-3.5">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
