'use client';

import Link from 'next/link';
import { BookOpen, Play, Download, PenTool, Trophy, ArrowRight } from 'lucide-react';
import styles from './FeaturedContentSection.module.css';

const featuredItems = [
  {
    title: 'Free Reading Mock Test',
    titleBn: 'ফ্রি রিডিং মক টেস্ট',
    desc: 'Reading মডিউল নিয়ে নিজেকে যাচাই করুন বিস্তারিত প্র্যাক্টিস টেস্টে',
    icon: BookOpen,
    tag: 'প্র্যাক্টিস টেস্ট',
    tagColor: '#3B82F6',
    duration: '20 min',
    href: '/practice/reading',
    color: '#3B82F6',
  },
  {
    title: 'Mini IELTS Video Lessons',
    titleBn: 'মিনি আইএলটিএস ভিডিও লেসন',
    desc: 'এই মিনি ভিডিও লেসন দেখুন এবং আপনার প্রস্তুতি শুরু করুন',
    icon: Play,
    tag: 'ভিডিও লেসন',
    tagColor: '#EF4444',
    href: '/courses',
    color: '#EF4444',
  },
  {
    title: 'IELTS Study Kit',
    titleBn: 'আইএলটিএস স্টাডি কিট',
    desc: 'PDF eBooks, টিপস এবং আরো অনেক কিছু একসাথে ডাউনলোড করুন',
    icon: Download,
    tag: 'ফ্রি ডাউনলোড',
    tagColor: '#22C55E',
    href: '/free-resources',
    color: '#22C55E',
  },
  {
    title: 'Writing Task 2 Templates',
    titleBn: 'রাইটিং টাস্ক ২ টেমপ্লেট',
    desc: 'পরীক্ষায় সরাসরি ব্যবহারযোগ্য টেমপ্লেট কালেকশন ফ্রিতে নিন',
    icon: PenTool,
    tag: 'টেমপ্লেট',
    tagColor: '#F97316',
    href: '/free-resources',
    color: '#F97316',
  },
  {
    title: 'Weekly Challenge',
    titleBn: 'সাপ্তাহিক চ্যালেঞ্জ',
    desc: 'প্রতি সপ্তাহে নতুন চ্যালেঞ্জ গ্রহণ করুন Mock Test দিয়ে প্র্যাক্টিস করুন',
    icon: Trophy,
    tag: 'চ্যালেঞ্জ',
    tagColor: '#F59E0B',
    href: '/mock-tests',
    color: '#F59E0B',
  },
];

export default function FeaturedContentSection() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.grid}>
          {/* Large cards - top row */}
          <div className={styles.topRow}>
            {featuredItems.slice(0, 2).map((item, index) => (
              <Link href={item.href} key={index} className={styles.cardLarge}>
                <div className={styles.cardImageArea} style={{ background: `linear-gradient(135deg, ${item.color}15, ${item.color}08)` }}>
                  <item.icon size={48} style={{ color: item.color }} />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardTag} style={{ color: item.tagColor, background: `${item.tagColor}12` }}>
                    {item.tag}
                  </span>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={`${styles.cardDesc} font-bn`}>{item.desc}</p>
                  {item.duration && (
                    <span className={styles.duration}>{item.duration}</span>
                  )}
                </div>
                <div className={styles.cardArrow}>
                  <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>

          {/* Smaller cards - bottom row */}
          <div className={styles.bottomRow}>
            {featuredItems.slice(2).map((item, index) => (
              <Link href={item.href} key={index} className={styles.cardSmall}>
                <div className={styles.smallIcon} style={{ background: `${item.color}12`, color: item.color }}>
                  <item.icon size={24} />
                </div>
                <div className={styles.smallContent}>
                  <span className={styles.cardTag} style={{ color: item.tagColor, background: `${item.tagColor}12` }}>
                    {item.tag}
                  </span>
                  <h3 className={styles.smallTitle}>{item.title}</h3>
                  <p className={`${styles.smallDesc} font-bn`}>{item.desc}</p>
                </div>
                <ArrowRight size={16} className={styles.smallArrow} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
