'use client';

import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BookOpen, Star, Users, BarChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './Course.module.css';

const coursesList = [
  {
    slug: 'ielts-complete-preparation',
    title: 'IELTS Complete Preparation (Band 6.5-8+)',
    titleBn: 'আইএলটিএস কমপ্লিট প্রিপারেশন',
    desc: 'Listening, Reading, Writing & Speaking — সব সেকশন কভার করে আপনাকে Band 6.5 থেকে 8+ এর মধ্যে নিতে আমাদের সম্পূর্ণ গাইডলাইন।',
    level: 'All Levels',
    lessons: 120,
    hours: '15+ Hours',
    rating: 4.8,
    reviews: 236,
    students: 10000,
    price: 99,
    originalPrice: 199,
    badge: 'BESTSELLER',
    badgeColor: '#EF4444',
  },
  {
    slug: 'ielts-writing-mastery',
    title: 'IELTS Writing Mastery',
    titleBn: 'আইএলটিএস রাইটিং মাস্টারী',
    desc: 'Task 1 & Task 2 এর জন্য সম্পূর্ণ স্ট্র্যাটেজি, উচ্চমানের টেমপ্লেট এবং ব্যান্ড ৭+ এসে লেখার কৌশল।',
    level: 'Intermediate',
    lessons: 32,
    hours: '6+ Hours',
    rating: 4.9,
    reviews: 142,
    students: 4500,
    price: 49,
    originalPrice: 99,
    badge: 'POPULAR',
    badgeColor: '#F97316',
  },
  {
    slug: 'ielts-speaking-success',
    title: 'IELTS Speaking Success',
    titleBn: 'আইএলটিএস স্পিকিং সাকসেস',
    desc: 'Part 1, 2, 3 এর উত্তর দেওয়ার বিশেষ টিপস, ফ্লুয়েন্সি বাড়ানোর উপায় ও মডেল স্পিকিং নমুনা।',
    level: 'All Levels',
    lessons: 20,
    hours: '4+ Hours',
    rating: 4.7,
    reviews: 98,
    students: 3100,
    price: 39,
    originalPrice: 79,
    badge: 'NEW',
    badgeColor: '#3B82F6',
  },
  {
    slug: 'ielts-reading-strategies',
    title: 'IELTS Reading Strategies',
    titleBn: 'আইএলটিএস রিডিং স্ট্র্যাটেজি',
    desc: 'Skimming, Scanning এবং কঠিন প্যাসেজ সহজে সমাধান করার শর্টকাট কৌশল।',
    level: 'Beginner',
    lessons: 15,
    hours: '3+ Hours',
    rating: 4.7,
    reviews: 85,
    students: 1890,
    price: null,
    originalPrice: null,
    badge: 'FREE',
    badgeColor: '#22C55E',
  },
];

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.coursesPageMain}>
        {/* Banner Header */}
        <section className={styles.coursesHeader}>
          <div className="container">
            <h1 className={`${styles.coursesTitle} font-bn`}>আমাদের কোর্সসমূহ</h1>
            <p className={`${styles.coursesSub} font-bn`}>
              আপনার পছন্দের কোর্সটি বেছে নিন এবং আজই IELTS প্রস্তুতি শুরু করুন
            </p>
          </div>
        </section>

        {/* Courses Listing Grid */}
        <section className="section">
          <div className="container">
            <div className={styles.coursesGrid}>
              {coursesList.map((c) => (
                <div key={c.slug} className={styles.courseItemCard}>
                  <div className={styles.cardHeaderArea}>
                    <span className={styles.cardBadge} style={{ background: c.badgeColor }}>
                      {c.badge}
                    </span>
                    <div className={styles.courseIconBox}>
                      <BookOpen size={48} color="#6C3CE1" />
                    </div>
                  </div>

                  <div className={styles.cardContentBody}>
                    <div className={styles.cardMetaRow}>
                      <span className={styles.metaBadge}>{c.level}</span>
                      <span>•</span>
                      <span>{c.lessons} Lessons</span>
                      <span>•</span>
                      <span>{c.hours}</span>
                    </div>

                    <h2 className={styles.itemTitle}>{c.title}</h2>
                    <p className={`${styles.itemDesc} font-bn`}>{c.desc}</p>

                    <div className={styles.itemRatingRow}>
                      <div className={styles.stars}>
                        <Star size={16} fill="#F59E0B" color="#F59E0B" />
                        <strong>{c.rating}</strong>
                        <span>({c.reviews} Reviews)</span>
                      </div>
                      <div className={styles.studentCount}>
                        <Users size={14} />
                        <span>{c.students.toLocaleString()}+ Learners</span>
                      </div>
                    </div>

                    <div className={styles.cardFooterArea}>
                      <div className={styles.priceArea}>
                        {c.price ? (
                          <>
                            <span className={styles.currPrice}>${c.price}</span>
                            <span className={styles.origPrice}>${c.originalPrice}</span>
                          </>
                        ) : (
                          <span className={styles.freePrice}>Free</span>
                        )}
                      </div>
                      <Link href={`/courses/${c.slug}`} className={styles.viewCourseBtn}>
                        <span className="font-bn">বিস্তারিত দেখুন</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
