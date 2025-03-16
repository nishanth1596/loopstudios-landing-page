import img from "../assets/images/mobile/image-interactive.jpg";

function Hero() {
  return (
    <section className="mx-6 mt-24">
      <img
        src={img}
        alt="A man wearing a VR headset with his mouth open and fingers clawed in excitement."
      />
      <article className="mx-6 mt-12 text-center text-black">
        <h2 className="font-JosefinSans text-[2rem] leading-[2rem] font-light uppercase">
          The leader in interactive VR
        </h2>
        <p className="font-Atlat mt-4 text-[0.94rem] leading-[1.56rem] font-normal opacity-50">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </article>
    </section>
  );
}

export default Hero;
//
