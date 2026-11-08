import ScrollReveal from '@/components/ScrollReveal';
import Image from 'next/image';
import portrait from '@/assets/Professional Corporate Picture.png';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Responsive design',
  'DOM manipulation',
  'React',
  'Technical documentation',
  'Procedural compliance',
  'Training & development',
];

const projects = [
  {
    number: '01',
    name: 'Vintage Barber Shop',
    type: 'Interactive business website',
    description:
      'A responsive, multi-section storefront with dynamic service cards, an appointment calendar, and browser-based booking interactions.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    href: 'https://github.com/ricardoarosario/Barbershop-Website',
    mark: 'BB',
    color: 'cyan',
  },
  {
    number: '02',
    name: 'The Beans Place',
    type: 'React coffee-shop landing page',
    description:
      'A component-based storefront built during ReactJS coursework, practicing reusable UI, JSX, hooks, and responsive layouts.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    href: 'https://github.com/ricardoarosario/BeansRepo',
    mark: 'BEANS',
    color: 'gray',
  },
  {
    number: '03',
    name: 'JavaScript Practice',
    type: 'Interactive calculator',
    description:
      'A focused exercise using HTML, CSS, and JavaScript to build a simple, working calculator.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://github.com/ricardoarosario/JavaScript-Practice',
    mark: '01 + 01',
    color: 'light',
  },
];

const experience = [
  {
    date: 'SEP 2020 — PRESENT',
    role: 'Security Guard · GS-0085-06',
    organization: 'Department of the Army',
    location: 'Fort Buchanan, Puerto Rico',
    details: [
      'Carry out mission-critical responsibilities in a regulated environment where accuracy, reliability, confidentiality, and procedure matter.',
      'Prepare detailed operational reports and share accurate information for follow-up.',
      'Identify irregularities, assess situations, and escalate concerns through established channels.',
      'Coordinate with supervisors and partner organizations, and train new personnel on procedures.',
      'Maintain accountability for government equipment and sensitive resources.',
    ],
  },
  {
    date: 'JUL 2018 — DEC 2021',
    role: 'Military Police · 31B',
    organization: 'U.S. Army Reserve',
    location: 'Fort Buchanan, Puerto Rico',
    details: [
      'Supported operations with disciplined reporting, situational awareness, and clear team communication.',
      'Maintained mission-essential equipment and documented deficiencies during operational and emergency-response activities.',
    ],
  },
  {
    date: 'FEB 2014 — JUN 2017',
    role: 'Infantryman · 11B',
    organization: 'U.S. Army · Active Duty',
    location: 'Joint Base Lewis-McChord, Washington',
    details: [
      'Worked in high-tempo teams where adaptability, problem solving, and consistent execution were essential.',
      'Operated tactical radio systems and maintained accountability of sensitive equipment and high-value assets.',
      'Inspected equipment, identified deficiencies, and helped maintain operational readiness.',
    ],
  },
];

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className='section-heading'>
      <p className='eyebrow' data-reveal>
        <span className='eyebrow-index'>{index}</span>
        {eyebrow}
      </p>
      <h2 className='section-title' data-reveal data-reveal-delay='1'>
        {title}
      </h2>
      <p className='section-description' data-reveal data-reveal-delay='2'>
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <ScrollReveal>
      <main id='top'>
        <section className='hero-section page-gutter'>
          <div className='hero-grid'>
            <div className='hero-copy'>
              <p className='eyebrow' data-reveal>
                <span className='status-dot' aria-hidden='true' />
                AVAILABLE FOR A CAREER TRANSITION
              </p>

              <h1 className='hero-title' data-reveal data-reveal-delay='1'>
                Ricardo
                <br />
                <span>Rosario</span>
              </h1>

              <p className='hero-role' data-reveal data-reveal-delay='2'>
                Certified <span>HTML/CSS |</span> &amp;{' '}
                <span> JavaScript |</span>
                <span> ReactJS Developer</span>
              </p>

              <p className='hero-summary' data-reveal data-reveal-delay='3'>
                I bring a mission-first mindset, six years of experience in
                high-accountability environments, and a growing front-end
                practice to every team I join.
              </p>

              <div className='hero-actions' data-reveal data-reveal-delay='4'>
                <a className='button button-primary' href='#projects'>
                  Explore my projects
                  <span aria-hidden='true'>↘</span>
                </a>
                <a
                  className='button button-quiet'
                  href='mailto:ricardo.a2046@gmail.com'
                >
                  Get in touch
                  <span aria-hidden='true'>↗</span>
                </a>
              </div>

              <div className='hero-meta' data-reveal data-reveal-delay='5'>
                <span>PUERTO RICO</span>
                <span className='meta-divider' aria-hidden='true' />
                <span>U.S. ARMY VETERAN</span>
              </div>
            </div>

            <div className='hero-portrait' data-reveal data-reveal-delay='2'>
              <div className='portrait-frame'>
                <Image
                  src={portrait}
                  alt='Portrait of Ricardo Rosario'
                  fill
                  priority
                  sizes='(max-width: 760px) 82vw, 38vw'
                  className='portrait-image'
                />
                <span className='portrait-coordinate'>PUERTO RICO</span>
                <span className='portrait-scanline' aria-hidden='true' />
              </div>
              <div className='portrait-caption'>
                <div>
                  <span className='caption-label'>CURRENT MODE</span>
                  <strong>Building what&apos;s next.</strong>
                </div>
                <span className='portrait-status'>
                  <span className='status-dot' aria-hidden='true' />
                  OPEN TO OPPORTUNITY
                </span>
              </div>
            </div>
          </div>

          <a className='scroll-cue' href='#profile' data-reveal>
            <span className='scroll-line' aria-hidden='true' />
            SCROLL TO EXPLORE
          </a>
        </section>

        <section className='content-section page-gutter' id='profile'>
          <div className='content-grid'>
            <SectionHeading
              index='01'
              eyebrow='THE PROFILE'
              title='A steady hand. A curious mind.'
              description='My work has always been about understanding the details, following through, and making the whole team stronger.'
            />

            <div className='profile-copy'>
              <p data-reveal>
                I&apos;m a certified HTML/CSS and JavaScript developer, U.S.
                Army veteran, and Department of the Army security professional.
                I&apos;m now bringing the same care I&apos;ve built over years
                of service into front-end development.
              </p>
              <p data-reveal data-reveal-delay='1'>
                Clear documentation, thoughtful collaboration, and dependable
                execution have been part of my day-to-day for years. I&apos;m
                ready to put those strengths to work building useful, responsive
                web experiences.
              </p>

              <a
                className='text-link'
                href='https://www.linkedin.com/in/ricardo-rosario'
                target='_blank'
                rel='noreferrer'
                data-reveal
                data-reveal-delay='2'
              >
                More about my journey <span aria-hidden='true'>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section
          className='content-section skills-section page-gutter'
          id='skills'
        >
          <div className='section-inner'>
            <SectionHeading
              index='02'
              eyebrow='TOOLKIT'
              title='Learning by building.'
              description='A foundation in core web technologies, strengthened by hands-on practice and a habit of learning the details.'
            />

            <div className='skill-grid'>
              {skills.map((skill, index) => (
                <div
                  className='skill-card'
                  key={skill}
                  data-reveal
                  data-reveal-delay={index % 3}
                >
                  <span className='skill-mark' aria-hidden='true'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>

            <div className='certification-row'>
              <div className='certification-card' data-reveal>
                <span className='cert-icon' aria-hidden='true'>
                  &lt;/&gt;
                </span>
                <span>
                  <strong>HTML / CSS</strong>
                  <small>Certified · Responsive web fundamentals</small>
                </span>
                <span className='cert-check' aria-label='Certified'>
                  VERIFIED
                </span>
              </div>
              <div
                className='certification-card'
                data-reveal
                data-reveal-delay='1'
              >
                <span className='cert-icon' aria-hidden='true'>
                  JS
                </span>
                <span>
                  <strong>JavaScript</strong>
                  <small>Certified · Core programming fundamentals</small>
                </span>
                <span className='cert-check' aria-label='Certified'>
                  VERIFIED
                </span>
              </div>
              <a
                className='text-link cert-link'
                href='https://www.credly.com/users/ricardo-rosario.479aa3fc'
                target='_blank'
                rel='noreferrer'
                data-reveal
              >
                View credentials <span aria-hidden='true'>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className='content-section page-gutter' id='projects'>
          <div className='section-inner'>
            <SectionHeading
              index='03'
              eyebrow='SELECTED WORK'
              title='Small builds. Real practice.'
              description='Coursework and practice projects where I put front-end concepts into action. Explore the code and project notes on GitHub.'
            />

            <div className='project-grid'>
              {projects.map((project, index) => (
                <article
                  className={`project-card project-card-${project.color}`}
                  key={project.number}
                  data-reveal
                  data-reveal-delay={index}
                >
                  <div className='project-visual' aria-hidden='true'>
                    <span className='project-visual-index'>
                      PROJECT_{project.number}
                    </span>
                    <span className='project-visual-mark'>{project.mark}</span>
                    <span className='project-visual-corner'>↗</span>
                    <span className='project-visual-grid' />
                  </div>

                  <div className='project-details'>
                    <p className='project-type'>{project.type}</p>
                    <h3>{project.name}</h3>
                    <p className='project-description'>{project.description}</p>
                    <div className='tag-list'>
                      {project.stack.map((item) => (
                        <span className='tech-tag' key={item}>
                          {item}
                        </span>
                      ))}
                    </div>
                    <a
                      className='text-link'
                      href={project.href}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={`View ${project.name} source on GitHub`}
                    >
                      View source <span aria-hidden='true'>↗</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className='content-section experience-section page-gutter'
          id='experience'
        >
          <div className='experience-layout'>
            <SectionHeading
              index='04'
              eyebrow='EXPERIENCE'
              title='Built under pressure. Grounded in purpose.'
              description='More than a decade of military and public service shaped how I communicate, adapt, and deliver.'
            />

            <div className='timeline'>
              {experience.map((item, index) => (
                <article
                  className='timeline-entry'
                  key={item.role}
                  data-reveal
                  data-reveal-delay={index}
                >
                  <div className='timeline-marker' aria-hidden='true'>
                    <span />
                  </div>
                  <div className='timeline-content'>
                    <p className='timeline-date'>{item.date}</p>
                    <h3>{item.role}</h3>
                    <p className='timeline-organization'>{item.organization}</p>
                    <p className='timeline-location'>{item.location}</p>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className='recognition-section page-gutter' id='recognition'>
          <div className='recognition-inner'>
            <div className='recognition-heading'>
              <p className='eyebrow' data-reveal>
                <span className='eyebrow-index'>05</span>
                RECOGNITION &amp; EDUCATION
              </p>
              <h2 className='section-title' data-reveal data-reveal-delay='1'>
                Consistency counts.
              </h2>
            </div>
            <div className='recognition-grid'>
              <article className='recognition-card' data-reveal>
                <span className='recognition-year'>2026</span>
                <div>
                  <h3>Outstanding Performance</h3>
                  <p>Annual Performance Appraisal · Department of the Army</p>
                </div>
                <span className='recognition-symbol' aria-hidden='true'>
                  +
                </span>
              </article>
              <article
                className='recognition-card'
                data-reveal
                data-reveal-delay='1'
              >
                <span className='recognition-year'>2025</span>
                <div>
                  <h3>Cash Performance Award</h3>
                  <p>Recognized for mission support and performance.</p>
                </div>
                <span className='recognition-symbol' aria-hidden='true'>
                  +
                </span>
              </article>
              <article
                className='recognition-card education-card'
                data-reveal
                data-reveal-delay='2'
              >
                <span className='recognition-year'>2013</span>
                <div>
                  <h3>High School Diploma</h3>
                  <p>Education</p>
                </div>
                <span className='recognition-symbol' aria-hidden='true'>
                  +
                </span>
              </article>
            </div>
          </div>
        </section>

        <section className='contact-section page-gutter' id='contact'>
          <div className='contact-panel'>
            <div className='contact-decoration' aria-hidden='true'>
              <span />
              <span />
              <span />
            </div>
            <p className='eyebrow' data-reveal>
              <span className='status-dot' aria-hidden='true' />
              OPEN TO WHAT&apos;S NEXT
            </p>
            <h2 data-reveal data-reveal-delay='1'>
              Let&apos;s build
              <br />
              <span>something useful.</span>
            </h2>
            <p className='contact-copy' data-reveal data-reveal-delay='2'>
              I&apos;m looking for an opportunity to grow as a developer and
              contribute with care, curiosity, and follow-through.
            </p>
            <a
              className='button button-primary'
              href='mailto:ricardo.a2046@gmail.com'
              data-reveal
              data-reveal-delay='3'
            >
              ricardo.a2046@gmail.com
              <span aria-hidden='true'>↗</span>
            </a>
          </div>
        </section>
      </main>
    </ScrollReveal>
  );
}
