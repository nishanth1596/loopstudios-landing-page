import { OurCreationProps } from "../types/types";

function OurCreationItem({ image, altText, description }: OurCreationProps) {
  return (
    <div className="relative">
      <img src={image} alt={altText} />
      <p className="font-JosefinSans absolute top-[45%] left-5 text-left text-2xl leading-6 font-light whitespace-pre-line text-white uppercase">
        {description}
      </p>
    </div>
  );
}

export default OurCreationItem;
