'use client';

import Link from 'next/link';
import { Calculator, BookOpen, Headphones, ArrowRight } from 'lucide-react';
import styles from './FreeToolsSection.module.css';

const tools = [
  {
    icon: Calculator,
    title: 'IELTS Band Calculator',
    titleBn: 'ব্যান্ড স্কোর ক্যালকুলেটর',
    desc: 'আপনার প্রতিটি সেকশনের নম্বর দিন Overall Band Score বের করুন',
    href: '/band-calculator',
    color: '#6C3CE1',
    bgColor: '#F3EDFF',
    score: '7.5',
    scoreLabel: 'Good User',
  },
  {
    icon: BookOpen,
    title: 'Word of the Day',
    titleBn: 'আজকের শব্দ',
    desc: 'প্রতিদিন নতুন একটি IELTS শব্দ শিখুন',
    href: '/word-of-the-day',
    color: '#3B82F6',
    bgColor: '#EFF6FF',
    word: 'Ambitious',
  },
  {
    icon: Headphones,
    title: 'Free Listening Mock Test',
    titleBn: 'ফ্রি লিসেনিং মক টেস্ট',
    desc: 'Listen to a Listening Test, answer questions প্র্যাক্টিস করুন',
    href: '/mock-tests',
    color: '#F97316',
    bgColor: '#FFF7ED',
  },
];

export default function FreeToolsSection() {
  return (
    <section className={`section ${styles.toolsSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={`section-title font-bn`}>ফ্রি টুলস ও রিসোর্স</h2>
          <p className={`section-subtitle font-bn`}>
            আপনার প্রস্তুতির প্রতিটি ধাপে সাহায্য ও সার্বিক সব টুলস
          </p>
        </div>

        <div className={styles.toolsGrid}>
          {tools.map((tool, index) => (
            <Link href={tool.href} key={index} className={styles.toolCard}>
              <div className={styles.toolIconWrapper} style={{ background: tool.bgColor }}>
                <tool.icon size={28} style={{ color: tool.color }} />
              </div>
              <div className={styles.toolContent}>
                <h3 className={styles.toolTitle}>{tool.title}</h3>
                <p className={`${styles.toolTitleBn} font-bn`}>{tool.titleBn}</p>
                <p className={`${styles.toolDesc} font-bn`}>{tool.desc}</p>
              </div>
              {tool.score && (
                <div className={styles.scoreBadge}>
                  <span className={styles.scoreBadgeValue}>{tool.score}</span>
                  <span className={styles.scoreBadgeLabel}>{tool.scoreLabel}</span>
                </div>
              )}
              {tool.word && (
                <div className={styles.wordBadge}>
                  <span className={styles.wordBadgeValue}>{tool.word}</span>
                </div>
              )}
              <div className={styles.toolArrow}>
                <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
