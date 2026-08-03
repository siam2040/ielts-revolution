'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Mail, Lock, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import styles from './Auth.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
              <h1 className={`${styles.authTitle} font-bn`}>স্বাগতম! লগইন করুন</h1>
              <p className={`${styles.authSubtitle} font-bn`}>
                আপনার IELTS প্রস্তুতি ড্যাশবোর্ডে প্রবেশ করুন
              </p>
            </div>

            <form className={styles.authForm} onSubmit={(e) => e.preventDefault()}>
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
                <div className={styles.labelRow}>
                  <label className="font-bn">পাসওয়ার্ড</label>
                  <Link href="#" className={`${styles.forgotLink} font-bn`}>পাসওয়ার্ড ভুলে গেছেন?</Link>
                </div>
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

              <Link href="/dashboard" className={`${styles.submitAuthBtn} font-bn`}>
                <span>লগইন করুন</span>
                <ArrowRight size={18} />
              </Link>

              <div className={styles.divider}>
                <span>অথবা</span>
              </div>

              <button type="button" className={styles.googleBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
                <span>Google দিয়ে প্রবেশ করুন</span>
              </button>

              <div className={`${styles.switchAuthRow} font-bn`}>
                <span>একাউন্ট নেই?</span>
                <Link href="/register" className={styles.switchAuthLink}>নতুন একাউন্ট খুলুন</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
