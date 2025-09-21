import React from 'react';

interface NavbarProps {
   links?: { name: string; href: string }[];
}

const defaultLinks = [
   { name: 'Home', href: '/' },
   { name: 'About', href: '/about' },
   { name: 'Projects', href: '/projects' },
   { name: 'Contact', href: '/contact' },
];

const Navbar: React.FC<NavbarProps> = ({ links = defaultLinks }) => {
   return (
      <nav style={styles.nav}>
         <div style={styles.logo}>Dev DAVID EMMANUEL</div>
         <ul style={styles.ul}>
            {links.map((link) => (
               <li key={link.name} style={styles.li}>
                  <a href={link.href} style={styles.a}>
                     {link.name}
                  </a>
               </li>
            ))}
         </ul>
      </nav>
   );
};

const styles: { [key: string]: React.CSSProperties } = {
   nav: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      background: '#222',
      color: '#fff',
   },
   logo: {
      fontWeight: 'bold',
      fontSize: '1.5rem',
   },
   ul: {
      listStyle: 'none',
      display: 'flex',
      margin: 0,
      padding: 0,
      gap: '1.5rem',
   },
   li: {},
   a: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: '1rem',
      transition: 'color 0.2s',
   },
};

export default Navbar;