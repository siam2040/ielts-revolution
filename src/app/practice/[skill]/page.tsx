'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  BookOpen, PenTool, Headphones, Mic, Clock, CheckCircle2, AlertCircle, Play,
  Volume2, RotateCcw, ArrowRight, Save
} from 'lucide-react';
import styles from './Practice.module.css';

export default function PracticeSkillPage() {
  const params = useParams();
  const skill = (params?.skill as string) || 'reading';

  const [timer, setTimer] = useState(1200); // 20 mins
  const [readingAnswers, setReadingAnswers] = useState<{ [key: number]: string }>({});
  const [essayText, setEssayText] = useState('');
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  const getSkillDetails = () => {
    switch (skill) {
      case 'reading':
        return {
          name: 'IELTS Reading Practice',
          titleBn: 'আইএলটিএস রিডিং প্র্যাকটিস',
          color: '#22C55E',
          icon: BookOpen,
          time: '20 Minutes',
        };
      case 'writing':
        return {
          name: 'IELTS Writing Task 2 Practice',
          titleBn: 'আইএলটিএস রাইটিং প্র্যাকটিস',
          color: '#F97316',
          icon: PenTool,
          time: '40 Minutes',
        };
      case 'listening':
        return {
          name: 'IELTS Listening Practice',
          titleBn: 'আইএলটিএস লিসেনিং প্র্যাকটিস',
          color: '#6C3CE1',
          icon: Headphones,
          time: '15 Minutes',
        };
      case 'speaking':
        return {
          name: 'IELTS Speaking Part 2 Practice',
          titleBn: 'আইএলটিএস স্পিকিং প্র্যাকটিস',
          color: '#EF4444',
          icon: Mic,
          time: '15 Minutes',
        };
      default:
        return {
          name: 'IELTS Practice Module',
          titleBn: 'আইএলটিএস প্র্যাকটিস মডিউল',
          color: '#3B82F6',
          icon: BookOpen,
          time: '20 Minutes',
        };
    }
  };

  const skillInfo = getSkillDetails();

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Practice Header Bar */}
        <section className={styles.practiceHeader} style={{ borderBottomColor: skillInfo.color }}>
          <div className={`container ${styles.headerFlex}`}>
            <div className={styles.headerTitleArea}>
              <div className={styles.skillIconBadge} style={{ background: `${skillInfo.color}15`, color: skillInfo.color }}>
                <skillInfo.icon size={24} />
              </div>
              <div>
                <h1 className={styles.skillTitle}>{skillInfo.name}</h1>
                <p className={`${styles.skillTitleBn} font-bn`}>{skillInfo.titleBn}</p>
              </div>
            </div>

            <div className={styles.timerBadge}>
              <Clock size={16} />
              <span>Time Left: 19:45</span>
            </div>
          </div>
        </section>

        {/* Practice Body */}
        <section className="section">
          <div className="container">
            {skill === 'reading' && (
              <div className={styles.splitPracticeGrid}>
                {/* Passage Column */}
                <div className={styles.passageCard}>
                  <h3 className={styles.passageTitle}>Passage 1: The Rise of Renewable Energy</h3>
                  <div className={styles.passageText}>
                    <p>
                      Over the past decade, renewable energy sources such as solar, wind, and hydroelectric power have experienced unprecedented growth. Governments and private corporations around the globe are investing billions of dollars to transition away from fossil fuels in an effort to combat climate change.
                    </p>
                    <p>
                      Solar photovoltaics (PV) technology in particular has seen dramatic decreases in manufacturing costs, making it one of the most economical forms of new electricity generation in many regions. Furthermore, improvements in battery storage technology allow intermittent power sources to provide reliable electricity even when the sun is not shining or the wind is not blowing.
                    </p>
                    <p>
                      Despite these advancements, challenges remain regarding grid integration, infrastructure updates, and policy frameworks. Experts argue that achieving a 100% renewable power grid will require global cooperation and continuous technological innovation.
                    </p>
                  </div>
                </div>

                {/* Questions Column */}
                <div className={styles.questionsCard}>
                  <h3 className={styles.questionsTitle}>Questions 1 - 3</h3>
                  <p className={styles.qInstruct}>Choose TRUE, FALSE, or NOT GIVEN for each statement below.</p>

                  <div className={styles.qItem}>
                    <p className={styles.qText}>1. Renewable energy costs have increased over the last decade.</p>
                    <div className={styles.qOptions}>
                      {['TRUE', 'FALSE', 'NOT GIVEN'].map((opt) => (
                        <label key={opt} className={styles.optLabel}>
                          <input
                            type="radio"
                            name="q1"
                            value={opt}
                            onChange={(e) => setReadingAnswers({ ...readingAnswers, 1: e.target.value })}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className={styles.qItem}>
                    <p className={styles.qText}>2. Battery storage helps solve the problem of intermittent solar power.</p>
                    <div className={styles.qOptions}>
                      {['TRUE', 'FALSE', 'NOT GIVEN'].map((opt) => (
                        <label key={opt} className={styles.optLabel}>
                          <input
                            type="radio"
                            name="q2"
                            value={opt}
                            onChange={(e) => setReadingAnswers({ ...readingAnswers, 2: e.target.value })}
                          />
                          <span>{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <button className={styles.submitAnswersBtn} onClick={() => setScoreSubmitted(true)}>
                    Submit Answers
                  </button>

                  {scoreSubmitted && (
                    <div className={styles.scoreResultBox}>
                      <CheckCircle2 size={24} color="#10B981" />
                      <div>
                        <strong>Your Score: 2 / 2 (100%)</strong>
                        <p className="font-bn">অসাধারণ! আপনি সবগুলো সঠিক উত্তর দিয়েছেন।</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {skill === 'writing' && (
              <div className={styles.writingContainer}>
                <div className={styles.writingPromptCard}>
                  <span className={styles.taskTag}>Task 2 Essay Prompt</span>
                  <h2 className={styles.promptQuestion}>
                    "Some people believe that university education should be free for everyone, while others think that students should pay for their higher education. Discuss both views and give your opinion."
                  </h2>
                  <span className={styles.wordLimitNote}>Write at least 250 words.</span>
                </div>

                <div className={styles.editorCard}>
                  <div className={styles.editorToolbar}>
                    <span>Word Count: <strong>{essayText.trim().split(/\s+/).filter(Boolean).length}</strong> words</span>
                    <button className={styles.saveDraftBtn}>
                      <Save size={14} />
                      <span>Save Draft</span>
                    </button>
                  </div>
                  <textarea
                    rows={12}
                    placeholder="Type your essay here..."
                    value={essayText}
                    onChange={(e) => setEssayText(e.target.value)}
                    className={styles.essayTextarea}
                  />
                  <button className={styles.submitAnswersBtn} onClick={() => setScoreSubmitted(true)}>
                    Submit Essay for AI Evaluation
                  </button>

                  {scoreSubmitted && (
                    <div className={styles.scoreResultBox}>
                      <CheckCircle2 size={24} color="#10B981" />
                      <div>
                        <strong>Estimated Writing Score: Band 7.0</strong>
                        <p className="font-bn">আপনার প্রবন্ধের গঠন ও শব্দচয়ন খুব ভালো হয়েছে!</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {skill === 'listening' && (
              <div className={styles.listeningContainer}>
                <div className={styles.audioPlayerCard}>
                  <Headphones size={32} color="#6C3CE1" />
                  <div className={styles.audioControls}>
                    <button className={styles.playPauseBtn} aria-label="Play audio">
                      <Play size={20} fill="currentColor" />
                    </button>
                    <div className={styles.audioTrackBar}>
                      <div className={styles.audioProgressFill} style={{ width: '45%' }} />
                    </div>
                    <span className={styles.audioTimeLeft}>04:15 / 10:00</span>
                  </div>
                </div>

                <div className={styles.questionsCard}>
                  <h3 className={styles.questionsTitle}>Questions 1 - 2</h3>
                  <div className={styles.qItem}>
                    <p className={styles.qText}>1. What is the customer's main query?</p>
                    <input type="text" placeholder="Type short answer..." className={styles.shortInput} />
                  </div>
                  <button className={styles.submitAnswersBtn} onClick={() => setScoreSubmitted(true)}>
                    Submit Listening Answers
                  </button>
                </div>
              </div>
            )}

            {skill === 'speaking' && (
              <div className={styles.speakingContainer}>
                <div className={styles.cueCardBox}>
                  <span className={styles.taskTag}>Part 2 Cue Card</span>
                  <h2 className={styles.promptQuestion}>
                    "Describe a memorable journey you have taken. You should say: where you went, who you went with, what you did there, and explain why it was memorable to you."
                  </h2>
                  <span className={styles.wordLimitNote}>You have 1 minute to prepare and 2 minutes to speak.</span>
                </div>

                <div className={styles.recorderCard}>
                  <div className={styles.micCircle}>
                    <Mic size={36} color="#FFF" />
                  </div>
                  <span className={styles.recordStatus}>Click below to start recording your response</span>
                  <button className={styles.recordBtn}>
                    Start Recording
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
