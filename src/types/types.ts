export type LogoProps = {
  img: string;
  ariaLabel: string;
  onClick: () => void;
};

export type OurCreationProps = {
  imageMobile: string;
  imageDesktop: string;
  altText: string;
  description: string;
};

export type NavBarProps = {
  footer?: boolean;
  hiddenOnSmallScreen?: boolean;
};
