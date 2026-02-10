export type FAQItem = {
  question: string;
  answer: string;
};

export const FAQ_DATA: FAQItem[] = [
  {
    question: 'What kind of productions is this studio designed for?',
    answer: `
            Our facility is a versatile, multi-use soundproofed space tailored for:
            Commercial productions
            Broadcasting music videos
            Hybrid live shoots (live and recorded)
            Content creators seeking uncompromised quality
            Whether you’re producing a high-impact video ad, live streaming a concert, or
            creating high-end YouTube content, our studio is designed for impact and tuned for perfection.`,
  },
  {
    question: 'What Makes This Studio Different From Others?',
    answer: `
          Our studio stands apart through:
          Professional-grade acoustics for flawless audio capture
          Broadcast-ready infrastructure, compatible with high-end camera setups, lighting rigs, and live streaming equipment
          On-demand adaptability — the space transforms from silent isolation to energetic performance zones seamlessly. It’s a space where sound meets spectacle.`,
  },
  {
    question: 'Can The Studio Be Customized For My Specific Shoot?',
    answer: `
          Absolutely! Our studio is adaptable and modular, giving creators the ability to:
          Modify layout and lighting
          Control acoustics and ambiance
          Integrate custom sets or branding elements
          We aim to be as flexible as your creative vision requires.`,
  },
  {
    question: "What's Included In The Booking?",
    answer: `
            Each booking includes:
            Full use of the studio and its acoustic treatment
            Access to power, internet, and broadcast infrastructure
            Standard lighting rigs and backdrops
            Option to request additional services (crew, gear, etc.)`,
  },
];
