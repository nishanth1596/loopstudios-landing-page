import { OurCreationProps } from "../types/types";

function OurCreationItem({
  imageMobile,
  imageDesktop,
  altText,
  description,
}: OurCreationProps) {
  return (
    <figure className="group relative cursor-pointer">
      <picture>
        <source srcSet={imageMobile} media="(max-width:1023px)" />
        <source srcSet={imageDesktop} media="(min-width:1024px)" />
        <img src={imageMobile} alt={altText} />
      </picture>

      <figcaption className="font-JosefinSans absolute top-[45%] left-5 text-left text-2xl leading-6 font-light whitespace-pre-line text-white uppercase group-hover:text-black md:top-auto md:bottom-8 md:left-10 md:text-[2rem] md:leading-[2rem]">
        {description}
      </figcaption>
    </figure>
  );
}

export default OurCreationItem;
