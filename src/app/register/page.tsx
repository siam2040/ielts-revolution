'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { User, Mail, Lock, Target, ArrowRight } from 'lucide-react';
import styles from '../login/Auth.module.css';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetScore, setTargetScore] = useState('7.5');

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={`container ${styles.authContainer}`}>
          <div className={styles.authCard}>
            <div className={styles.authHeader}>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoTitle}>IELTS</span>
                <span className={styles.logoSub}>Revolution</span>
              </Link>
              <h1 className={`${styles.authTitle} font-bn`}>ফ্রি একাউন্ট খুলুন</h1>
              <p className={`${styles.authSubtitle} font-bn`}>
                আজই আপনার IELTS প্রস্তুতির যাত্রা শুরু করুন
              </p>
            </div>

            <form className={styles.authForm} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.fieldGroup}>
                <label className="font-bn">আপনার পূর্ণ নাম</label>
                <div className={styles.inputIconWrapper}>
                  <User size={18} className={styles.inputIcon} />
                  <input
                    type="text"
                    placeholder="Siam Ahmed"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className="font-bn">ইমেইল অ্যাড্রেস</label>
                <div className={styles.inputIconWrapper}>
                  <Mail size={18} className={styles.inputIcon} />
                  <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className="font-bn">পাসওয়ার্ড</label>
                <div className={styles.inputIconWrapper}>
                  <Lock size={18} className={styles.inputIcon} />
                  <input
                    type="password"
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className={styles.fieldGroup}>
                <label className="font-bn">টার্গেট ব্যান্ড স্কোর</label>
                <div className={styles.inputIconWrapper}>
                  <Target size={18} className={styles.inputIcon} />
                  <select value={targetScore} onChange={(e) => setTargetScore(e.target.value)}>
                    <option value="6.5">Band 6.5</option>
                    <option value="7.0">Band 7.0</option>
                    <option value="7.5">Band 7.5</option>
                    <option value="8.0">Band 8.0</option>
                    <option value="8.5">Band 8.5+</option>
                  </select>
                </div>
              </div>

              <Link href="/dashboard" className={`${styles.submitAuthBtn} font-bn`}>
                <span>একাউন্ট তৈরি করুন</span>
                <ArrowRight size={18} />
              </Link>

              <div className={`${styles.switchAuthRow} font-bn`}>
                <span>ইতিমধ্যে একাউন্ট আছে?</span>
                <Link href="/login" className={styles.switchAuthLink}>লগইন করুন</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
