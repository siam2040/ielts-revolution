'use client';

import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import styles from './BlogPreviewSection.module.css';

const blogPosts = [
  {
    title: 'Best IELTS Writing Tips 2025',
    titleBn: 'সেরা আইএলটিএস রাইটিং টিপস ২০২৫',
    category: 'WRITING',
    categoryColor: '#F97316',
    date: 'May 18, 2025',
    readTime: '6 min read',
    author: 'Anik Islam',
    slug: 'best-ielts-writing-tips-2025',
  },
  {
    title: 'Common Grammar Mistakes in IELTS',
    titleBn: 'আইএলটিএস-এ সাধারণ গ্রামার ভুল',
    category: 'GENERAL TIPS',
    categoryColor: '#3B82F6',
    date: 'May 8, 2025',
    readTime: '6 min read',
    author: 'Farhana Rahman',
    slug: 'common-grammar-mistakes',
  },
  {
    title: 'How to Speak Fluently in IELTS',
    titleBn: 'আইএলটিএস-এ কীভাবে সাবলীলভাবে কথা বলবেন',
    category: 'SPEAKING',
    categoryColor: '#EF4444',
    date: 'May 5, 2025',
    readTime: '5 min read',
    author: 'Mehedi Hasan',
    slug: 'how-to-speak-fluently',
  },
];

export default function BlogPreviewSection() {
  return (
    <section className={`section ${styles.blogSection}`}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <div>
            <h2 className="section-title font-bn">সর্বশেষ ব্লগ</h2>
            <p className="section-subtitle font-bn">
              টিপস, স্ট্র্যাটেজি এবং সফলতার গল্প পড়ুন
            </p>
          </div>
          <Link href="/blog" className={styles.viewAllBtn}>
            <span className="font-bn">সব ব্লগ দেখুন</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.blogGrid}>
          {blogPosts.map((post, index) => (
            <Link href={`/blog/${post.slug}`} key={index} className={styles.blogCard}>
              <div className={styles.blogImage}>
                <div className={styles.blogImageInner}>
                  <span className={styles.blogCategory} style={{ background: post.categoryColor }}>
                    {post.category}
                  </span>
                </div>
              </div>
              <div className={styles.blogBody}>
                <h3 className={styles.blogTitle}>{post.title}</h3>
                <p className={`${styles.blogTitleBn} font-bn`}>{post.titleBn}</p>
                <div className={styles.blogMeta}>
                  <span className={styles.blogAuthor}>
                    <User size={14} />
                    {post.author}
                  </span>
                  <span className={styles.blogDate}>{post.date}</span>
                  <span className={styles.blogReadTime}>
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
