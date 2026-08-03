'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, Search, ChevronDown, BookOpen, FileText,
  Headphones, Mic, Calculator, BookMarked, GraduationCap,
  Video, ClipboardList
} from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'হোম', href: '/' },
  { label: 'কোর্সসমূহ', href: '/courses' },
  {
    label: 'ফ্রি রিসোর্স',
    href: '/free-resources',
    dropdown: [
      { label: 'Reading Practice', href: '/practice/reading', icon: BookOpen },
      { label: 'Writing Practice', href: '/practice/writing', icon: FileText },
      { label: 'Listening Practice', href: '/practice/listening', icon: Headphones },
      { label: 'Speaking Practice', href: '/practice/speaking', icon: Mic },
      { label: 'Band Calculator', href: '/band-calculator', icon: Calculator },
      { label: 'Vocabulary Bank', href: '/vocabulary', icon: BookMarked },
      { label: 'Study Kit', href: '/free-resources', icon: GraduationCap },
    ]
  },
  {
    label: 'কেমনভুলতি',
    href: '#',
    dropdown: [
      { label: 'Mock Tests', href: '/mock-tests', icon: ClipboardList },
      { label: 'Study Plan', href: '/study-plan', icon: BookOpen },
      { label: 'Word of the Day', href: '/word-of-the-day', icon: BookMarked },
      { label: 'Video Lessons', href: '/courses', icon: Video },
    ]
  },
  { label: 'ব্লগ', href: '/blog' },
  { label: 'ওয়েবিনার', href: '/webinar' },
  { label: 'আমাদের সম্পর্কে', href: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill="url(#logoGrad)" />
              <path d="M12 26V10l6 4 6-4v16l-6-4-6 4z" fill="white" />
              <path d="M18 8l4-2v4l-4 2V8z" fill="rgba(255,255,255,0.6)" />
              <defs>
                <linearGradient id="logoGrad" x1="0" y1="0" x2="36" y2="36">
                  <stop offset="0%" stopColor="#6C3CE1" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>IELTS</span>
            <span className={styles.logoSubtitle}>Revolution</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className={styles.navItem}
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              >
                {link.label}
                {link.dropdown && <ChevronDown size={14} className={styles.chevron} />}
              </Link>
              {link.dropdown && activeDropdown === link.label && (
                <div className={styles.dropdown}>
                  {link.dropdown.map((item) => (
                    <Link key={item.label} href={item.href} className={styles.dropdownItem}>
                      <item.icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className={styles.navRight}>
          <button
            className={styles.searchBtn}
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Link href="/login" className={styles.loginBtn}>
            লগইন
          </Link>
          <Link href="/register" className={styles.ctaBtn}>
            সাইন আপ ফ্রি
          </Link>
          <button
            className={styles.menuBtn}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className={styles.searchOverlay}>
          <div className={`container ${styles.searchContainer}`}>
            <Search size={20} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="কোর্স, রিসোর্স বা ব্লগ খুঁজুন..."
              className={styles.searchInput}
              autoFocus
            />
            <button onClick={() => setSearchOpen(false)} className={styles.searchClose}>
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <div key={link.label} className={styles.mobileItem}>
              <Link href={link.href} className={styles.mobileLink}>
                {link.label}
                {link.dropdown && (
                  <ChevronDown
                    size={16}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveDropdown(activeDropdown === link.label ? null : link.label);
                    }}
                  />
                )}
              </Link>
              {link.dropdown && activeDropdown === link.label && (
                <div className={styles.mobileDropdown}>
                  {link.dropdown.map((item) => (
                    <Link key={item.label} href={item.href} className={styles.mobileDropdownItem}>
                      <item.icon size={16} />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className={styles.mobileActions}>
            <Link href="/login" className={styles.mobileLoginBtn}>লগইন</Link>
            <Link href="/register" className={styles.mobileCTABtn}>সাইন আপ ফ্রি</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
