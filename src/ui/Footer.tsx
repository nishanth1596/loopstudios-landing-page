import NavBar from "../feature/NavBar";
import SocialMediaNavBar from "../feature/SocialMediaNavBar";
import logoImg from "/logo.svg";

function Footer() {
  return (
    <footer className="flex flex-col items-center bg-black pb-14 text-center">
      <img src={logoImg} alt="Loopstuidos Logo" className="mt-14" />
      <NavBar footer={true} />

      <SocialMediaNavBar />

      <p className="font-Atlat mt-4 text-base leading-[1.56rem] font-normal text-white opacity-50">
        © 2021 Loopstudios. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
