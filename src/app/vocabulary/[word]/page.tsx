'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import {
  Bell, Search, ChevronDown, ArrowLeft, ChevronLeft, ChevronRight,
  Volume2, Star, Bookmark, PenTool, CheckCircle, Circle,
  Check, X, Plus, ArrowRight
} from 'lucide-react';
import styles from './WordDetail.module.css';

// Static word data for "Ambitious"
const wordData: Record<string, {
  word: string;
  phonetic: string;
  meaningBn: string;
  definitionBn: string;
  definitionEn: string;
  partOfSpeech: string;
  origin: string;
  frequency: string;
  lastUpdated: string;
  topic: string;
  cefr: string;
  difficulty: string;
  status: string;
  firstLearned: string;
  lastPracticed: string;
  totalPractice: string;
  synonyms: string[];
  antonyms: string[];
  exampleEn: string;
  exampleBn: string;
  highlightWord: string;
  ieltsUsage: string[];
  relatedWords: { word: string; type: string }[];
  progress: number;
  progressChecklist: { label: string; done: boolean; sub?: string }[];
  mcqQuestion: string;
  mcqOptions: { label: string; correct: boolean }[];
}> = {
  ambitious: {
    word: 'Ambitious',
    phonetic: '/æmˈbɪʃ.əs/',
    meaningBn: 'উচ্চাকাঙ্ক্ষী, বড় কিছু অর্জনের উচ্চাকাঙ্ক্ষী',
    definitionBn: 'অত্যন্ত উচ্চাকাঙ্ক্ষী; বড় কিছু অর্জনের প্রবল ইচ্ছা রয়েছে এমন।',
    definitionEn: 'Having a strong desire and determination to succeed.',
    partOfSpeech: 'Adjective',
    origin: "Late Latin 'ambitiosus' (eager for honors)",
    frequency: 'High',
    lastUpdated: '18 May 2025',
    topic: 'Personality',
    cefr: 'B2',
    difficulty: 'Medium',
    status: 'আয়ত্ত করা',
    firstLearned: '12 May 2025',
    lastPracticed: '18 May 2025',
    totalPractice: '3 বার',
    synonyms: ['Aspiring', 'Driven', 'Determined', 'Goal-oriented', 'Hardworking'],
    antonyms: ['Unambitious', 'Lazy', 'Indifferent', 'Unmotivated'],
    exampleEn: 'She is very ambitious and wants to become a doctor.',
    exampleBn: 'সে খুব উচ্চাকাঙ্ক্ষী এবং ডাক্তার হতে চায়।',
    highlightWord: 'ambitious',
    ieltsUsage: ['Writing Task 2', 'Speaking Part 3', 'Common in essay & speaking topics'],
    relatedWords: [
      { word: 'Ambition', type: 'Noun' },
      { word: 'Ambitiously', type: 'Adverb' },
      { word: 'Ambitiousness', type: 'Noun' },
    ],
    progress: 75,
    progressChecklist: [
      { label: 'শব্দ শেখা হয়েছে', done: true },
      { label: 'অর্থ পাঠানো', done: true },
      { label: 'উদাহরণ শেখেছেন', done: true },
      { label: 'অনুশীলন করেছেন', done: true, sub: '(3/5)' },
      { label: 'কুইজে সম্পূর্ণ করুন', done: false },
    ],
    mcqQuestion: 'Choose the correct meaning of "Ambitious":',
    mcqOptions: [
      { label: 'Lazy', correct: false },
      { label: 'Indifferent', correct: false },
      { label: 'Determined to succeed', correct: true },
      { label: 'Uninterested', correct: false },
    ],
  },
  enhance: {
    word: 'Enhance',
    phonetic: '/ɪnˈhɑːns/',
    meaningBn: 'বৃদ্ধি করা, উন্নত করা',
    definitionBn: 'কোনো কিছুর মান, মূল্য বা শক্তি বাড়ানো।',
    definitionEn: 'To improve or increase the quality, value, or strength.',
    partOfSpeech: 'Verb',
    origin: "Anglo-French 'enhauncer' (to raise)",
    frequency: 'High',
    lastUpdated: '18 May 2025',
    topic: 'Education',
    cefr: 'B1',
    difficulty: 'Easy',
    status: 'আয়ত্ত করা',
    firstLearned: '10 May 2025',
    lastPracticed: '17 May 2025',
    totalPractice: '5 বার',
    synonyms: ['Improve', 'Enrich', 'Boost', 'Augment', 'Elevate'],
    antonyms: ['Diminish', 'Reduce', 'Decrease', 'Weaken'],
    exampleEn: 'Regular practice will enhance your skills.',
    exampleBn: 'নিয়মিত অনুশীলন আপনার দক্ষতা বাড়াবে।',
    highlightWord: 'enhance',
    ieltsUsage: ['Writing Task 2', 'Speaking Part 2', 'Academic vocabulary'],
    relatedWords: [
      { word: 'Enhancement', type: 'Noun' },
      { word: 'Enhanced', type: 'Adjective' },
    ],
    progress: 90,
    progressChecklist: [
      { label: 'শব্দ শেখা হয়েছে', done: true },
      { label: 'অর্থ পাঠানো', done: true },
      { label: 'উদাহরণ শেখেছেন', done: true },
      { label: 'অনুশীলন করেছেন', done: true, sub: '(5/5)' },
      { label: 'কুইজে সম্পূর্ণ করুন', done: false },
    ],
    mcqQuestion: 'Choose the correct meaning of "Enhance":',
    mcqOptions: [
      { label: 'To reduce quality', correct: false },
      { label: 'To improve or increase', correct: true },
      { label: 'To destroy', correct: false },
      { label: 'To ignore', correct: false },
    ],
  },
};

// Fallback for unknown words
const defaultWord = wordData.ambitious;

export default function WordDetailPage() {
  const params = useParams();
  const slug = typeof params.word === 'string' ? params.word : 'ambitious';
  const data = wordData[slug] || defaultWord;

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [activeQuizTab, setActiveQuizTab] = useState(0);

  const quizTabs = ['MCQ কুইজ', 'Fill in the Blank', 'Sentence Making', 'Spelling Test'];

  const handleSubmit = () => {
    setShowResult(true);
  };

  // Calculate circumference for progress circle
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (data.progress / 100) * circumference;

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
            <Link href="/vocabulary" className={styles.breadcrumbLink}>Vocabulary</Link>
            <span className={styles.breadcrumbSep}>&gt;</span>
            <span className={styles.breadcrumbCurrent}>{data.word}</span>
          </div>

          {/* Navigation */}
          <div className={styles.navRow}>
            <Link href="/vocabulary" className={styles.backBtn}>
              <ArrowLeft size={16} />
              <span className="font-bn">ফিরে যান</span>
            </Link>
            <div className={styles.prevNextBtns}>
              <button className={styles.navArrowBtn}>
                <ChevronLeft size={16} />
                <span className="font-bn">পূর্বের শব্দ</span>
              </button>
              <button className={styles.navArrowBtn}>
                <span className="font-bn">পরবর্তী শব্দ</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Word Header + Status Card */}
          <div className={styles.wordHeaderRow}>
            <div className={styles.wordHeaderLeft}>
              <div className={styles.wordTitleRow}>
                <div className={styles.wordIconCircle}>
                  <Volume2 size={24} />
                </div>
                <h1 className={styles.wordTitle}>{data.word}</h1>
                <button className={styles.starBtn}><Star size={18} /></button>
                <button className={styles.bookmarkBtn}><Bookmark size={18} /></button>
              </div>
              <div className={styles.phoneticRow}>
                <span className={styles.phonetic}>{data.phonetic}</span>
                <button className={styles.audioSmBtn}><Volume2 size={14} /></button>
              </div>
              <p className={`${styles.wordMeaning} font-bn`}>{data.definitionBn}</p>
              <div className={styles.wordTags}>
                <span className={styles.wordTag}>Topic: <strong>{data.topic}</strong></span>
                <span className={styles.wordTag}>CEFR Level: <strong className={styles.cefrBadge}>{data.cefr}</strong></span>
                <span className={styles.wordTag}>Difficulty: <strong>{data.difficulty}</strong></span>
              </div>
            </div>

            {/* Status Card */}
            <div className={styles.statusCard}>
              <div className={styles.statusCardHeader}>
                <span className={`${styles.statusLabel} font-bn`}>আমার স্ট্যাটাস</span>
                <span className={`${styles.statusBadge} font-bn`}>{data.status}</span>
              </div>
              <div className={styles.statusDetails}>
                <div className={styles.statusRow}>
                  <span className={`${styles.statusKey} font-bn`}>প্রথম শেখা:</span>
                  <span className={styles.statusVal}>{data.firstLearned}</span>
                </div>
                <div className={styles.statusRow}>
                  <span className={`${styles.statusKey} font-bn`}>শেষ অনুশীলন:</span>
                  <span className={styles.statusVal}>{data.lastPracticed}</span>
                </div>
                <div className={styles.statusRow}>
                  <span className={`${styles.statusKey} font-bn`}>মোট অনুশীলন:</span>
                  <span className={`${styles.statusVal} font-bn`}>{data.totalPractice}</span>
                </div>
              </div>
              <button className={styles.practiceBtn}>
                <PenTool size={16} />
                <span className="font-bn">অনুশীলন করুন</span>
              </button>
            </div>
          </div>

          {/* Cards Row: Synonyms, Antonyms */}
          <div className={styles.cardsRow}>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Synonyms</h3>
              <div className={styles.tagsList}>
                {data.synonyms.map((s, i) => (
                  <span key={i} className={styles.synonymTag}>{s}</span>
                ))}
              </div>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Antonyms</h3>
              <div className={styles.tagsList}>
                {data.antonyms.map((a, i) => (
                  <span key={i} className={styles.antonymTag}>{a}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Cards Row: Example Sentence, IELTS Usage */}
          <div className={styles.cardsRow}>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Example Sentence</h3>
              <p className={styles.exampleEn}>
                &ldquo;{data.exampleEn.split(data.highlightWord).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && <strong className={styles.highlight}>{data.highlightWord}</strong>}
                  </span>
                ))}&rdquo;
              </p>
              <p className={`${styles.exampleBn} font-bn`}>{data.exampleBn}</p>
            </div>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Use in IELTS</h3>
              <div className={styles.ieltsUsageList}>
                {data.ieltsUsage.map((usage, i) => (
                  <div key={i} className={styles.ieltsUsageItem}>
                    <CheckCircle size={16} className={styles.checkIcon} />
                    <span>{usage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Word Details + Progress */}
          <div className={styles.detailsRow}>
            {/* Word Details */}
            <div className={styles.detailsCard}>
              <h3 className={styles.cardTitle}>Word Details</h3>
              <div className={styles.detailsGrid}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Part of Speech</span>
                  <span className={styles.detailValue}>{data.partOfSpeech}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={`${styles.detailLabel} font-bn`}>Meaning (Bangla)</span>
                  <span className={`${styles.detailValue} font-bn`}>{data.meaningBn}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Meaning (English)</span>
                  <span className={styles.detailValue}>{data.definitionEn}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Pronunciation</span>
                  <span className={styles.detailValue}>
                    {data.phonetic}
                    <button className={styles.audioSmBtn}><Volume2 size={12} /></button>
                  </span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Word Origin</span>
                  <span className={styles.detailValue}>{data.origin}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Related Words</span>
                  <div className={styles.relatedTags}>
                    {data.relatedWords.map((rw, i) => (
                      <span key={i} className={styles.relatedTag}>
                        {rw.word} <small>({rw.type})</small>
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Frequency</span>
                  <span className={styles.detailValue}>{data.frequency}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Last Updated</span>
                  <span className={styles.detailValue}>{data.lastUpdated}</span>
                </div>
              </div>
            </div>

            {/* Word Progress */}
            <div className={styles.progressCard}>
              <h3 className={`${styles.cardTitle} font-bn`}>Word Progress</h3>
              <div className={styles.progressCircleWrap}>
                <svg className={styles.progressSvg} viewBox="0 0 120 120">
                  <circle
                    cx="60" cy="60" r={radius}
                    fill="none"
                    stroke="var(--border-light)"
                    strokeWidth="8"
                  />
                  <circle
                    cx="60" cy="60" r={radius}
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform="rotate(-90 60 60)"
                    className={styles.progressArc}
                  />
                </svg>
                <div className={styles.progressText}>
                  <span className={styles.progressPercent}>{data.progress}%</span>
                  <span className={`${styles.progressLabel} font-bn`}>শব্দ আয়ত্ত</span>
                </div>
              </div>
              <div className={styles.progressChecklist}>
                {data.progressChecklist.map((item, i) => (
                  <div key={i} className={`${styles.checkItem} ${item.done ? styles.checkDone : ''}`}>
                    {item.done ? (
                      <CheckCircle size={16} className={styles.checkIconGreen} />
                    ) : (
                      <Circle size={16} className={styles.checkIconGray} />
                    )}
                    <span className="font-bn">
                      {item.label} {item.sub && <small>{item.sub}</small>}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Practice Section + Notes */}
          <div className={styles.bottomRow}>
            {/* Quiz / Practice */}
            <div className={styles.practiceCard}>
              <h3 className={`${styles.cardTitle} font-bn`}>অনুশীলন করুন</h3>
              <p className={`${styles.practiceSubtitle} font-bn`}>নিজেকে যাচাই করুন</p>

              <div className={styles.quizTabs}>
                {quizTabs.map((tab, i) => (
                  <button
                    key={i}
                    className={`${styles.quizTab} ${activeQuizTab === i ? styles.quizTabActive : ''}`}
                    onClick={() => setActiveQuizTab(i)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className={styles.quizContent}>
                <p className={`${styles.quizQuestion} font-bn`}>
                  প্রশ্ন: {data.mcqQuestion}
                </p>
                <div className={styles.mcqOptions}>
                  {data.mcqOptions.map((opt, i) => {
                    const letter = String.fromCharCode(65 + i);
                    let optClass = styles.mcqOption;
                    if (showResult && selectedAnswer === i) {
                      optClass += opt.correct ? ` ${styles.mcqCorrect}` : ` ${styles.mcqWrong}`;
                    } else if (selectedAnswer === i) {
                      optClass += ` ${styles.mcqSelected}`;
                    }
                    return (
                      <button
                        key={i}
                        className={optClass}
                        onClick={() => { setSelectedAnswer(i); setShowResult(false); }}
                      >
                        <span className={styles.mcqLetter}>{letter}.</span>
                        <span>{opt.label}</span>
                        {showResult && selectedAnswer === i && opt.correct && (
                          <Check size={16} className={styles.mcqCheckIcon} />
                        )}
                        {showResult && selectedAnswer === i && !opt.correct && (
                          <X size={16} className={styles.mcqXIcon} />
                        )}
                      </button>
                    );
                  })}
                </div>
                {showResult && selectedAnswer !== null && data.mcqOptions[selectedAnswer].correct && (
                  <p className={`${styles.resultMsg} ${styles.resultCorrect} font-bn`}>
                    ✅ সঠিক উত্তর
                  </p>
                )}
                {showResult && selectedAnswer !== null && !data.mcqOptions[selectedAnswer].correct && (
                  <p className={`${styles.resultMsg} ${styles.resultWrong} font-bn`}>
                    ❌ ভুল উত্তর
                  </p>
                )}
                <div className={styles.quizActions}>
                  <button
                    className={styles.submitBtn}
                    onClick={handleSubmit}
                    disabled={selectedAnswer === null}
                  >
                    <span className="font-bn">উত্তর জমা দিন</span>
                  </button>
                  <Link href="#" className={styles.allQuestionsLink}>
                    <span className="font-bn">সব প্রশ্ন দেখুন</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>

            {/* My Notes */}
            <div className={styles.notesCard}>
              <h3 className={`${styles.cardTitle} font-bn`}>আপনার নোটস</h3>
              <div className={styles.notesEmpty}>
                <div className={styles.notesEmptyIcon}>📝</div>
                <p className={`${styles.notesEmptyText} font-bn`}>এখনো কোনো নোট নেই</p>
                <p className={`${styles.notesEmptyHint} font-bn`}>
                  এই শব্দটি সম্পর্কে আপনার নোট যোগ করুন।
                </p>
                <button className={styles.addNoteBtn}>
                  <Plus size={14} />
                  <span className="font-bn">নোট যোগ করুন</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
