'use client';

import Link from 'next/link';
import { ArrowRight, Star, BookOpen, Headphones, PenTool, Mic } from 'lucide-react';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.bgShape1} />
        <div className={styles.bgShape2} />
        <div className={styles.bgShape3} />
      </div>

      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroLeft}>
          <div className={styles.badge}>
            <Star size={14} fill="currentColor" />
            <span className="font-bn">আপনার লক্ষ্য Band 7+ একদম হাতে রাখা!</span>
          </div>

          <h1 className={`${styles.heroTitle} font-bn`}>
            IELTS জার্নি শুরু হোক{' '}
            <span className={styles.heroHighlight}>সঠিক দিকনির্দেশনায়!</span>
          </h1>

          <p className={`${styles.heroDesc} font-bn`}>
            দক্ষ শিক্ষকদের, প্র্যাক্টিস টেস্ট এবং স্মার্ট স্ট্র্যাটেজি দিয়ে
            IELTS-এ দক্ষতা অর্জন করুন Band 7 এর ঊর্ধ্বে পৌঁছান!
          </p>

          <div className={styles.heroCTAs}>
            <Link href="/register" className={styles.primaryCTA}>
              <span className="font-bn">ফ্রি-তে শুরু করুন</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/band-calculator" className={styles.secondaryCTA}>
              <span className="font-bn">আপনার Band টার্গেট করুন</span>
            </Link>
          </div>

          <div className={styles.heroFeatures}>
            <div className={styles.heroFeature}>
              <div className={styles.featureIcon}>
                <BookOpen size={16} />
              </div>
              <div>
                <span className={styles.featureTitle}>Expert-Led Courses</span>
                <span className={`${styles.featureDesc} font-bn`}>বিশেষজ্ঞদের তৈরি</span>
              </div>
            </div>
            <div className={styles.heroFeature}>
              <div className={styles.featureIcon}>
                <PenTool size={16} />
              </div>
              <div>
                <span className={styles.featureTitle}>Proven Strategies</span>
                <span className={`${styles.featureDesc} font-bn`}>পরীক্ষিত কৌশল ও টিপস</span>
              </div>
            </div>
            <div className={styles.heroFeature}>
              <div className={styles.featureIcon}>
                <Headphones size={16} />
              </div>
              <div>
                <span className={styles.featureTitle}>Flexible Learning</span>
                <span className={`${styles.featureDesc} font-bn`}>যখন খুশি, যেখানে খুশি</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.scoreCard}>
            <div className={styles.scoreHeader}>
              <span>Overall Band Score</span>
            </div>
            <div className={styles.scoreValue}>7.5</div>
            <div className={styles.scoreLabel}>Good User</div>
            <div className={styles.scoreBreakdown}>
              <div className={styles.scoreItem}>
                <Headphones size={14} />
                <span>Listening</span>
                <strong>8.0</strong>
              </div>
              <div className={styles.scoreItem}>
                <BookOpen size={14} />
                <span>Reading</span>
                <strong>7.5</strong>
              </div>
              <div className={styles.scoreItem}>
                <PenTool size={14} />
                <span>Writing</span>
                <strong>7.0</strong>
              </div>
              <div className={styles.scoreItem}>
                <Mic size={14} />
                <span>Speaking</span>
                <strong>7.5</strong>
              </div>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <div className={styles.heroImagePlaceholder}>
              <div className={styles.studentIllustration}>
                <div className={styles.studentBody} />
                <div className={styles.laptop} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
