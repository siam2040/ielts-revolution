'use client';

import Link from 'next/link';
import { Star, BookOpen, BarChart, ArrowRight, Users } from 'lucide-react';
import styles from './PopularCoursesSection.module.css';

const courses = [
  {
    title: 'IELTS Writing Basics',
    titleBn: 'আইএলটিএস রাইটিং বেসিকস',
    desc: 'নিজের রাইটিং স্কিল শিখুন এবং প্র্যাক্টিস করুন',
    level: 'Beginner',
    lessons: 12,
    price: null,
    badge: 'FREE',
    badgeColor: '#22C55E',
    rating: 4.8,
    students: 2340,
    slug: 'ielts-writing-basics',
  },
  {
    title: 'IELTS Reading Strategies',
    titleBn: 'আইএলটিএস রিডিং স্ট্র্যাটেজি',
    desc: 'Reading Techniques যেভাবে পরীক্ষায় সফল হবেন PDF, Video, টিপস',
    level: 'Beginner',
    lessons: 15,
    price: null,
    badge: 'FREE',
    badgeColor: '#22C55E',
    rating: 4.7,
    students: 1890,
    slug: 'ielts-reading-strategies',
  },
  {
    title: 'IELTS Complete Preparation (Band 6.5-8+)',
    titleBn: 'আইএলটিএস কমপ্লিট প্রিপারেশন',
    desc: 'Listen iq, Reading, Writing, Speak ing সব দিক থেকে সম্পূর্ণ প্রস্তুতি নিন',
    level: 'All Levels',
    lessons: 120,
    price: 99,
    originalPrice: 199,
    badge: 'BESTSELLER',
    badgeColor: '#F97316',
    rating: 4.9,
    students: 5230,
    slug: 'ielts-complete-preparation',
  },
];

export default function PopularCoursesSection() {
  return (
    <section className={`section ${styles.coursesSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <h2 className="section-title font-bn">জনপ্রিয় কোর্সসমূহ</h2>
            <p className="section-subtitle font-bn">
              সবচেয়ে বেশি পছন্দ হওয়া এবং সবচেয়ে কার্যকরী IELTS কোর্স সমূহ
            </p>
          </div>
          <Link href="/courses" className={styles.viewAllBtn}>
            <span className="font-bn">সব কোর্স দেখুন</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.courseGrid}>
          {courses.map((course, index) => (
            <Link href={`/courses/${course.slug}`} key={index} className={styles.courseCard}>
              <div className={styles.courseImage}>
                <div className={styles.courseImageInner}>
                  <BookOpen size={40} strokeWidth={1.5} />
                  <span>{course.title.split(' ').slice(0, 2).join(' ')}</span>
                </div>
                <span className={styles.courseBadge} style={{ background: course.badgeColor }}>
                  {course.badge}
                </span>
              </div>

              <div className={styles.courseBody}>
                <div className={styles.courseLevel}>
                  <BarChart size={14} />
                  <span>{course.level}</span>
                  <span className={styles.courseDot}>•</span>
                  <span>{course.lessons} Lessons</span>
                </div>

                <h3 className={styles.courseTitle}>{course.title}</h3>
                <p className={`${styles.courseDesc} font-bn`}>{course.desc}</p>

                <div className={styles.courseFooter}>
                  <div className={styles.courseRating}>
                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                    <span>{course.rating}</span>
                    <span className={styles.courseStudents}>
                      <Users size={12} />
                      {course.students.toLocaleString()}
                    </span>
                  </div>
                  <div className={styles.coursePrice}>
                    {course.price ? (
                      <>
                        <span className={styles.priceOriginal}>${course.originalPrice}</span>
                        <span className={styles.priceCurrent}>${course.price}</span>
                      </>
                    ) : (
                      <span className={styles.priceFree}>Free</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
