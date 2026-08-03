'use client';

import Link from 'next/link';
import { ArrowRight, Users } from 'lucide-react';
import styles from './CTABanner.module.css';

export default function CTABanner() {
  return (
    <section className={styles.ctaBanner}>
      <div className={`container ${styles.ctaContent}`}>
        <div className={styles.ctaLeft}>
          <h2 className={`${styles.ctaTitle} font-bn`}>
            আজই শুরু করুন আপনার IELTS জার্নি!
          </h2>
          <p className={`${styles.ctaDesc} font-bn`}>
            হাজারো শিক্ষার্থীর সাথে আপনিও সেরা প্রস্তুতি নিন!
          </p>
        </div>
        <div className={styles.ctaRight}>
          <div className={styles.ctaStats}>
            <Users size={20} />
            <div>
              <span className={styles.ctaStatsValue}>10,000+</span>
              <span className={styles.ctaStatsLabel}>Active Learners</span>
            </div>
          </div>
          <Link href="/register" className={styles.ctaButton}>
            <span className="font-bn">ফ্রি-তে শুরু করুন</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
