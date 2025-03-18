import OurCreationItem from "./OurCreationItem";

import deepEarthMobileImg from "../assets/images/mobile/image-deep-earth.jpg";
import deepEarthDesktopImg from "../assets/images/desktop/image-deep-earth.jpg";

import nightArcadeMobileImg from "../assets/images/mobile/image-night-arcade.jpg";
import nightArcadeDesktopImg from "../assets/images/desktop/image-night-arcade.jpg";

import soccerMobileImg from "../assets/images/mobile/image-soccer-team.jpg";
import soccerDesktopImg from "../assets/images/desktop/image-soccer-team.jpg";

import gridMobileImg from "../assets/images/mobile/image-grid.jpg";
import gridDesktopImg from "../assets/images/desktop/image-grid.jpg";

import aboveVrMobileImg from "../assets/images/mobile/image-from-above.jpg";
import aboveVrDesktopImg from "../assets/images/desktop/image-from-above.jpg";

import pocketMobileImg from "../assets/images/mobile/image-pocket-borealis.jpg";
import pocketDesktopImg from "../assets/images/desktop/image-pocket-borealis.jpg";

import curiosityMobileImg from "../assets/images/mobile/image-curiosity.jpg";
import curiosityDesktopImg from "../assets/images/desktop/image-curiosity.jpg";

import fisheyeMobileImg from "../assets/images/mobile/image-fisheye.jpg";
import fisheyeDesktopImg from "../assets/images/desktop/image-fisheye.jpg";

function Product() {
  return (
    <section className="mx-6 my-24 text-center lg:mx-16 lg:my-[11.5rem] lg:text-left xl:mx-[10.31rem]">
      <div className="flex items-center justify-between">
        <h3 className="font-JosefinSans text-[2rem] leading-[2rem] font-light text-black uppercase lg:text-5xl lg:leading-12">
          Our creations
        </h3>

        <button className="font-Atlat hidden cursor-pointer border py-[13px] pr-[43px] pl-[38px] text-sm leading-3.5 font-normal tracking-[5px] text-black uppercase transition-colors duration-300 ease-in hover:bg-black hover:text-white lg:block">
          See all
        </button>
      </div>

      <div className="mt-12 space-y-6 lg:grid lg:grid-cols-4 lg:gap-x-[1.875rem] lg:gap-y-[1.875rem]">
        <OurCreationItem
          description={`Deep
            Earth`}
          imageMobile={deepEarthMobileImg}
          imageDesktop={deepEarthDesktopImg}
          altText="Earth image from the universe"
        />

        <OurCreationItem
          description={`Night
          arcade`}
          imageMobile={nightArcadeMobileImg}
          imageDesktop={nightArcadeDesktopImg}
          altText="Two arcade machine with luminating lights"
        />

        <OurCreationItem
          description={`Soccer
          team vr`}
          imageMobile={soccerMobileImg}
          imageDesktop={soccerDesktopImg}
          altText="A man wearing red tshirt playing soccer"
        />

        <OurCreationItem
          description={`The
          grid`}
          imageMobile={gridMobileImg}
          imageDesktop={gridDesktopImg}
          altText="Rear view picture of a car in which michelin is written on the tank"
        />

        <OurCreationItem
          description={`from up
          above vr`}
          imageMobile={aboveVrMobileImg}
          imageDesktop={aboveVrDesktopImg}
          altText="A topview picture of a mountain in which roads are laid. There is also a car taking that route"
        />

        <OurCreationItem
          description={`Pocket
          borealis`}
          imageMobile={pocketMobileImg}
          imageDesktop={pocketDesktopImg}
          altText="A small or contained version of the Northern Lights (Aurora Borealis)"
        />

        <OurCreationItem
          description={`The
          curiosity`}
          imageMobile={curiosityMobileImg}
          imageDesktop={curiosityDesktopImg}
          altText="A highly specialized space equipments in a dessert"
        />

        <OurCreationItem
          description={`Make it 
          fisheye`}
          imageMobile={fisheyeMobileImg}
          imageDesktop={fisheyeDesktopImg}
          altText="A wide-angle image with a fisheye lens effect, creating a distorted, curved view."
        />
      </div>

      <button className="font-Atlat mt-[34px] cursor-pointer border py-3.5 pr-[43px] pl-[38px] text-sm leading-3.5 font-normal tracking-[5px] text-black uppercase transition-colors duration-300 ease-in hover:bg-black hover:text-white lg:hidden">
        See all
      </button>
    </section>
  );
}

export default Product;
