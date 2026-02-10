import studioA from '@/assets/images/Studio A main 2.jpg'
import studioAGrid from '@/assets/images/studio a - grid.jpg'
import studioControl from '@/assets/images/Studio C control room.jpg'

export const SERVICES_DATA = [
  {
    id: '01 / SERVICES',
    title: 'Flawless performance from start to finish',
    category: 'Production',
    items: [
      'Virtual Art Department',
      'Previsualization',
      'Optimization',
      'Technical direction',
      'OSVP',
    ],
    image: studioA,
    link: 'contact',
  },
  {
    id: '02 / STAGES',
    title: 'Your vision, our stage.',
    category: 'Largest-C-Screen in GCC',
    items: [
      'Massive 180° Curved LED Wall Instant Live Streaming Transport your audience anywhere in stunning 4K',
    ],
    image:
      studioAGrid,
    link: 'studios',
  },
  {
    id: '03 / WORKFLOW',
    title: 'Accelerted pipeline.',
    category: '',
    items: [
      'A revolutionary proprietary pipeline for Web3 Productions, a seamless pipeline that integrates the most advanced technology, taking assets from concept to delivery.',
      'At Web3 Productions, creative minds can seamlessly collaborate and bring their artistic visions to life using powerful, next-gen tools.',
    ],
    image:
      studioControl,
    link: 'offer',
  },
];