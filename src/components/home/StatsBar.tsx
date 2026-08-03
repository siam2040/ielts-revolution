'use client';

import { Users, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';
import styles from './StatsBar.module.css';

const stats = [
  { icon: Users, value: '10,000+', label: 'শিক্ষার্থী', labelEn: 'Students' },
  { icon: BookOpen, value: '250+', label: 'রিসোর্স', labelEn: 'Resources' },
  { icon: Lightbulb, value: '50+', label: 'এক্সপার্ট টিপস', labelEn: 'Expert Tips' },
  { icon: TrendingUp, value: '95%', label: 'সফলতা', labelEn: 'Success Rate' },
];

export default function StatsBar() {
  return (
    <section className={styles.statsBar}>
      <div className={`container ${styles.statsContent}`}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <div className={styles.statIcon}>
              <stat.icon size={24} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={`${styles.statLabel} font-bn`}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
