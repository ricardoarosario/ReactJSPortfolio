import '@/styles/tailwind.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ParticlesBackground from '@/components/ui/particles-bg';
import { Plus_Jakarta_Sans } from 'next/font/google';
import type { Metadata } from 'next';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ricardo Rosario | Portfolio',
  description:
    'Certified HTML/CSS, JavaScript and ReactJS developer, U.S. Army veteran, and Department of the Army security professional based in Puerto Rico.',
  openGraph: {
    title: 'Ricardo Rosario | Front-End Developer',
    description:
      'Building useful, responsive web experiences with a mission-first mindset.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={plusJakarta.className}>
      <body>
        <div className='site-shell'>
          <ParticlesBackground />
          <a className='skip-link' href='#top'>
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
