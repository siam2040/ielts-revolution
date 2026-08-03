'use client';

import { useState } from 'react';
import Link from 'next/link';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import {
  Bell, Search, ChevronDown, BookMarked, Volume2, Eye, Bookmark,
  MoreHorizontal, ChevronLeft, ChevronRight, RotateCcw, Plus, Filter,
  TrendingUp, CheckCircle, Clock, AlertTriangle, ArrowRight
} from 'lucide-react';
import styles from './Vocabulary.module.css';

const statsData = [
  { label: 'মোট শব্দ', value: '1,248', change: '+24 এই সপ্তাহে', color: 'purple', icon: BookMarked },
  { label: 'আয়ত্ত করা', value: '786', percent: '63%', color: 'green', icon: CheckCircle },
  { label: 'প্রক্রিয়াধীন', value: '312', percent: '25%', color: 'orange', icon: Clock },
  { label: 'পুনরায় অনুশীলন', value: '150', percent: '12%', color: 'red', icon: AlertTriangle },
];

const filters = [
  { label: 'Topic', options: ['All Topics', 'Personality', 'Education', 'General', 'Work', 'Technology'] },
  { label: 'Sub Topic', options: ['All Sub Topics'] },
  { label: 'Source', options: ['All Sources', 'Cambridge', 'British Council'] },
  { label: 'Difficulty', options: ['All Difficulty', 'Easy', 'Medium', 'Hard'] },
  { label: 'Tags', options: ['All Tags', 'IELTS Core', 'Academic', 'General'] },
  { label: 'CEFR Level', options: ['All Levels', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'] },
  { label: 'Cluster', options: ['All Clusters'] },
];

const tabs = [
  { label: 'সব শব্দ', count: null, active: true },
  { label: 'আমার জমাকৃত', count: 120, active: false },
  { label: 'আয়ত্ত করা', count: 45, active: false },
  { label: 'প্রক্রিয়াধীন', count: 38, active: false },
  { label: 'পুনরায় অনুশীলন', count: 12, active: false },
];

const wordsData = [
  {
    id: 1,
    keyword: 'Ambitious',
    synonyms: ['Aspiring', 'Driven', 'Determined'],
    definition: 'Having a strong desire and determination to succeed.',
    example: 'She is very ambitious and wants to become a doctor.',
    difficulty: 'Medium',
    difficultyColor: 'orange',
    cefr: 'B2',
    cefrColor: 'purple',
    cluster: 'Personality',
    status: 'আয়ত্ত করা',
    statusColor: 'green',
  },
  {
    id: 2,
    keyword: 'Enhance',
    synonyms: ['Improve', 'Enrich', 'Boost'],
    definition: 'To improve or increase the quality value or strength.',
    example: 'Regular practice will enhance your skills.',
    difficulty: 'Easy',
    difficultyColor: 'green',
    cefr: 'B1',
    cefrColor: 'blue',
    cluster: 'Education',
    status: 'আয়ত্ত করা',
    statusColor: 'green',
  },
  {
    id: 3,
    keyword: 'Obvious',
    synonyms: ['Clear', 'Evident', 'Apparent'],
    definition: 'Easy to see discover or understand.',
    example: 'It is obvious that he was tired after the match.',
    difficulty: 'Easy',
    difficultyColor: 'green',
    cefr: 'A2',
    cefrColor: 'teal',
    cluster: 'General',
    status: 'প্রক্রিয়াধীন',
    statusColor: 'orange',
  },
  {
    id: 4,
    keyword: 'Resilient',
    synonyms: ['Strong', 'Tough', 'Unbreakable'],
    definition: 'Able to recover quickly from difficulties.',
    example: 'She showed great resilience in hard times.',
    difficulty: 'Hard',
    difficultyColor: 'red',
    cefr: 'C1',
    cefrColor: 'red',
    cluster: 'Personality',
    status: 'পুনরায় অনুশীলন',
    statusColor: 'yellow',
  },
  {
    id: 5,
    keyword: 'Implement',
    synonyms: ['Execute', 'Carry out', 'Put into action'],
    definition: 'To put a plan or decision into action.',
    example: 'The government will implement the new policy.',
    difficulty: 'Medium',
    difficultyColor: 'orange',
    cefr: 'B2',
    cefrColor: 'purple',
    cluster: 'Work',
    status: 'প্রক্রিয়াধীন',
    statusColor: 'orange',
  },
];

export default function VocabularyPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.dashLayout}>
      <DashboardSidebar />
      <div className={styles.dashContainer}>
        {/* Top Header */}
        <header className={styles.topHeader}>
          <div className={styles.searchBar}>
            <Search size={16} className={styles.searchIcon} />
            <input className={styles.searchInput} placeholder="Search..." />
          </div>
          <div className={styles.userSection}>
            <button className={styles.notifBtn}>
              <Bell size={18} />
              <span className={styles.notifBadge}>4</span>
            </button>
            <div className={styles.userProfile}>
              <div className={styles.userAvatar}>S</div>
              <span className={styles.userName}>Siam Ahmed</span>
              <ChevronDown size={14} />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Breadcrumb */}
          <div className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>&gt;</span>
            <span className={styles.breadcrumbCurrent}>Vocabulary</span>
          </div>

          {/* Page Header */}
          <div className={styles.pageHeader}>
            <div>
              <h1 className={styles.pageTitle}>Vocabulary</h1>
              <p className={`${styles.pageSubtitle} font-bn`}>
                নতুন শব্দ শিখুন, মনে রাখুন এবং ব্যবহার করুন আপনার দৈনন্দিন সাহায্যে।
              </p>
            </div>
            <div className={styles.headerActions}>
              <button className={styles.savedBtn}>
                <Bookmark size={16} />
                <span className="font-bn">আমার জমাকৃত শব্দ</span>
              </button>
              <button className={styles.addWordBtn}>
                <Plus size={16} />
                <span className="font-bn">নতুন শব্দ যোগ করুন</span>
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className={styles.statsGrid}>
            {statsData.map((stat, i) => (
              <div key={i} className={`${styles.statCard} ${styles[`stat${stat.color}`]}`}>
                <div className={styles.statTop}>
                  <div className={styles.statIconWrap}>
                    <stat.icon size={20} />
                  </div>
                  <span className={`${styles.statLabel} font-bn`}>{stat.label}</span>
                </div>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={`${styles.statChange} font-bn`}>
                  {stat.change || stat.percent}
                </div>
              </div>
            ))}
          </div>

          {/* Filters */}
          <div className={styles.filtersRow}>
            {filters.map((filter, i) => (
              <div key={i} className={styles.filterSelect}>
                <select className={styles.selectInput}>
                  {filter.options.map((opt, j) => (
                    <option key={j}>{opt}</option>
                  ))}
                </select>
                <ChevronDown size={14} className={styles.selectArrow} />
              </div>
            ))}
            <button className={styles.filterBtn}>
              <Filter size={14} />
              <span className="font-bn">ফিল্টার করুন</span>
            </button>
          </div>

          {/* Search Row */}
          <div className={styles.wordSearchRow}>
            <div className={styles.wordSearchBar}>
              <Search size={16} className={styles.searchIcon} />
              <input
                className={styles.wordSearchInput}
                placeholder="শব্দ বা কী-ওয়ার্ড খুঁজুন..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className={styles.resetBtn}>
              <RotateCcw size={14} />
              <span>Reset</span>
            </button>
          </div>

          {/* Tabs */}
          <div className={styles.tabsRow}>
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''} font-bn`}
                onClick={() => setActiveTab(i)}
              >
                {tab.label}
                {tab.count !== null && (
                  <span className={styles.tabCount}>({tab.count})</span>
                )}
              </button>
            ))}
          </div>

          {/* Words Table */}
          <div className={styles.tableWrapper}>
            <table className={styles.wordTable}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Keyword</th>
                  <th>Synonyms</th>
                  <th>Definition</th>
                  <th>Example Sentence</th>
                  <th>Difficulty</th>
                  <th>CEFR Level</th>
                  <th>Cluster</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {wordsData.map((word, i) => (
                  <tr key={word.id}>
                    <td className={styles.rowNum}>{i + 1}</td>
                    <td>
                      <div className={styles.keywordCell}>
                        <Link href={`/vocabulary/${word.keyword.toLowerCase()}`} className={styles.keywordLink}>
                          {word.keyword}
                        </Link>
                        <button className={styles.audioBtn} title="Listen">
                          <Volume2 size={14} />
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className={styles.synonymsCell}>
                        {word.synonyms.map((s, j) => (
                          <span key={j} className={styles.synonymTag}>{s}</span>
                        ))}
                      </div>
                    </td>
                    <td className={styles.defCell}>{word.definition}</td>
                    <td className={styles.exCell}>{word.example}</td>
                    <td>
                      <span className={`${styles.badge} ${styles[`badge${word.difficultyColor}`]}`}>
                        {word.difficulty}
                      </span>
                    </td>
                    <td>
                      <span className={`${styles.badge} ${styles[`badge${word.cefrColor}`]}`}>
                        {word.cefr}
                      </span>
                    </td>
                    <td className={styles.clusterCell}>{word.cluster}</td>
                    <td>
                      <span className={`${styles.statusBadge} ${styles[`status${word.statusColor}`]} font-bn`}>
                        {word.status}
                      </span>
                    </td>
                    <td>
                      <div className={styles.actionCell}>
                        <Link href={`/vocabulary/${word.keyword.toLowerCase()}`} className={styles.actionBtn} title="View">
                          <Eye size={14} />
                        </Link>
                        <button className={styles.actionBtn} title="Bookmark">
                          <Bookmark size={14} />
                        </button>
                        <button className={styles.actionBtn} title="More">
                          <MoreHorizontal size={14} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className={styles.pagination}>
            <button className={`${styles.pageBtn} ${styles.pagePrev}`} disabled>
              <span className="font-bn">পূর্ববর্তী</span>
            </button>
            <div className={styles.pageNumbers}>
              <button className={`${styles.pageNum} ${styles.pageActive}`}>1</button>
              <button className={styles.pageNum}>2</button>
              <button className={styles.pageNum}>3</button>
              <button className={styles.pageNum}>4</button>
              <button className={styles.pageNum}>5</button>
              <span className={styles.pageDots}>...</span>
              <button className={styles.pageNum}>25</button>
            </div>
            <button className={styles.pageBtn}>
              <span className="font-bn">পরবর্তী</span>
              <ChevronRight size={14} />
            </button>
            <span className={`${styles.pageInfo} font-bn`}>
              মোট 1,248 টি শব্দের মধ্যে 1-5 টি দেখানো হচ্ছে
            </span>
          </div>

          {/* Bottom CTA Banner */}
          <div className={styles.ctaBanner}>
            <div className={styles.ctaContent}>
              <div className={styles.ctaIcon}>📖</div>
              <div>
                <h3 className={`${styles.ctaTitle} font-bn`}>
                  প্রতিদিন একটি নতুন শব্দ শিখুন এবং আপনার IELTS Band Score বাড়ান!
                </h3>
                <p className={`${styles.ctaDesc} font-bn`}>
                  নিয়মিত অনুশীলন করুন, কুইজে অংশ নিন এবং নিজেকে আরও উন্নত করুন!
                </p>
              </div>
            </div>
            <Link href="/vocabulary/word-of-the-day" className={styles.ctaBtn}>
              <span className="font-bn">আজকের Word of the Day দেখুন</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
