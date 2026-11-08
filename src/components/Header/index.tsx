'use client';

import { useState } from 'react';

const navigation = [
  { label: 'Profile', href: '#profile' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Recognition', href: '#recognition' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='site-header'>
      <div className='header-inner'>
        <a
          className='brand'
          href='#top'
          aria-label='Ricardo Rosario, home'
          onClick={() => setMenuOpen(false)}
        >
          <span className='brand-mark'>
            <span>{'{'}{'}'}</span>
          </span>
          <span className='brand-name'></span>
        </a>

        <button
          className={`menu-toggle${menuOpen ? 'is-open' : ''}`}
          type='button'
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls='primary-navigation'
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          className={`primary-navigation${menuOpen ? 'is-open' : ''}`}
          id='primary-navigation'
          aria-label='Main navigation'
        >
          {navigation.map((item, index) => (
            <a
              href={item.href}
              key={item.href}
              onClick={() => setMenuOpen(false)}
            >
              <span className='nav-index'>0{index + 1}</span>
              {item.label}
            </a>
          ))}
          <a
            className='nav-contact'
            href='#contact'
            onClick={() => setMenuOpen(false)}
          >
            Let&apos;s talk <span aria-hidden='true'>↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
