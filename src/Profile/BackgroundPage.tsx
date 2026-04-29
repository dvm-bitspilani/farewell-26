import React from 'react';
import styles from './BackgroundPage.module.scss';
import type { VerticalData } from '../data/people';

interface BackgroundPageProps {
  vertical: VerticalData;
}

const BackgroundPage: React.FC<BackgroundPageProps> = () => {
  return (
    <div className={styles.bgWrapper}>
      <img src="/img/backgroundTop.png" className={styles.fullTopBg} alt="" />
      
      <main className={styles.mainContent}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>DVM: Original</h1>
          <div className={styles.heroActions}>
            <button className={styles.playBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20"><path d="M8 5v14l11-7z"/></svg>
              Play
            </button>
            <button className={styles.infoBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
              More Info
            </button>
          </div>
        </div>

        <div className={styles.sideSections}>
          <div className={styles.leftSide}>
            <section className={styles.section}>
              <h3>Your Next Watch</h3>
              <div className={styles.thumb}><img src="/img/BgTb1.jpg" alt="Oasis 22" /></div>
            </section>
            <section className={styles.section}>
              <h3>You May Also Like</h3>
              <div className={styles.thumb}><img src="/img/bgTb2.png" alt="Oasis 23" /></div>
            </section>
          </div>

          <div className={styles.rightSide}>
            <section className={styles.section}>
              <h3>Recently Released</h3>
              <div className={styles.thumb}><img src="/img/bgTb3.jpg" alt="Apogee 22" /></div>
            </section>
            <section className={styles.section}>
              <h3>Trending Now</h3>
              <div className={styles.thumb}><img src="/img/bgTb5.png" alt="Apogee 23" /></div>
            </section>
          </div>
        </div>
      </main>
      
      <div className={styles.sideImages}>
        <img src="/img/backgroundTop.png" className={styles.leftBg} alt="" />
        <img src="/img/BgTb1.jpg" className={styles.rightBg} alt="" />
      </div>
    </div>
  );
};

export default BackgroundPage;
