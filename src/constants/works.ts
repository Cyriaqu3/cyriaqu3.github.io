import { mdiGithub, mdiLink } from '@mdi/js';
import IWork from '../interfaces/Work.interface';

/**
 * Works list
 *
 * Put the most recent in the bottom
 */
const works: IWork[] = [
  {
    id: 'carnelian',
    name: 'Carnelian',
    description: 'Automation and userscripts for desktop',
    backgrounds: {
      image: {
        url: '/images/work/carnelian.png',
      },
    },
  },
  {
    id: 'steam-scanner',
    name: 'Steam Scanner',
    description: 'An utility that add you games from other launchers on Steam ',
    backgrounds: {
      image: {
        url: '/images/work/steam-scanner.png',
      },
    },
  },

  {
    id: 'video-cutter',
    name: 'Video Cutter',
    description: 'An online utility for cutting video files',
    links: [
      {
        iconPath: mdiLink,
        label: 'video-cutter.tools',
        url: 'https://video-cutter.tools/',
      },
    ],
    backgrounds: {
      image: { url: '/images/work/video-cutter.png' },
    },
  },
  {
    id: 'atom',
    name: 'ATOM',
    description: 'Game made in 48h for the 48th Ludum Dare',
    backgrounds: {
      image: { url: '/images/atom/atom.png' },
    },
    links: [
      {
        iconPath: mdiLink,
        label: 'Ludum Dare entry page',
        url: 'https://ldjam.com/events/ludum-dare/48/atom',
      },
    ],
  },
  {
    id: 'tagifier',
    name: 'Tagifier',
    description: 'A metadata editor for Mp3 files',
    backgrounds: {
      image: { url: '/images/tagifier/tagifier.png' },
    },
    links: [
      {
        iconPath: mdiGithub,
        label: 'Sources and Download',
        url: 'https://github.com/Ciriak/Tagifier',
      },
    ],
  },
  {
    id: 'codepen',
    name: 'My Codepen',
    description: 'A collection of small visual experiments',
    backgrounds: {
      image: { url: '/images/codepen/codepen.png' },
    },
    links: [
      {
        iconPath: mdiLink,
        label: 'Link',
        url: 'https://codepen.io/Ciriak/pens/showcase',
      },
    ],
  },
  {
    id: 'missing_entry',
    name: 'Missing Entry',
    description: 'A "story where you are the hero" game made for the 45th Ludum Dare',
    backgrounds: {
      image: { url: '/images/ld45/ld45.jpg' },
    },
  },
  {
    id: 'neon-rush',
    name: 'Neon Rush',
    description: 'A platformer game made in 48h for the 47th Ludum Dare',
    backgrounds: {
      image: { url: '/images/neon/neon.png' },
    },
    links: [
      {
        iconPath: mdiLink,
        label: 'Link',
        url: 'https://ldjam.com/events/ludum-dare/47/neon-rush',
      },
    ],
  },

  {
    id: 'axio',
    name: 'Axio',
    description: 'Soon (maybe)',
    disabled: true,
    backgrounds: {
      image: {
        url: '/images/axio/axio.png',
      },
    },
  },
  {
    id: 'ld49',
    name: 'Unfinished game for the 49th Ludum Dare',
    description: 'Game project for the 49th Ludum dare (cancelled)',
    backgrounds: {
      image: {
        url: '/images/work/ld49.png',
      },
    },
  },
  {
    id: 'remote-and-unexplored',
    name: 'Remote and Unexplored',
    description: 'A project of fan-made soundtrack for the game Factorio (in progress)',
    backgrounds: {
      image: {
        url: '/images/remote-and-unexplored/remote-and-unexplored.png',
      },
    },
  },

  {
    id: 'about',
    name: 'About my work',
    description: 'My journey into development and more',
    hidden: true,
    backgrounds: {
      image: {
        url: '/images/work/development.jpg',
      },
    },
  },
];

export default works;
