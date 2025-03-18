import imgMobile from "../assets/images/mobile/image-interactive.jpg";
import imgDesktop from "../assets/images/desktop/image-interactive.jpg";

function Hero() {
  return (
    <section className="mx-6 mt-24 md:mx-14 lg:relative lg:mx-16 lg:mt-40">
      <picture>
        <source srcSet={imgMobile} media="(max-width:767px)" />
        <source srcSet={imgDesktop} media="(min-width:768px)" />

        <img
          src={imgMobile}
          alt="A man wearing a VR headset with his mouth open and fingers clawed in excitement."
          className="mx-auto lg:mx-0 xl:ml-24"
        />
      </picture>

      <article className="mx-6 mt-12 text-center text-black lg:absolute lg:right-0 lg:bottom-[-2px] lg:max-w-[33.81rem] lg:bg-white lg:pt-24 lg:pl-24 lg:text-left xl:right-24 xl:mr-0">
        <h2 className="font-JosefinSans text-[2rem] leading-[2rem] font-light uppercase lg:text-5xl lg:leading-12">
          The leader in interactive VR
        </h2>
        <p className="font-Atlat mt-4 text-[0.94rem] leading-[1.56rem] font-normal opacity-50 lg:mt-6">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed{" "}
          <span className="lg:block">
            businesses through digital experiences that bind to their brand.
          </span>
        </p>
      </article>
    </section>
  );
}

export default Hero;
//
