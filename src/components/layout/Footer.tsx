'use client';

import Link from 'next/link';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const quickLinks = [
  { label: 'হোম', href: '/' },
  { label: 'কোর্সসমূহ', href: '/courses' },
  { label: 'ফ্রি রিসোর্স', href: '/free-resources' },
  { label: 'ওয়েবিনার', href: '/webinar' },
  { label: 'ব্লগ', href: '/blog' },
];

const practiceLinks = [
  { label: 'Mock Tests', href: '/mock-tests' },
  { label: 'Reading', href: '/practice/reading' },
  { label: 'Writing', href: '/practice/writing' },
  { label: 'Listening', href: '/practice/listening' },
  { label: 'Speaking', href: '/practice/speaking' },
];

const resourceLinks = [
  { label: 'IELTS Band Calculator', href: '/band-calculator' },
  { label: 'Free Mock Tests', href: '/mock-tests' },
  { label: 'Study Kit', href: '/free-resources' },
  { label: 'Word of the Day', href: '/word-of-the-day' },
  { label: 'Vocabulary', href: '/vocabulary' },
];

const supportLinks = [
  { label: 'সাহায্য কেন্দ্র', href: '/faq' },
  { label: 'যোগাযোগ করুন', href: '/contact' },
  { label: 'প্রাইভেসি পলিসি', href: '/privacy-policy' },
  { label: 'শর্তাবলী', href: '/terms' },
  { label: 'রিফান্ড পলিসি', href: '/refund-policy' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="18" r="18" fill="url(#footerLogoGrad)" />
                <path d="M12 26V10l6 4 6-4v16l-6-4-6 4z" fill="white" />
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0" y1="0" x2="36" y2="36">
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
          <p className={`${styles.brandDesc} font-bn`}>
            আমরা আপনার IELTS-এ সফল হতে সাহায্য করি
            দক্ষ কোর্স, গাইড ও প্র্যাকটিক্যাল সাহায্যে।
          </p>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.35 29 29 0 00-.46-5.33zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z"/></svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className={styles.socialLink} aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.78a8.18 8.18 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.21z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linkCol}>
          <h4 className={`${styles.colTitle} font-bn`}>দ্রুত লিংক</h4>
          <ul className={styles.linkList}>
            {quickLinks.map(link => (
              <li key={link.label}>
                <Link href={link.href} className={`${styles.footerLink} font-bn`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Practice */}
        <div className={styles.linkCol}>
          <h4 className={`${styles.colTitle} font-bn`}>প্র্যাকটিস</h4>
          <ul className={styles.linkList}>
            {practiceLinks.map(link => (
              <li key={link.label}>
                <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className={styles.linkCol}>
          <h4 className={`${styles.colTitle} font-bn`}>রিসোর্স</h4>
          <ul className={styles.linkList}>
            {resourceLinks.map(link => (
              <li key={link.label}>
                <Link href={link.href} className={styles.footerLink}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div className={styles.linkCol}>
          <h4 className={`${styles.colTitle} font-bn`}>সাহায্য</h4>
          <ul className={styles.linkList}>
            {supportLinks.map(link => (
              <li key={link.label}>
                <Link href={link.href} className={`${styles.footerLink} font-bn`}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className={styles.newsletterCol}>
          <h4 className={`${styles.colTitle} font-bn`}>নিউজলেটার</h4>
          <p className={`${styles.newsletterDesc} font-bn`}>
            সেরা টিপস ও আপডেটের জন্য
            সাবস্ক্রাইব করুন
          </p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="আপনার ইমেইল দিন"
              className={`${styles.newsletterInput} font-bn`}
            />
            <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe">
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Contact Bar */}
      <div className={styles.contactBar}>
        <div className={`container ${styles.contactContent}`}>
          <div className={styles.contactItem}>
            <Mail size={16} />
            <span>support@ieltsrevolution.com</span>
          </div>
          <div className={styles.contactItem}>
            <Phone size={16} />
            <span>+880 1234-567890</span>
          </div>
          <div className={styles.contactItem}>
            <MapPin size={16} />
            <span>ঢাকা, বাংলাদেশ</span>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <div className="container">
          <p>© 2025 IELTS Revolution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
