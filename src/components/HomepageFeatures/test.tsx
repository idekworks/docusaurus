import React, { useEffect, useRef } from 'react';
import styles from './index.module.css';

function Feature({ title, description }) {
  return (
    <div className="text--center padding-horiz--md">
      title
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const animBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-animated');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (animBoxRef.current) {
      observer.observe(animBoxRef.current);
    }

    return () => {
      if (animBoxRef.current) {
        observer.unobserve(animBoxRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
            test
        </div>
        <div ref={animBoxRef} className='anim-box slidein is-animated'>
          Google Cloud Architecture Associate
        </div>
      </div>
    </section>
  );
}