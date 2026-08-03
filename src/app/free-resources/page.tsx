'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Search, BookOpen, PenTool, Headphones, Mic, Calculator, BookMarked,
  FileText, Download, CheckCircle2, ArrowRight, Sparkles, Send, Play
} from 'lucide-react';
import styles from './FreeResources.module.css';

const categories = [
  { title: 'Reading', titleBn: 'রিডিং', desc: 'প্র্যাকটিস টেস্ট, টিপস ও স্ট্র্যাটেজি', count: '25+ রিসোর্স', icon: BookOpen, color: '#22C55E', href: '/practice/reading' },
  { title: 'Writing', titleBn: 'রাইটিং', desc: 'টাস্ক সমাধান, স্যাম্পল ও গাইড', count: '30+ রিসোর্স', icon: PenTool, color: '#F97316', href: '/practice/writing' },
  { title: 'Listening', titleBn: 'লিসেনিং', desc: 'অডিও প্র্যাকটিস, টিপস ও ট্রানস্ক্রিপ্ট', count: '20+ রিসোর্স', icon: Headphones, color: '#6C3CE1', href: '/practice/listening' },
  { title: 'Speaking', titleBn: 'স্পিকিং', desc: 'পার্ট ১, ২, ৩ গাইড ও নমুনা উত্তর', count: '20+ রিসোর্স', icon: Mic, color: '#EF4444', href: '/practice/speaking' },
  { title: 'Band Calculator', titleBn: 'ব্যান্ড ক্যালকুলেটর', desc: 'আপনার সম্ভাব্য ব্যান্ড স্কোর বের করুন', count: 'ক্যালকুলেট করুন →', icon: Calculator, color: '#3B82F6', href: '/band-calculator' },
  { title: 'Vocabulary', titleBn: 'ভোকেবুলারি', desc: 'শব্দার্থ, কুইজ ও Vocabulary Lists', count: '40+ রিসোর্স', icon: BookMarked, color: '#F59E0B', href: '/vocabulary' },
];

const popularResources = [
  {
    title: 'IELTS Writing Tips 2025',
    desc: 'Band 7+ পাওয়ার জন্য কার্যকরী Writing টিপস ও স্ট্র্যাটেজি',
    tag: 'PDF Guide',
    tagIcon: FileText,
    type: 'writing',
    color: '#F97316',
  },
  {
    title: 'Reading Practice Test 01',
    desc: 'Full-length Reading Test (Academic Module)',
    tag: '20 Questions',
    tagIcon: BookOpen,
    type: 'reading',
    color: '#22C55E',
  },
  {
    title: 'Speaking Part 2 Guide',
    desc: 'Cue Card নিয়ে কীভাবে কথা বলবেন — সম্পূর্ণ গাইড',
    tag: 'Step-by-Step',
    tagIcon: Sparkles,
    type: 'speaking',
    color: '#EF4444',
  },
  {
    title: 'Listening Test 05',
    desc: 'High quality Listening Practice with Audio & Transcripts',
    tag: '30 Questions',
    tagIcon: Headphones,
    type: 'listening',
    color: '#6C3CE1',
  },
  {
    title: 'IELTS Vocabulary List',
    desc: 'Topic ভিত্তিক গুরুত্বপূর্ণ শব্দ ও উচ্চারণসহ অর্থ',
    tag: '50+ Words',
    tagIcon: BookMarked,
    type: 'vocabulary',
    color: '#F59E0B',
  },
];

const quickTools = [
  { title: 'Band Calculator', desc: 'আপনার সম্ভাব্য ব্যান্ড স্কোর ক্যালকুলেট করুন', btnText: 'এখনই ক্যালকুলেট করুন →', icon: Calculator, href: '/band-calculator', color: '#6C3CE1' },
  { title: 'Word of the Day', desc: 'প্রতিদিন নতুন একটি IELTS শব্দ শিখুন', btnText: 'আজকের শব্দ দেখুন →', icon: Sparkles, href: '/word-of-the-day', color: '#22C55E' },
  { title: 'Mock Test', desc: 'ফ্রি মক টেস্ট দিয়ে নিজেকে পরীক্ষা করুন', btnText: 'সব টেস্ট দিন →', icon: BookOpen, href: '/mock-tests', color: '#F97316' },
  { title: 'Study Plan', desc: 'আপনার জন্য পারফেক্ট স্টাডি প্ল্যান তৈরি করুন', btnText: 'প্ল্যান তৈরি করুন →', icon: FileText, href: '/study-plan', color: '#3B82F6' },
];

export default function FreeResourcesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroLeft}>
              <div className={styles.topBadge}>
                <span>🎁 100% ফ্রি • সব IELTS লার্নারের জন্য</span>
              </div>
              <h1 className={`${styles.heroTitle} font-bn`}>
                আপনার IELTS প্রস্তুতির জন্য <br />
                <span className={styles.heroHighlight}>সেরা ফ্রি রিসোর্স একসাথে!</span>
              </h1>
              <p className={`${styles.heroDesc} font-bn`}>
                বিশেষজ্ঞদের তৈরি মানসম্পন্ন ফ্রি কনটেন্ট, প্র্যাকটিস টেস্ট, গাইড এবং টুলস দিয়ে আজই শুরু করুন আপনার Band 7+ যাত্রা।
              </p>

              {/* Search Box */}
              <div className={styles.searchBarBox}>
                <input
                  type="text"
                  placeholder="রিসোর্স খুঁজুন..."
                  className={`${styles.searchInput} font-bn`}
                />
                <select className={`${styles.filterSelect} font-bn`}>
                  <option value="all">সব ধরণের</option>
                  <option value="reading">Reading</option>
                  <option value="writing">Writing</option>
                  <option value="listening">Listening</option>
                  <option value="speaking">Speaking</option>
                </select>
                <button className={styles.searchSubmitBtn} aria-label="Search">
                  <Search size={20} />
                </button>
              </div>

              {/* Stats Pills */}
              <div className={styles.heroStatsRow}>
                <div className={styles.heroStatPill}>
                  <CheckCircle2 size={16} color="#6C3CE1" />
                  <span className="font-bn">১০০+ ফ্রি রিসোর্স (নিয়মিত আপডেট হয়)</span>
                </div>
                <div className={styles.heroStatPill}>
                  <CheckCircle2 size={16} color="#6C3CE1" />
                  <span className="font-bn">বিশেষজ্ঞদের তৈরি IELTS Professionals</span>
                </div>
                <div className={styles.heroStatPill}>
                  <CheckCircle2 size={16} color="#6C3CE1" />
                  <span className="font-bn">সম্পূর্ণ ফ্রি (কোনো লুকানো চার্জ নেই)</span>
                </div>
              </div>
            </div>

            {/* Hero Graphic */}
            <div className={styles.heroRightGraphic}>
              <div className={styles.laptopGraphic}>
                <div className={styles.screenInner}>
                  <span className={styles.freeResLabel}>FREE RESOURCES</span>
                  <div className={styles.miniIconsGrid}>
                    <span>📖</span><span>🎧</span><span>✍️</span><span>🎙️</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="section">
          <div className="container">
            <div className={styles.sectionHeaderCenter}>
              <h2 className={`${styles.sectionTitle} font-bn`}>রিসোর্স ব্রাউজ করুন</h2>
              <p className={`${styles.sectionSub} font-bn`}>আপনার প্রয়োজন অনুযায়ী রিসোর্স নির্বাচন করুন</p>
            </div>

            <div className={styles.catGrid}>
              {categories.map((c, i) => (
                <Link href={c.href} key={i} className={styles.catCard}>
                  <div className={styles.catIconBox} style={{ background: `${c.color}15`, color: c.color }}>
                    <c.icon size={28} />
                  </div>
                  <h3 className={styles.catTitle}>{c.title}</h3>
                  <p className={`${styles.catDesc} font-bn`}>{c.desc}</p>
                  <span className={`${styles.catCount} font-bn`} style={{ color: c.color }}>{c.count}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Resources Section */}
        <section className={`section ${styles.popularSection}`}>
          <div className="container">
            <div className={styles.sectionHeaderFlex}>
              <div>
                <h2 className={`${styles.sectionTitle} font-bn`}>জনপ্রিয় ফ্রি রিসোর্স</h2>
                <p className={`${styles.sectionSub} font-bn`}>আমাদের শিক্ষার্থীদের মধ্যে সবচেয়ে বেশি ব্যবহৃত রিসোর্সগুলো</p>
              </div>
              <Link href="/free-resources" className={`${styles.seeAllBtn} font-bn`}>
                সব রিসোর্স দেখুন →
              </Link>
            </div>

            <div className={styles.popGrid}>
              {popularResources.map((res, i) => (
                <div key={i} className={styles.resCard}>
                  <div className={styles.resImageHeader} style={{ background: `${res.color}12` }}>
                    <span className={styles.resBadge} style={{ background: `${res.color}20`, color: res.color }}>
                      টুলস ও গাইড
                    </span>
                  </div>
                  <div className={styles.resBody}>
                    <h3 className={styles.resTitle}>{res.title}</h3>
                    <p className={`${styles.resDesc} font-bn`}>{res.desc}</p>
                    <div className={styles.resTagRow}>
                      <res.tagIcon size={14} color={res.color} />
                      <span className={styles.resTagText}>{res.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Tools Section */}
        <section className="section">
          <div className="container">
            <div className={styles.sectionHeaderCenter}>
              <h2 className={`${styles.sectionTitle} font-bn`}>দ্রুত ব্যবহারযোগ্য টুলস</h2>
            </div>

            <div className={styles.toolsGrid}>
              {quickTools.map((t, i) => (
                <div key={i} className={styles.toolCard}>
                  <div className={styles.toolIconBox} style={{ background: `${t.color}15`, color: t.color }}>
                    <t.icon size={24} />
                  </div>
                  <div className={styles.toolInfo}>
                    <h3 className={styles.toolTitle}>{t.title}</h3>
                    <p className={`${styles.toolDesc} font-bn`}>{t.desc}</p>
                    <Link href={t.href} className={`${styles.toolBtnLink} font-bn`} style={{ color: t.color }}>
                      {t.btnText}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className={styles.bottomNewsletterBanner}>
          <div className={`container ${styles.newsletterFlex}`}>
            <div className={styles.nlLeft}>
              <div className={styles.nlIconBox}>
                <Send size={24} />
              </div>
              <div>
                <h2 className={`${styles.nlTitle} font-bn`}>
                  নিয়মিত ফ্রি রিসোর্স ও স্টাডি টিপস পেতে আমাদের সাথে থাকুন
                </h2>
                <p className={`${styles.nlSub} font-bn`}>
                  নতুন গাইড, টিপস ও আপডেট সরাসরি আপনার ইনবক্সে পাবেন!
                </p>
              </div>
            </div>
            <form className={styles.nlForm} onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="আপনার ইমেইল দিন"
                className={`${styles.nlInput} font-bn`}
              />
              <button type="submit" className={styles.nlBtn} aria-label="Subscribe">
                <Send size={18} />
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
