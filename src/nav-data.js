const navItems = [
  {
    text: 'INSTRUMENTS',
    href: '/instruments',
    subnav: [
      { href: '/acoustic', text: 'Acoustic Guitars' },
      { href: '/electric', text: 'Electric Guitars' },
    ],
  },
  {
    text: 'COLLECTIONS',
    href: '/collections',
    subnav: [
      { href: '/notable-owners', text: 'Notable Owners' },
      { href: '/notable-makers', text: 'Notable Makers' },
    ],
  },
  {
    text: 'AUCTIONS',
    href: '/auctions',
    subnav: [
      { href: '/alpha', text: 'Alpha' },
      { href: '/bravo', text: 'Bravo' },
    ],
  },
  {
    text: 'LEGACIES',
    href: '/legacies',
    subnav: [
      { href: '/xray', text: 'Xray' },
      { href: '/yoyo', text: 'Yoyo' },
    ],
  },
  // ... more nav items
];

export default navItems;
