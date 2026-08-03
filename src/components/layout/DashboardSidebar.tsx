'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, BookOpen, Download, BookMarked, Sparkles, ClipboardList, Radio,
  Headphones, PenTool, Mic, Award, Bookmark, FileText, UserCheck, Settings, Bell,
  HelpCircle, LogOut, ChevronRight, Zap, StickyNote, BrainCircuit
} from 'lucide-react';
import styles from './DashboardSidebar.module.css';

export default function DashboardSidebar() {
  const pathname = usePathname();

  const learnLinks = [
    { label: 'ড্যাশবোর্ড', href: '/dashboard', icon: LayoutDashboard },
    { label: 'কোর্সসমূহ', href: '/courses', icon: BookOpen },
    { label: 'ফ্রি রিসোর্স', href: '/free-resources', icon: Download },
    { label: 'Live ক্লাস', href: '/webinar', icon: Radio, badge: 'Live' },
    { label: 'Mock Tests', href: '/mock-tests', icon: ClipboardList },
  ];

  const vocabularyLinks = [
    { label: 'Vocabulary Bank', href: '/vocabulary', icon: BookMarked },
    { label: 'Word of the Day', href: '/vocabulary/word-of-the-day', icon: Sparkles },
    { label: 'Vocabulary Quiz', href: '/vocabulary/quiz', icon: BrainCircuit },
    { label: 'My Notes', href: '/vocabulary/notes', icon: StickyNote },
  ];

  const practiceLinks = [
    { label: 'Reading', href: '/practice/reading', icon: BookOpen },
    { label: 'Writing', href: '/practice/writing', icon: PenTool },
    { label: 'Listening', href: '/practice/listening', icon: Headphones },
    { label: 'Speaking', href: '/practice/speaking', icon: Mic },
  ];

  const activityLinks = [
    { label: 'আমার কোর্স', href: '/dashboard#courses', icon: BookOpen },
    { label: 'আমার কুইজ', href: '/dashboard#quizzes', icon: ClipboardList },
    { label: 'আমার নোটস', href: '/dashboard#notes', icon: FileText },
    { label: 'আমার অর্জন', href: '/dashboard#achievements', icon: Award },
  ];

  const accountLinks = [
    { label: 'প্রোফাইল সেটিং', href: '/dashboard/profile', icon: Settings },
    { label: 'নোটিফিকেশন', href: '/dashboard/notifications', icon: Bell },
    { label: 'সাপোর্ট', href: '/contact', icon: HelpCircle },
    { label: 'লগআউট', href: '/login', icon: LogOut },
  ];

  return (
    <aside className={styles.sidebar}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIcon}>
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="url(#dashLogoGrad)" />
            <path d="M12 26V10l6 4 6-4v16l-6-4-6 4z" fill="white" />
            <defs>
              <linearGradient id="dashLogoGrad" x1="0" y1="0" x2="36" y2="36">
                <stop offset="0%" stopColor="#6C3CE1" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <span className={styles.logoText}>IELTS Revolution</span>
      </Link>

      <div className={styles.navGroup}>
        <span className={styles.groupTitle}>LEARN</span>
        {learnLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${styles.navItem} ${pathname === link.href ? styles.active : ''}`}
          >
            <link.icon size={18} />
            <span className="font-bn">{link.label}</span>
            {link.badge && <span className={styles.liveBadge}>{link.badge}</span>}
          </Link>
        ))}
      </div>

      <div className={styles.navGroup}>
        <span className={styles.groupTitle}>VOCABULARY</span>
        {vocabularyLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${styles.navItem} ${pathname === link.href || (link.href === '/vocabulary' && pathname.startsWith('/vocabulary') && pathname === '/vocabulary') ? styles.active : ''}`}
          >
            <link.icon size={18} />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.navGroup}>
        <span className={styles.groupTitle}>PRACTICE</span>
        {practiceLinks.map((link) => (
          <Link key={link.label} href={link.href} className={styles.navItem}>
            <link.icon size={18} />
            <span>{link.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.navGroup}>
        <span className={styles.groupTitle}>MY ACTIVITIES</span>
        {activityLinks.map((link) => (
          <Link key={link.label} href={link.href} className={styles.navItem}>
            <link.icon size={18} />
            <span className="font-bn">{link.label}</span>
          </Link>
        ))}
      </div>

      <div className={styles.navGroup}>
        <span className={styles.groupTitle}>ACCOUNT</span>
        {accountLinks.map((link) => (
          <Link key={link.label} href={link.href} className={styles.navItem}>
            <link.icon size={18} />
            <span className="font-bn">{link.label}</span>
          </Link>
        ))}
      </div>

      {/* Premium Banner */}
      <div className={styles.premiumCard}>
        <div className={styles.crownIcon}>👑</div>
        <h4 className={styles.premiumTitle}>IELTS Premium</h4>
        <p className={`${styles.premiumDesc} font-bn`}>প্রিমিয়াম ফিচারের অ্যাক্সেস পান</p>
        <Link href="/courses/ielts-complete-preparation" className={styles.upgradeBtn}>
          আপগ্রেড করুন
        </Link>
      </div>
    </aside>
  );
}
