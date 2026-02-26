export interface Aircraft {
  readonly name: string;
  readonly type: string;
  readonly specs: string;
  readonly description: string;
  readonly image: string;
}

export const fleet = [
  {
    name: "Cessna 172 Skyhawk",
    type: "Single-Engine",
    specs: "4 seats · 124 kts · VFR/IFR",
    description:
      "The world's most popular training aircraft. Forgiving flight characteristics, Garmin G1000 glass cockpit, and excellent visibility make it ideal for primary training.",
    image: "cessna-flying.jpg",
  },
  {
    name: "Piper PA-28 Archer",
    type: "Single-Engine",
    specs: "4 seats · 128 kts · VFR/IFR",
    description:
      "A low-wing trainer offering a different flight perspective. Great for cross-country training with stable handling and comfortable cabin.",
    image: "piper-archer.jpg",
  },
  {
    name: "Cessna 182 Skylane",
    type: "Single-Engine",
    specs: "4 seats · 145 kts · IFR",
    description:
      "A high-performance step-up for commercial training. More power, higher speeds, and complex systems prepare you for advanced operations.",
    image: "cessna-parked.jpg",
  },
] satisfies readonly Aircraft[];
