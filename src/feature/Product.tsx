import OurCreationItem from "./OurCreationItem";
import deepEarthMobileImg from "../assets/images/mobile/image-deep-earth.jpg";
import nightArcadeMobileImg from "../assets/images/mobile/image-night-arcade.jpg";
import soccerMobileImg from "../assets/images/mobile/image-soccer-team.jpg";
import gridMobileImg from "../assets/images/mobile/image-grid.jpg";
import aboveVrMobileImg from "../assets/images/mobile/image-from-above.jpg";
import pocketMobileImg from "../assets/images/mobile/image-pocket-borealis.jpg";
import curiosityMobileImg from "../assets/images/mobile/image-curiosity.jpg";
import fisheyeMobileImg from "../assets/images/mobile/image-fisheye.jpg";

function Product() {
  return (
    <section className="mx-6 mt-24 mb-24 text-center">
      <h3 className="font-JosefinSans leadin-[2rem] text-[2rem] font-light text-black uppercase">
        Our creations
      </h3>

      <div className="mt-12 space-y-6">
        <OurCreationItem
          description={`Deep
            Earth`}
          image={deepEarthMobileImg}
          altText="Earth image from the universe"
        />

        <OurCreationItem
          description={`Night
          arcade`}
          image={nightArcadeMobileImg}
          altText="Two arcade machine with luminating lights"
        />

        <OurCreationItem
          description={`Soccer
          team vr`}
          image={soccerMobileImg}
          altText="A man wearing red tshirt playing soccer"
        />

        <OurCreationItem
          description={`The
          grid`}
          image={gridMobileImg}
          altText="Rear view picture of a car in which michelin is written on the tank"
        />

        <OurCreationItem
          description={`from up
          above vr`}
          image={aboveVrMobileImg}
          altText="A topview picture of a mountain in which roads are laid. There is also a car taking that route"
        />

        <OurCreationItem
          description={`Pocket
          borealis`}
          image={pocketMobileImg}
          altText="A small or contained version of the Northern Lights (Aurora Borealis)"
        />

        <OurCreationItem
          description={`The
          curiosity`}
          image={curiosityMobileImg}
          altText="A highly specialized space equipments in a dessert"
        />

        <OurCreationItem
          description={`Make it 
          fisheye`}
          image={fisheyeMobileImg}
          altText="A wide-angle image with a fisheye lens effect, creating a distorted, curved view."
        />
      </div>

      <button className="font-Atlat mt-[34px] cursor-pointer border py-3.5 pr-[43px] pl-[38px] text-sm leading-3.5 font-normal tracking-[5px] text-black uppercase transition-colors duration-300 ease-in hover:bg-black hover:text-white">
        See all
      </button>
    </section>
  );
}

export default Product;
