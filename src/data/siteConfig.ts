interface SiteConfig {
  readonly name: string;
  readonly shortName: string;
  readonly tagline: string;
  readonly phone: string;
  readonly phoneRaw: string;
  readonly email: string;
  readonly address: {
    readonly street: string;
    readonly city: string;
    readonly state: string;
    readonly zip: string;
    readonly full: string;
    readonly mapsUrl: string;
  };
  readonly hours: {
    readonly weekdays: string;
    readonly weekends: string;
  };
  readonly social: {
    readonly instagram: string;
    readonly youtube: string;
    readonly facebook: string;
    readonly tiktok: string;
  };
  readonly certifications: readonly string[];
  readonly url: string;
}

export const SITE = {
  name: "John Doe Academy",
  shortName: "John Doe Academy",
  tagline: "Demo Flight School Website",
  phone: "(000) 000-0000",
  phoneRaw: "+10000000000",
  email: "demo@johndoe.academy",
  address: {
    street: "123 Demo Street, Suite 100",
    city: "Austin",
    state: "TX",
    zip: "00000",
    full: "123 Demo Street, Suite 100, Austin, TX 00000",
    mapsUrl: "https://maps.google.com/?q=John+Doe+Academy+Demo",
  },
  hours: {
    weekdays: "Mon-Fri 9:00 AM - 5:00 PM",
    weekends: "Sat-Sun Closed",
  },
  social: {
    instagram: "https://example.com/demo-instagram",
    youtube: "https://example.com/demo-youtube",
    facebook: "https://example.com/demo-facebook",
    tiktok: "https://example.com/demo-tiktok",
  },
  certifications: ["Demo Project", "Portfolio Sample"],
  url: "https://fly.codename.com.br/",
} satisfies SiteConfig;
