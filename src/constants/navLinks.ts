export type NavLink = {
  label: string;
  id: string;
};

export const navLinks: NavLink[] = [
  { label: 'Home', id: '/' },
  { label: 'Works', id: '#works' },
  { label: 'Services', id: '#services' },
  { label: 'About', id: '#about' },
  { label: 'Contact', id: '#contact' }
];