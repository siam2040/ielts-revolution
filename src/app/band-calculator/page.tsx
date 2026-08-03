'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Calculator, Headphones, BookOpen, PenTool, Mic, RotateCcw } from 'lucide-react';
import styles from './BandCalc.module.css';

export default function BandCalculatorPage() {
  const [listening, setListening] = useState<number>(7.5);
  const [reading, setReading] = useState<number>(7.0);
  const [writing, setWriting] = useState<number>(7.0);
  const [speaking, setSpeaking] = useState<number>(7.5);

  const scores = [5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0];

  const calculateOverall = () => {
    const avg = (listening + reading + writing + speaking) / 4;
    const decimal = avg - Math.floor(avg);
    if (decimal < 0.25) return Math.floor(avg);
    if (decimal < 0.75) return Math.floor(avg) + 0.5;
    return Math.ceil(avg);
  };

  const overall = calculateOverall();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={`${styles.title} font-bn`}>IELTS Band Score Calculator</h1>
            <p className={`${styles.subtitle} font-bn`}>
              আপনার Listening, Reading, Writing & Speaking স্কোর নির্বাচন করে Overall Band Score হিসাব করুন।
            </p>
          </div>
        </section>

        <section className="section">
          <div className={`container ${styles.calcGrid}`}>
            {/* Input Controls */}
            <div className={styles.controlsCard}>
              <div className={styles.scoreRow}>
                <div className={styles.labelGroup}>
                  <Headphones size={20} color="#6C3CE1" />
                  <div>
                    <strong>Listening Score</strong>
                    <span className="font-bn">লিসেনিং ব্যান্ড</span>
                  </div>
                </div>
                <select value={listening} onChange={(e) => setListening(parseFloat(e.target.value))}>
                  {scores.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className={styles.scoreRow}>
                <div className={styles.labelGroup}>
                  <BookOpen size={20} color="#10B981" />
                  <div>
                    <strong>Reading Score</strong>
                    <span className="font-bn">রিডিং ব্যান্ড</span>
                  </div>
                </div>
                <select value={reading} onChange={(e) => setReading(parseFloat(e.target.value))}>
                  {scores.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className={styles.scoreRow}>
                <div className={styles.labelGroup}>
                  <PenTool size={20} color="#EA580C" />
                  <div>
                    <strong>Writing Score</strong>
                    <span className="font-bn">রাইটিং ব্যান্ড</span>
                  </div>
                </div>
                <select value={writing} onChange={(e) => setWriting(parseFloat(e.target.value))}>
                  {scores.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className={styles.scoreRow}>
                <div className={styles.labelGroup}>
                  <Mic size={20} color="#EF4444" />
                  <div>
                    <strong>Speaking Score</strong>
                    <span className="font-bn">স্পিকিং ব্যান্ড</span>
                  </div>
                </div>
                <select value={speaking} onChange={(e) => setSpeaking(parseFloat(e.target.value))}>
                  {scores.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* Result Card */}
            <div className={styles.resultCard}>
              <span className={styles.resultLabel}>Overall Band Score</span>
              <div className={styles.resultValue}>{overall.toFixed(1)}</div>
              <span className={styles.resultRank}>
                {overall >= 8.0 ? 'Expert User' : overall >= 7.0 ? 'Good User' : 'Competent User'}
              </span>

              <div className={styles.summaryList}>
                <div><span>Listening:</span><strong>{listening}</strong></div>
                <div><span>Reading:</span><strong>{reading}</strong></div>
                <div><span>Writing:</span><strong>{writing}</strong></div>
                <div><span>Speaking:</span><strong>{speaking}</strong></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
