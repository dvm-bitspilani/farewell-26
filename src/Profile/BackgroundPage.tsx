import React from 'react';
import styles from './BackgroundPage.module.scss';

const BackgroundPage: React.FC = () => {
  return (
    <div className={styles.bgWrapper}>
      <img src="/img/backgroundTop.png" className={styles.fullTopBg} alt="" />
      
      <header className={styles.header}>
        <div className={styles.logo}>DVM</div>
        <div className={styles.navRight}>
          <div className={styles.categoryDropdown}>
            <img src="/svg/ae-icon.svg" alt="Category" />
            <span>Video</span>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M7 10l5 5 5-5z"/></svg>
          </div>
        </div>
      </header>

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
            <div className={styles.thumb}><img src="/img/bgTb3.jpg" alt="Apogee 22" /></div>
            <div className={styles.thumb}><img src="/img/bgTb5.png" alt="Apogee 23" /></div>
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
