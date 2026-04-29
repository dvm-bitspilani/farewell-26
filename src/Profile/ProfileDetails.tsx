import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import styles from './ProfileDetails.module.scss';
import type { VerticalData, Person } from '../data/people';

interface ProfileDetailsProps {
  vertical: VerticalData;
  onBack: () => void;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ vertical, onBack }) => {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * vertical.people.length);
    setSelectedPerson(vertical.people[randomIndex]);
  }, [vertical]);

  useLayoutEffect(() => {
    if (!selectedPerson) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(`.${styles.heroSection}`, { opacity: 0, duration: 1 })
        .from(`.${styles.heroContent} h1`, { y: 50, opacity: 0, duration: 0.8 }, '-=0.5')
        .from(`.${styles.actions}`, { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
        .from(`.${styles.mainContent}`, { opacity: 0, y: 50, duration: 0.8 }, '-=0.4')
        .from(`.${styles.sidebar}`, { opacity: 0, x: 50, duration: 0.8 }, '-=0.8');
    }, containerRef);
    return () => ctx.revert();
  }, [selectedPerson]);

  if (!selectedPerson) return null;

  return (
    <div className={styles.modalOverlay} onClick={onBack}>
      <div className={styles.pageWrapper} ref={containerRef} style={{ '--accent-color': vertical.color } as React.CSSProperties} onClick={(e) => e.stopPropagation()}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay} />
        <img src={selectedPerson.img} alt={selectedPerson.name} className={styles.heroBg} />
        
        <button className={styles.backButton} onClick={onBack}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>

        <div className={styles.heroContent}>
          <h1 className={styles.heroName}>{selectedPerson.name}</h1>
          
          <div className={styles.progressContainer}>
            <div className={styles.progressBar}><div className={styles.progressFill} /></div>
            <span className={styles.progressText}>22 of 22m</span>
          </div>

          <div className={styles.actions}>
            <button className={styles.resumeBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Resume
            </button>
            <button className={styles.iconBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            </button>
            <button className={styles.iconBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
            </button>
            
            <div className={styles.rightActions}>
              <button className={styles.iconBtn}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
              </button>
              <div className={styles.maturityRating}>A</div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <div className={styles.contentLayout}>
        <div className={styles.mainContent}>
          <div className={styles.metaRow}>
            <span className={styles.seasons}>{vertical.seasons}</span>
            <span className={styles.year}>{vertical.year}</span>
            <span className={styles.badge}>HD</span>
            <span className={styles.badge}>AD)))</span>
          </div>
          
          <div className={styles.ratingBox}>
            <span className={styles.ratingBadge}>TV-MA</span>
            <span className={styles.ratingText}>vaping, violence, alcohol</span>
          </div>

          <div className={styles.top10}>
            <div className={styles.top10Badge}>TOP 10</div>
            <span>#1 CostAAn 24-25</span>
          </div>

          <p className={styles.description}>{selectedPerson.description}</p>

          <section className={styles.moreLikeThis}>
            <h2>More Like This</h2>
            <div className={styles.cardsGrid}>
              {[1, 2, 3].map((i) => (
                <div key={i} className={styles.card} onClick={() => {
                  const nextPerson = vertical.people[i % vertical.people.length];
                  setSelectedPerson(nextPerson);
                }}>
                  <div className={styles.cardBadge}>D</div>
                  <img src={`/img/youWillAlsoLike${i === 1 ? '' : i === 2 ? '1' : '3'}.png`} alt="Recommendation" />
                  <div className={styles.cardOverlay}>
                    <span>{vertical.people[i % vertical.people.length].name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sidebarItem}>
            <span className={styles.label}>Cast:</span>
            <span className={styles.value}>{vertical.cast.join(', ')}</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.label}>Genres:</span>
            <span className={styles.value}>{vertical.genres.join(', ')}</span>
          </div>
          <div className={styles.sidebarItem}>
            <span className={styles.label}>This guy is:</span>
            <span className={styles.value}>{selectedPerson.traits.join(', ')}</span>
          </div>
        </aside>
      </div>
    </div>
  </div>
  );
};

export default ProfileDetails;
