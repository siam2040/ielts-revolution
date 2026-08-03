'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Search, Bookmark, Clock, User, ChevronLeft, ChevronRight, Send, Rocket, Sparkles } from 'lucide-react';
import styles from './Blog.module.css';

const categories = [
  { id: 'all', name: 'All' },
  { id: 'listening', name: 'Listening' },
  { id: 'reading', name: 'Reading' },
  { id: 'writing', name: 'Writing' },
  { id: 'speaking', name: 'Speaking' },
  { id: 'general', name: 'General Tips' },
  { id: 'success', name: 'Success Stories' },
];

const blogPosts = [
  {
    id: 1,
    title: 'IELTS Listening Tips: How to Score 8+ in the Exam',
    titleBn: 'আইএলটিএস লিসেনিং টিপস: কীভাবে পরীক্ষায় ৮+ পাবেন',
    excerpt: 'Master the IELTS listening section with these proven strategies and common mistakes to avoid.',
    category: 'LISTENING',
    categoryColor: '#6C3CE1',
    author: 'Anik Islam',
    authorAvatar: 'A',
    date: 'May 18, 2025',
    readTime: '6 min read',
    bgGrad: 'linear-gradient(135deg, #6C3CE1 0%, #8B5CF6 100%)',
    isVideo: true,
  },
  {
    id: 2,
    title: 'IELTS Reading Strategies: Get More Right Answers',
    titleBn: 'আইএলটিএস রিডিং স্ট্র্যাটেজি: সঠিক উত্তর পাওয়ার উপায়',
    excerpt: 'Learn time-saving techniques and smart reading strategies to tackle difficult passages with confidence.',
    category: 'READING',
    categoryColor: '#22C55E',
    author: 'Farhana Rahman',
    authorAvatar: 'F',
    date: 'May 15, 2025',
    readTime: '7 min read',
    bgGrad: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
  },
  {
    id: 3,
    title: 'How to Write a Band 7+ IELTS Essay',
    titleBn: 'কীভাবে ব্যান্ড ৭+ আইএলটিএস এসে লিখবেন',
    excerpt: 'A complete guide to structuring your essay, improving coherence and using high-band vocabulary.',
    category: 'WRITING',
    categoryColor: '#F97316',
    author: 'Mehedi Hasan',
    authorAvatar: 'M',
    date: 'May 12, 2025',
    readTime: '8 min read',
    bgGrad: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)',
  },
  {
    id: 4,
    title: 'IELTS Speaking Part 3: How to Answer Like a Pro',
    titleBn: 'আইএলটিএস স্পিকিং পার্ট ৩: প্রফেশনাল উত্তর দেওয়ার কৌশল',
    excerpt: 'Tips and sample answers to help you speak fluently and impress the examiner in Part 3.',
    category: 'SPEAKING',
    categoryColor: '#EF4444',
    author: 'Nusrat Jahan',
    authorAvatar: 'N',
    date: 'May 10, 2025',
    readTime: '5 min read',
    bgGrad: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
  },
];

const popularArticles = [
  { id: 1, title: 'How to Manage Time in IELTS Exam', readTime: '6 min read' },
  { id: 2, title: 'Top 20 IELTS Writing Vocabulary for Band 7+', readTime: '5 min read' },
  { id: 3, title: 'IELTS Preparation Plan for 30 Days', readTime: '7 min read' },
  { id: 4, title: '5 Mistakes That Keep Your IELTS Band Score Low', readTime: '6 min read' },
];

const categoryCounts = [
  { name: 'Listening', count: 24, icon: '🎧', color: '#6C3CE1' },
  { name: 'Speaking', count: 20, icon: '🎙️', color: '#EF4444' },
  { name: 'Reading', count: 28, icon: '📖', color: '#22C55E' },
  { name: 'General Tips', count: 18, icon: '💡', color: '#3B82F6' },
  { name: 'Writing', count: 26, icon: '✍️', color: '#F97316' },
  { name: 'Success Stories', count: 15, icon: '⭐', color: '#F59E0B' },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  const toggleBookmark = (id: number) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>IELTS Blog</h1>
              <p className={styles.heroSubtitle}>
                Tips, strategies & inspiration for your IELTS success
              </p>
              <p className={`${styles.heroDesc} font-bn`}>
                Explore expert tips, exam strategies, success stories and resources to help you achieve your target band score.
              </p>
            </div>
            <div className={styles.heroGraphic}>
              <div className={styles.bookStack}>
                <div className={styles.ieltsBook}>
                  <span>IELTS</span>
                  <div className={styles.bookRibbon} />
                </div>
                <div className={styles.mug}>
                  <Rocket size={20} className={styles.mugRocket} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className={styles.contentSection}>
          <div className={`container ${styles.contentContainer}`}>
            {/* Left Column - Articles */}
            <div className={styles.articlesCol}>
              {/* Category Filter & Search Bar */}
              <div className={styles.filterHeader}>
                <div className={styles.categoryTabs}>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      className={`${styles.tabBtn} ${activeCategory === cat.id ? styles.tabActive : ''}`}
                      onClick={() => setActiveCategory(cat.id)}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
                <div className={styles.searchBox}>
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                  />
                  <Search size={16} className={styles.searchIcon} />
                </div>
              </div>

              {/* Article Cards List */}
              <div className={styles.articlesList}>
                {blogPosts.map((post) => (
                  <div key={post.id} className={styles.articleCard}>
                    <div className={styles.cardImageArea} style={{ background: post.bgGrad }}>
                      {post.isVideo && (
                        <div className={styles.playBtnOverlay}>
                          <div className={styles.playIcon}>▶</div>
                        </div>
                      )}
                    </div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardCategory} style={{ color: post.categoryColor }}>
                        {post.category}
                      </div>
                      <h2 className={styles.articleTitle}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                      </h2>
                      <p className={styles.articleExcerpt}>{post.excerpt}</p>
                      <div className={styles.cardMeta}>
                        <div className={styles.authorInfo}>
                          <span className={styles.authorAvatar} style={{ background: post.categoryColor }}>
                            {post.authorAvatar}
                          </span>
                          <span className={styles.authorName}>by {post.author}</span>
                          <span className={styles.metaDot}>•</span>
                          <span className={styles.metaDate}>{post.date}</span>
                          <span className={styles.metaDot}>•</span>
                          <span className={styles.metaTime}>{post.readTime}</span>
                        </div>
                        <button
                          className={`${styles.bookmarkBtn} ${bookmarked.includes(post.id) ? styles.bookmarked : ''}`}
                          onClick={() => toggleBookmark(post.id)}
                          aria-label="Bookmark post"
                        >
                          <Bookmark size={18} fill={bookmarked.includes(post.id) ? 'currentColor' : 'none'} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className={styles.pagination}>
                <button className={styles.pageArrow} disabled>
                  <ChevronLeft size={16} />
                </button>
                <button className={`${styles.pageNum} ${styles.pageActive}`}>1</button>
                <button className={styles.pageNum}>2</button>
                <button className={styles.pageNum}>3</button>
                <button className={styles.pageNum}>4</button>
                <span className={styles.pageDots}>...</span>
                <button className={styles.pageNum}>10</button>
                <button className={styles.pageArrow}>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <aside className={styles.sidebar}>
              {/* Popular Articles */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Popular Articles</h3>
                <div className={styles.popularList}>
                  {popularArticles.map((article, idx) => (
                    <div key={article.id} className={styles.popularItem}>
                      <span className={styles.popularNumber}>{idx + 1}</span>
                      <div className={styles.popularThumb} />
                      <div className={styles.popularInfo}>
                        <h4 className={styles.popularTitle}>{article.title}</h4>
                        <span className={styles.popularTime}>{article.readTime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div className={styles.sidebarWidget}>
                <h3 className={styles.widgetTitle}>Categories</h3>
                <div className={styles.categoriesGrid}>
                  {categoryCounts.map((cat, idx) => (
                    <div key={idx} className={styles.categoryItem}>
                      <div className={styles.catLeft}>
                        <span className={styles.catIcon}>{cat.icon}</span>
                        <span className={styles.catName}>{cat.name}</span>
                      </div>
                      <span className={styles.catCount}>{cat.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stay Updated Card */}
              <div className={styles.newsletterWidget}>
                <div className={styles.newsletterIconWrapper}>
                  <Sparkles size={24} className={styles.newsletterIcon} />
                </div>
                <h3 className={styles.newsletterTitle}>Stay Updated</h3>
                <p className={styles.newsletterDesc}>
                  Get the latest IELTS tips, free resources and updates.
                </p>
                <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={styles.newsletterInput}
                  />
                  <button type="submit" className={styles.subscribeBtn}>
                    Subscribe
                  </button>
                </form>
                <span className={styles.spamNote}>No spam. Unsubscribe anytime.</span>
              </div>
            </aside>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className={styles.bottomBanner}>
          <div className={`container ${styles.bannerContainer}`}>
            <div className={styles.bannerLeft}>
              <div className={styles.rocketCircle}>
                <Rocket size={24} />
              </div>
              <div>
                <h2 className={styles.bannerTitle}>Ready to take your IELTS preparation to the next level?</h2>
                <p className={styles.bannerSubtitle}>Explore our free resources and practice tests.</p>
              </div>
            </div>
            <Link href="/free-resources" className={styles.exploreBtn}>
              Explore Resources →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
