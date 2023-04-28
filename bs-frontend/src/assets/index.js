import catEyes from './cat-eyes.png';
import catFace from './cat-face.png';
import catLips from './cat-lips.png';
import catTools from './cat-tools.png';

export { default as logo } from './bs-logo-1.png';
export { default as logoRounded } from './bs-logo-2.png';
export { default as bgVideo } from './beautyStore.mp4';
export { default as highlight1 } from './highlight-1.png';
export { default as highlight2 } from './highlight-2.png';
export { default as highlight3 } from './highlight-3.png';

export const categories = [
  {
    name: 'eyes',
    image: catEyes,
    desc: 'Eyes category',
    url: '/category/eyes',
  },
  {
    name: 'face',
    image: catFace,
    desc: 'Face category',
    url: '/category/face',
  },
  {
    name: 'lips',
    image: catLips,
    desc: 'Lips category',
    url: '/category/lips',
  },
  {
    name: 'tools',
    image: catTools,
    desc: 'Tools category',
    url: '/category/tools',
  },
];
