import { OurCreationProps } from "../types/types";

function OurCreationItem({ image, altText, description }: OurCreationProps) {
  return (
    <figure className="group relative cursor-pointer">
      <img src={image} alt={altText} />

      <figcaption className="font-JosefinSans absolute top-[45%] left-5 text-left text-2xl leading-6 font-light whitespace-pre-line text-white uppercase group-hover:text-black">
        {description}
      </figcaption>
    </figure>
  );
}

export default OurCreationItem;
