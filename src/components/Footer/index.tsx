const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/ricardoarosario',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ricardo-rosario',
  },
  {
    label: 'Credly',
    href: 'https://www.credly.com/users/ricardo-rosario.479aa3fc',
  },
];

export default function Footer() {
  return (
    <footer className='site-footer'>
      <div className='footer-inner' data-reveal>
        <a className='brand footer-brand' href='#top'>
          <span className='brand-mark'>
            <span>"{}"</span>
          </span>
          <span className='brand-name'>RICARDO ROSARIO</span>
        </a>

        <p className='footer-note'>
          Certified developer. Army veteran. Always learning.
        </p>

        <div className='footer-links' aria-label='Professional profiles'>
          {socialLinks.map((link) => (
            <a
              href={link.href}
              key={link.label}
              target='_blank'
              rel='noreferrer'
            >
              {link.label} <span aria-hidden='true'>↗</span>
            </a>
          ))}
          <a href='mailto:ricardo.a2046@gmail.com'>
            Email <span aria-hidden='true'>↗</span>
          </a>
        </div>

        <p className='footer-copyright'>© 2026 Ricardo A. Rosario Garcia</p>
      </div>
    </footer>
  );
}
