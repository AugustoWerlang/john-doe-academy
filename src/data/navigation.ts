export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly children?: readonly NavLink[];
}

export const mainNav = [
  { label: "Start Here", href: "/about" },
  {
    label: "Programs",
    href: "/#programs",
    children: [
      { label: "Private Pilot", href: "/programs/private-pilot" },
      { label: "Instrument Rating", href: "/#programs" },
      { label: "Commercial Pilot", href: "/#programs" },
      { label: "Multi-Engine Rating", href: "/#programs" },
    ],
  },
  { label: "Our Fleet", href: "/#fleet" },
  { label: "Blog", href: "/blog" },
] satisfies readonly NavLink[];

export const ctaLink = {
  label: "Book a Discovery Flight",
  href: "/?interest=discovery-flight&source=main-nav#contact",
} satisfies NavLink;

interface FooterNav {
  readonly programs: readonly NavLink[];
  readonly about: readonly NavLink[];
}

export const footerNav = {
  programs: [
    { label: "Private Pilot", href: "/programs/private-pilot" },
    { label: "Instrument Rating", href: "/programs/instrument-rating" },
    { label: "Commercial Pilot", href: "/programs/commercial-pilot" },
    { label: "Multi-Engine Rating", href: "/programs/multi-engine" },
  ],
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Our Fleet", href: "/#fleet" },
    { label: "Blog", href: "/blog" },
    {
      label: "Contact Us",
      href: "/?interest=discovery-flight&source=footer-about#contact",
    },
  ],
} satisfies FooterNav;
