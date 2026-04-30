import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './ProfileSelection.module.scss';

interface Profile {
  id: number;
  label: string;
  icon: string;
  color: string;
}

const profiles: Profile[] = [
  { id: 1, label: 'UI/UX', icon: '/svg/figma-icon.svg', color: '#a259ff' },
  { id: 2, label: 'Frontend', icon: '/svg/html-icon.svg', color: '#3fb984' },
  { id: 3, label: 'Backend', icon: '/svg/python-icon.svg', color: '#ff00a0' },
  { id: 4, label: 'Video', icon: '/svg/ae-icon.svg', color: '#001e36' },
  { id: 5, label: 'App Dev', icon: '/svg/react-icon.svg', color: '#61dafb' },
  { id: 6, label: 'Game Dev', icon: '/svg/game.png', color: '#ff4b2b' },
];

interface ProfileSelectionProps {
  onSelect: (id: number) => void;
}

const ProfileSelection: React.FC<ProfileSelectionProps> = ({ onSelect }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial state for cards and labels
      gsap.set(`.${styles['profile-card']}`, { opacity: 0, y: 20, scale: 0.9 });
      gsap.set(`.${styles['profile-label']}`, { opacity: 0 });

      // 2. Staggered animation for the boxes
      gsap.to(`.${styles['profile-card']}`, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1, // Each card starts 0.1s after the previous one
        ease: "back.out(1.7)", // Gives it a slight "pop" bounce
        onComplete: () => {
          // 3. Fade in labels once cards are settled
          gsap.to(`.${styles['profile-label']}`, {
            opacity: 1,
            duration: 0.4,
            stagger: 0.05
          });
        }
      });
      
      // 4. Subtle fade for title and button
      gsap.from([`.${styles.content} h1`, `.${styles['manage-button']}`], {
        opacity: 0,
        delay: 0.2,
        duration: 1,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <div className={styles['netflix-container']} ref={containerRef}>
      <div className={styles['background-overlay']} />
      
      <div className={styles.content}>
        <h1>Who's working?</h1>
        
        <div className={styles['profile-grid']}>
          {profiles.map((p) => (
            <div key={p.id} className={styles['profile-card']} onClick={() => onSelect(p.id)}>
              <div className={`${styles['icon-box']} ${p.icon.endsWith('.png') ? styles['png-icon'] : ''}`} >
                <img src={p.icon} alt={p.label} className={styles.ProfileImg} />
              </div>
              <span className={styles['profile-label']}>{p.label}</span>
            </div>
          ))}
        </div>

        <button className={styles['manage-button']}>MANAGE PROFILES</button>
      </div>
    </div>
  );
};

export default ProfileSelection;