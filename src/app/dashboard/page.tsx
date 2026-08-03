'use client';

import { useState } from 'react';
import Link from 'next/link';
import DashboardSidebar from '@/components/layout/DashboardSidebar';
import {
  Bell, Search, ChevronDown, Flame, CheckCircle, Clock, BookOpen, BarChart3,
  Volume2, ArrowUpRight, ArrowDownRight, Calendar, ArrowRight, Play, CheckSquare, Square,
  Radio, Sparkles, Bookmark, User, PenTool, Headphones, ClipboardCheck, FileText, ClipboardList
} from 'lucide-react';
import styles from './Dashboard.module.css';

export default function DashboardPage() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Reading Practice', done: true },
    { id: 2, text: 'Vocabulary 20 Words', done: true },
    { id: 3, text: 'Listening Test', done: false },
    { id: 4, text: 'Writing Task 1', done: true },
    { id: 5, text: 'Speaking Practice', done: false },
  ]);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const streakDays = [
    { day: 'রবি', active: true },
    { day: 'সোম', active: true },
    { day: 'মঙ্গল', active: true },
    { day: 'বুধ', active: true },
    { day: 'বৃহস্পতি', active: true },
    { day: 'শুক্র', active: true },
    { day: 'শনি', active: false },
  ];

  return (
    <div className={styles.dashLayout}>
      <DashboardSidebar />
      <div className={styles.dashContainer}>
        {/* Top Header */}
        <header className={styles.topHeader}>
          <div className={styles.searchBar}>
            <Search size={16} className={styles.searchIcon} />
            <input type="text" placeholder="Dashboard" className={styles.searchInput} />
          </div>
          <div className={styles.userSection}>
            <div className={styles.bellBtn}>
              <Bell size={18} />
              <span className={styles.bellBadge}>3</span>
            </div>
            <div className={styles.userInfo}>
              <div className={styles.userAvatar}>S</div>
              <div className={styles.userDetails}>
                <span className={styles.userName}>Siam Ahmed</span>
                <span className={styles.userTarget}>Band Target: 7.5</span>
              </div>
              <ChevronDown size={14} />
            </div>
          </div>
        </header>

        {/* Dashboard Main Content */}
        <main className={styles.dashMain}>
          {/* Welcome Banner */}
          <div className={styles.welcomeBanner}>
            <div className={styles.welcomeLeft}>
              <h1 className={`${styles.welcomeTitle} font-bn`}>
                স্বাগতম, Siam Ahmed! 👋
              </h1>
              <p className={`${styles.welcomeDesc} font-bn`}>
                প্রতিদিন একটু একটু করে এগিয়ে যান, আপনার 7+ এর স্বপ্ন পূরণ হবে ইনশাআল্লাহ!
              </p>
              <div className={styles.streakBox}>
                <div className={styles.streakCount}>
                  <Flame className={styles.flameIcon} size={22} />
                  <span>12</span>
                  <small className="font-bn">দিন ধরে স্ট্রীক!</small>
                </div>
                <div className={styles.streakDays}>
                  {streakDays.map((sd, i) => (
                    <div key={i} className={styles.streakDayItem}>
                      <span className={`${styles.checkCircle} ${sd.active ? styles.checkActive : ''}`}>
                        {sd.active ? '✓' : ''}
                      </span>
                      <span className={`${styles.dayName} font-bn`}>{sd.day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.welcomeRight}>
              <div className={styles.characterIllustration}>
                <div className={styles.charBody}>
                  <div className={styles.charLaptop}>
                    <RocketIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards Row */}
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statCardIcon} style={{ background: '#EDE5FF', color: '#6C3CE1' }}>
                <BookOpen size={20} />
              </div>
              <div>
                <span className={`${styles.statCardLabel} font-bn`}>এনরোল্ড কোর্স</span>
                <span className={styles.statCardValue}>3</span>
                <Link href="/courses" className={`${styles.statCardLink} font-bn`}>সব কোর্স দেখুন →</Link>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statCardIcon} style={{ background: '#DCFCE7', color: '#16A34A' }}>
                <CheckCircle size={20} />
              </div>
              <div>
                <span className={`${styles.statCardLabel} font-bn`}>সম্পন্ন লেসন</span>
                <span className={styles.statCardValue}>48</span>
                <span className={`${styles.statCardSub} font-bn`}>মোট লেসন: 240</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statCardIcon} style={{ background: '#FFEDD5', color: '#EA580C' }}>
                <Clock size={20} />
              </div>
              <div>
                <span className={`${styles.statCardLabel} font-bn`}>স্টাডি টাইম</span>
                <span className={styles.statCardValue}>24h 30m</span>
                <span className={`${styles.statCardSub} font-bn`}>এই সপ্তাহে</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statCardIcon} style={{ background: '#DBEAFE', color: '#2563EB' }}>
                <BarChart3 size={20} />
              </div>
              <div>
                <span className={`${styles.statCardLabel} font-bn`}>মক টেস্ট স্কোর</span>
                <span className={styles.statCardValue}>6.5</span>
                <span className={`${styles.statCardSub} font-bn`}>সর্বোচ্চ ব্যান্ড স্কোর</span>
              </div>
            </div>
          </div>

          {/* Middle Row 1: My Courses & Study Calendar */}
          <div className={styles.gridTwoCols}>
            {/* My Courses */}
            <div className={styles.panelCard}>
              <div className={styles.panelHeader}>
                <h3 className={`${styles.panelTitle} font-bn`}>আমার কোর্সসমূহ</h3>
                <Link href="/courses" className={`${styles.panelLink} font-bn`}>সব দেখুন →</Link>
              </div>
              <div className={styles.coursesList}>
                <div className={styles.courseItem}>
                  <div className={styles.courseThumb} style={{ background: '#F3E8FF' }}>
                    <BookOpen size={24} color="#6C3CE1" />
                  </div>
                  <div className={styles.courseDetails}>
                    <h4 className={styles.courseItemTitle}>IELTS Complete Preparation (Band 6.5-8+)</h4>
                    <div className={styles.progressRow}>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '65%' }} />
                      </div>
                      <span className={styles.progressText}>65% সম্পন্ন</span>
                    </div>
                  </div>
                  <button className={`${styles.resumeBtn} font-bn`}>চালিয়ে যান</button>
                </div>

                <div className={styles.courseItem}>
                  <div className={styles.courseThumb} style={{ background: '#FFEDD5' }}>
                    <BookOpen size={24} color="#EA580C" />
                  </div>
                  <div className={styles.courseDetails}>
                    <h4 className={styles.courseItemTitle}>IELTS Writing Mastery</h4>
                    <div className={styles.progressRow}>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '40%' }} />
                      </div>
                      <span className={styles.progressText}>40% সম্পন্ন</span>
                    </div>
                  </div>
                  <button className={`${styles.resumeBtn} font-bn`}>চালিয়ে যান</button>
                </div>

                <div className={styles.courseItem}>
                  <div className={styles.courseThumb} style={{ background: '#DCFCE7' }}>
                    <BookOpen size={24} color="#16A34A" />
                  </div>
                  <div className={styles.courseDetails}>
                    <h4 className={styles.courseItemTitle}>IELTS Speaking Success</h4>
                    <div className={styles.progressRow}>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: '20%' }} />
                      </div>
                      <span className={styles.progressText}>20% সম্পন্ন</span>
                    </div>
                  </div>
                  <button className={`${styles.resumeBtn} font-bn`}>চালিয়ে যান</button>
                </div>
              </div>
            </div>

            {/* Study Calendar & Today's Goal */}
            <div className={styles.panelCard}>
              <div className={styles.panelHeader}>
                <h3 className={`${styles.panelTitle} font-bn`}>স্টাডি ক্যালেন্ডার</h3>
                <span className={styles.calendarMonth}>মে 2025</span>
              </div>
              <div className={styles.calendarMiniGrid}>
                {['রবি', 'সোম', 'মঙ্গল', 'বুধ', 'বৃহস্পতি', 'শুক্র', 'শনি'].map((d, i) => (
                  <span key={i} className={styles.calDayHeader}>{d}</span>
                ))}
                {[...Array(31)].map((_, i) => (
                  <span
                    key={i}
                    className={`${styles.calDayNum} ${i + 1 === 18 ? styles.calToday : ''}`}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>

              <div className={styles.todayGoalSection}>
                <div className={styles.goalHeader}>
                  <span className={`${styles.goalTitle} font-bn`}>আজকের লক্ষ্য</span>
                  <span className={styles.goalCount}>3/5 সম্পন্ন</span>
                </div>
                <div className={styles.tasksChecklist}>
                  {tasks.map((t) => (
                    <div
                      key={t.id}
                      className={styles.taskCheckItem}
                      onClick={() => toggleTask(t.id)}
                    >
                      <span className={t.done ? styles.taskDoneIcon : styles.taskPendingIcon}>
                        {t.done ? '✓' : ''}
                      </span>
                      <span className={`${styles.taskText} ${t.done ? styles.taskTextDone : ''}`}>
                        {t.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Middle Row 2: Skill Progress Radar & Word of the Day */}
          <div className={styles.gridTwoCols}>
            {/* Skill Progress */}
            <div className={styles.panelCard}>
              <div className={styles.panelHeader}>
                <div>
                  <h3 className={`${styles.panelTitle} font-bn`}>দক্ষতা অনুযায়ী অগ্রগতি</h3>
                  <span className={`${styles.panelSubtitle} font-bn`}>সর্বশেষ 7 দিনের পারফরম্যান্স</span>
                </div>
              </div>
              <div className={styles.skillProgressContent}>
                {/* Visual Radar Mockup */}
                <div className={styles.radarGraphic}>
                  <div className={styles.diamondBg}>
                    <div className={styles.diamondInner}>
                      <span className={styles.radarScoreTop}>Listening<br/><strong>6.5</strong></span>
                      <span className={styles.radarScoreRight}>Reading<br/><strong>6.0</strong></span>
                      <span className={styles.radarScoreBottom}>Speaking<br/><strong>6.0</strong></span>
                      <span className={styles.radarScoreLeft}>Writing<br/><strong>6.5</strong></span>
                    </div>
                  </div>
                </div>

                {/* Score Breakdown List */}
                <div className={styles.skillList}>
                  <div className={styles.skillListItem}>
                    <div className={styles.skillLabel}>
                      <span className={styles.skillIcon} style={{ color: '#6C3CE1' }}>🎧</span>
                      <span>Listening</span>
                    </div>
                    <div className={styles.skillValGroup}>
                      <strong>6.5</strong>
                      <span className={styles.incGreen}>↑ 0.5</span>
                    </div>
                  </div>

                  <div className={styles.skillListItem}>
                    <div className={styles.skillLabel}>
                      <span className={styles.skillIcon} style={{ color: '#10B981' }}>📖</span>
                      <span>Reading</span>
                    </div>
                    <div className={styles.skillValGroup}>
                      <strong>6.0</strong>
                      <span className={styles.incGreen}>↑ 0.3</span>
                    </div>
                  </div>

                  <div className={styles.skillListItem}>
                    <div className={styles.skillLabel}>
                      <span className={styles.skillIcon} style={{ color: '#F97316' }}>✍️</span>
                      <span>Writing</span>
                    </div>
                    <div className={styles.skillValGroup}>
                      <strong>6.5</strong>
                      <span className={styles.incGreen}>↑ 0.7</span>
                    </div>
                  </div>

                  <div className={styles.skillListItem}>
                    <div className={styles.skillLabel}>
                      <span className={styles.skillIcon} style={{ color: '#EF4444' }}>🎙️</span>
                      <span>Speaking</span>
                    </div>
                    <div className={styles.skillValGroup}>
                      <strong>6.0</strong>
                      <span className={styles.decRed}>↓ 0.2</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Word of the Day Widget */}
            <div className={styles.panelCard}>
              <div className={styles.panelHeader}>
                <h3 className={styles.panelTitle}>Word of the Day</h3>
                <Link href="/word-of-the-day" className={`${styles.panelLink} font-bn`}>সব দেখুন →</Link>
              </div>
              <div className={styles.wordBox}>
                <div className={styles.wordTitleRow}>
                  <h2 className={styles.vocabWord}>Ambitious</h2>
                  <button className={styles.audioBtn} aria-label="Listen pronunciation">
                    <Volume2 size={18} />
                  </button>
                </div>
                <span className={styles.phonetic}>/æmˈbɪʃ.əs/</span>
                <p className={`${styles.vocabMeaning} font-bn`}>
                  অত্যন্ত উচ্চাকাঙ্ক্ষী; বড় কিছু অর্জনের প্রবল ইচ্ছা রয়েছে এমন।
                </p>
                <div className={styles.exampleBox}>
                  <strong>Example:</strong> She is very <em>ambitious</em> and wants to become a doctor.
                </div>
                <button className={`${styles.saveWordBtn} font-bn`}>
                  <Bookmark size={14} />
                  <span>শব্দটি সেভ করুন</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row: Recent Activities, Upcoming Class, Quick Access */}
          <div className={styles.gridThreeCols}>
            {/* Recent Activities */}
            <div className={styles.panelCard}>
              <h3 className={`${styles.panelTitle} font-bn`}>সাম্প্রতিক কার্যক্রম</h3>
              <div className={styles.activityList}>
                <div className={styles.actItem}>
                  <div className={styles.actIcon} style={{ background: '#EDE5FF', color: '#6C3CE1' }}>
                    <BookOpen size={16} />
                  </div>
                  <div className={styles.actInfo}>
                    <span className={styles.actName}>IELTS Reading Test 05</span>
                    <span className={styles.actSub}>স্কোর: 28/40</span>
                  </div>
                  <span className={styles.actTime}>২ ঘণ্টা আগে</span>
                </div>

                <div className={styles.actItem}>
                  <div className={styles.actIcon} style={{ background: '#DCFCE7', color: '#16A34A' }}>
                    <Sparkles size={16} />
                  </div>
                  <div className={styles.actInfo}>
                    <span className={styles.actName}>Vocabulary Quiz</span>
                    <span className={styles.actSub}>স্কোর: 18/20</span>
                  </div>
                  <span className={styles.actTime}>গতকাল</span>
                </div>

                <div className={styles.actItem}>
                  <div className={styles.actIcon} style={{ background: '#FFEDD5', color: '#EA580C' }}>
                    <PenTool size={16} />
                  </div>
                  <div className={styles.actInfo}>
                    <span className={styles.actName}>Writing Task 1 Practice</span>
                    <span className={styles.actSub}>মূল্যায়ন সম্পন্ন</span>
                  </div>
                  <span className={styles.actTime}>২ দিন আগে</span>
                </div>

                <div className={styles.actItem}>
                  <div className={styles.actIcon} style={{ background: '#EDE5FF', color: '#6C3CE1' }}>
                    <Headphones size={16} />
                  </div>
                  <div className={styles.actInfo}>
                    <span className={styles.actName}>Listening Test 04</span>
                    <span className={styles.actSub}>স্কোর: 30/40</span>
                  </div>
                  <span className={styles.actTime}>৩ দিন আগে</span>
                </div>
              </div>
            </div>

            {/* Upcoming Live Class */}
            <div className={styles.panelCard}>
              <h3 className={`${styles.panelTitle} font-bn`}>আপকামিং ক্লাস</h3>
              <div className={styles.liveClassCard}>
                <div className={styles.liveBadgeRow}>
                  <span className={styles.liveBadgePulse}>● Live</span>
                </div>
                <h4 className={styles.liveClassName}>IELTS Writing Task 2</h4>
                <div className={styles.instructorRow}>
                  <div className={styles.instAvatar}>A</div>
                  <div>
                    <span className={styles.instName}>Anik Islam</span>
                    <span className={styles.instDate}>20 May 2025 • 08:00 PM (BST)</span>
                  </div>
                </div>

                <div className={styles.countdownRow}>
                  <div className={styles.countBox}>
                    <span className={styles.countNum}>01</span>
                    <span className={styles.countLabel}>দিন</span>
                  </div>
                  <div className={styles.countBox}>
                    <span className={styles.countNum}>06</span>
                    <span className={styles.countLabel}>ঘণ্টা</span>
                  </div>
                  <div className={styles.countBox}>
                    <span className={styles.countNum}>45</span>
                    <span className={styles.countLabel}>সেকেন্ড</span>
                  </div>
                </div>

                <button className={`${styles.joinClassBtn} font-bn`}>
                  ক্লাসে যোগ দিন
                </button>
              </div>
            </div>

            {/* Quick Access */}
            <div className={styles.panelCard}>
              <h3 className={`${styles.panelTitle} font-bn`}>দ্রুত অ্যাক্সেস</h3>
              <div className={styles.quickGrid}>
                <Link href="/mock-tests" className={styles.quickItem}>
                  <div className={styles.quickIcon} style={{ background: '#EDE5FF', color: '#6C3CE1' }}>
                    <ClipboardList size={20} />
                  </div>
                  <span className="font-bn">Mock Test দিন</span>
                </Link>

                <Link href="/free-resources" className={styles.quickItem}>
                  <div className={styles.quickIcon} style={{ background: '#DCFCE7', color: '#16A34A' }}>
                    <BookOpen size={20} />
                  </div>
                  <span className="font-bn">ফ্রি রিসোর্স দেখুন</span>
                </Link>

                <Link href="/vocabulary" className={styles.quickItem}>
                  <div className={styles.quickIcon} style={{ background: '#EDE5FF', color: '#6C3CE1' }}>
                    <Bookmark size={20} />
                  </div>
                  <span className="font-bn">Vocabulary Bank</span>
                </Link>

                <Link href="/study-plan" className={styles.quickItem}>
                  <div className={styles.quickIcon} style={{ background: '#EDE5FF', color: '#6C3CE1' }}>
                    <Calendar size={20} />
                  </div>
                  <span className="font-bn">Study Plan</span>
                </Link>

                <Link href="/dashboard" className={styles.quickItem}>
                  <div className={styles.quickIcon} style={{ background: '#FFEDD5', color: '#EA580C' }}>
                    <FileText size={20} />
                  </div>
                  <span className="font-bn">আমার নোটস</span>
                </Link>

                <Link href="/dashboard" className={styles.quickItem}>
                  <div className={styles.quickIcon} style={{ background: '#FFEDD5', color: '#EA580C' }}>
                    <BarChart3 size={20} />
                  </div>
                  <span className="font-bn">পারফরম্যান্স রিপোর্ট</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Motivation Banner */}
          <div className={styles.bottomBanner}>
            <div className={styles.bannerLeft}>
              <div className={styles.targetIcon}>🎯</div>
              <div>
                <h3 className={`${styles.bannerTitle} font-bn`}>
                  লক্ষ্য রাখুন, পরিশ্রম করুন, সফলতা আসবেই!
                </h3>
                <p className={`${styles.bannerSub} font-bn`}>
                  আপনার ধারাবাহিক প্রচেষ্টা আপনাকে নিয়ে যাবে কাঙ্ক্ষিত Band 7+ এ।
                </p>
              </div>
            </div>
            <Link href="/study-plan" className={`${styles.bannerBtn} font-bn`}>
              স্টাডি প্ল্যান দেখুন →
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

function RocketIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-3.05 11a22.35 22.35 0 0 1-3.95 2z"/>
    </svg>
  );
}
