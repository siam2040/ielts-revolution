'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Calendar, Clock, Video, Users, CheckCircle2, ChevronDown, ChevronUp,
  Gift, Star, ArrowRight, ShieldCheck, Sparkles, Send, Play
} from 'lucide-react';
import styles from './Webinar.module.css';

export default function WebinarPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  const learningOutcomes = [
    { title: 'Band 7+ পাওয়ার সঠিক রোডম্যাপ', icon: '🎯' },
    { title: 'প্রতিটি সেকশনের স্মার্ট টিপস ও কৌশল', icon: '✍️' },
    { title: 'Common Mistakes এড়িয়ে চলার উপায়', icon: '🛡️' },
    { title: 'সময় ব্যবস্থাপনা স্ট্র্যাটেজি', icon: '⏱️' },
    { title: 'আত্মবিশ্বাস বাড়িয়ে স্কোর ইমপ্রুভ করার টেকনিক', icon: '📈' },
  ];

  const agendaItems = [
    { time: '08:00 PM', title: 'ওয়েলকাম ও পরিচিতি' },
    { time: '08:10 PM', title: 'IELTS Overview & Band Descriptors' },
    { time: '08:30 PM', title: 'Listening - কীভাবে সহজে Band 7+' },
    { time: '09:00 PM', title: 'Reading - দ্রুত ও সঠিক সমাধানের কৌশল' },
    { time: '09:30 PM', title: 'Writing - High Band Writing Structure' },
    { time: '10:00 PM', title: 'Speaking - সাবলীলভাবে কথা বলার টিপস' },
    { time: '10:30 PM', title: 'Q&A সেশন (লাইভ আপনার প্রশ্নের উত্তর)' },
    { time: '11:00 PM', title: 'শেষ করা ও গিভঅ্যাওয়ে' },
  ];

  const faqs = [
    { q: 'ওয়েবিনারে অংশগ্রহণ করতে কি কোনো ফি লাগবে?', a: 'না, একদম ফ্রি! সবাই যোগ দিতে পারবেন।' },
    { q: 'কীভাবে ওয়েবিনারে যোগ দেব?', a: 'রেজিস্ট্রেশন করার পর আপনাকে ইমেইল ও এসএমএস-এ জুম ওয়েবিনারের লিংক পাঠানো হবে।' },
    { q: 'রেজিস্ট্রেশন করার পর কীভাবে নিশ্চিত হব?', a: 'ফর্ম জমা দেয়ার সাথে সাথেই স্ক্রিনে কনফার্মেশন পাবেন এবং ইমেইলে ডিটেইলস পৌঁছাবে।' },
    { q: 'ওয়েবিনার রেকর্ড করা হবে কি?', a: 'হ্যাঁ, তবে লাইভ অংশগ্রহণকারীদের জন্য থাকবে এক্সক্লুসিভ গিভঅ্যাওয়ে ও প্রশ্নোত্তর।' },
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroLeft}>
              <span className={styles.webinarBadge}>🎁 ফ্রি লাইভ ওয়েবিনার</span>
              <h1 className={`${styles.heroTitle} font-bn`}>
                IELTS Band 7+ পাওয়ার <br />
                <span className={styles.titleHighlight}>গোপন স্ট্র্যাটেজি</span>
              </h1>
              <p className={`${styles.heroDesc} font-bn`}>
                নিজের প্রস্তুতিকে স্মার্ট করুন এবং পরীক্ষায় আত্মবিশ্বাসের সাথে আপনার সেরা স্কোর নিশ্চিত করুন।
              </p>

              <div className={styles.infoRow}>
                <div className={styles.infoItem}>
                  <Calendar size={18} color="#EF4444" />
                  <div>
                    <span className={styles.infoLabel}>তারিখ</span>
                    <strong className="font-bn">25 মে, 2025 (রবিবার)</strong>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Clock size={18} color="#EF4444" />
                  <div>
                    <span className={styles.infoLabel}>সময়</span>
                    <strong className="font-bn">রাত 8:00 টা (BST)</strong>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <Video size={18} color="#EF4444" />
                  <div>
                    <span className={styles.infoLabel}>লাইভ সেমিনার</span>
                    <strong>Zoom Webinar</strong>
                  </div>
                </div>
              </div>

              <div className={styles.socialProofRow}>
                <div className={styles.avatarGroup}>
                  <span style={{ background: '#6C3CE1' }}>A</span>
                  <span style={{ background: '#3B82F6' }}>S</span>
                  <span style={{ background: '#F97316' }}>R</span>
                </div>
                <span className={`${styles.socialProofText} font-bn`}>
                  <strong>10,000+ শিক্ষার্থী</strong> আগেই রেজিস্ট্রেশন করেছেন!
                </span>
              </div>
            </div>

            {/* Registration Form Box */}
            <div className={styles.regFormCard}>
              <h3 className={`${styles.formTitle} font-bn`}>ফ্রি ওয়েবিনারে রেজিস্ট্রেশন করুন</h3>
              <p className={`${styles.formSub} font-bn`}>সীমিত আসন! এখনই আপনার সিট বুকিং করুন।</p>

              {submitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle2 size={48} color="#10B981" />
                  <h4 className="font-bn">রেজিস্ট্রেশন সফল হয়েছে!</h4>
                  <p className="font-bn">আপনার ইমেইলে জুম লিংক পাঠানো হয়েছে। দেখা হবে ওয়েবিনারে!</p>
                </div>
              ) : (
                <form className={styles.formElement} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <label className="font-bn">আপনার নাম</label>
                    <input
                      type="text"
                      placeholder="আপনার পূর্ণ নাম দিন"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="font-bn"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className="font-bn">আপনার ইমেইল</label>
                    <input
                      type="email"
                      placeholder="আপনার ইমেইল অ্যাড্রেস দিন"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="font-bn"
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className="font-bn">মোবাইল নম্বর (ঐচ্ছিক)</label>
                    <input
                      type="tel"
                      placeholder="017XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="font-bn"
                    />
                  </div>

                  <button type="submit" className={`${styles.submitRegBtn} font-bn`}>
                    ফ্রি রেজিস্ট্রেশন করুন →
                  </button>

                  <span className={styles.privacyNote}>
                    🔒 100% Free | No Spam | Limited Seats
                  </span>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Learning Outcomes Section */}
        <section className="section">
          <div className="container">
            <div className={styles.sectionHeaderCenter}>
              <h2 className={`${styles.sectionTitle} font-bn`}>এই ওয়েবিনার থেকে আপনি যা শিখবেন</h2>
            </div>

            <div className={styles.outcomesGrid}>
              {learningOutcomes.map((item, idx) => (
                <div key={idx} className={styles.outcomeCard}>
                  <span className={styles.outcomeIcon}>{item.icon}</span>
                  <h3 className={`${styles.outcomeTitle} font-bn`}>{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Countdown Banner */}
        <section className={styles.timerSection}>
          <div className={`container ${styles.timerFlex}`}>
            <div className={styles.timerLeft}>
              <Clock size={32} color="#EF4444" />
              <div>
                <h3 className={`${styles.timerHeading} font-bn`}>সিট খুবই সীমিত! রেজিস্ট্রেশন বন্ধ হবে:</h3>
              </div>
            </div>

            <div className={styles.timerBoxes}>
              <div className={styles.timeBox}><span>02</span><small className="font-bn">দিন</small></div>
              <div className={styles.timeBox}><span>14</span><small className="font-bn">ঘণ্টা</small></div>
              <div className={styles.timeBox}><span>36</span><small className="font-bn">মিনিট</small></div>
              <div className={styles.timeBox}><span>45</span><small className="font-bn">সেকেন্ড</small></div>
            </div>

            <button className={`${styles.timerCtaBtn} font-bn`}>
              এখনই রেজিস্ট্রেশন করুন →
            </button>
          </div>
        </section>

        {/* Agenda & Speaker Section */}
        <section className="section">
          <div className={`container ${styles.twoColLayout}`}>
            {/* Agenda List */}
            <div className={styles.panelCard}>
              <h3 className={`${styles.panelTitle} font-bn`}>ওয়েবিনারের আলোচ্যসূচী</h3>
              <div className={styles.timelineList}>
                {agendaItems.map((item, idx) => (
                  <div key={idx} className={styles.timelineItem}>
                    <span className={styles.timeTag}>{item.time}</span>
                    <span className={styles.timelineDot} />
                    <span className={`${styles.timelineText} font-bn`}>{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Speaker Card */}
            <div className={styles.panelCard}>
              <h3 className={`${styles.panelTitle} font-bn`}>আপনার সেশন হোস্ট</h3>
              <div className={styles.speakerProfile}>
                <div className={styles.speakerAvatar}>A</div>
                <h4 className={styles.speakerName}>আরিফুল ইসলাম</h4>
                <span className={styles.speakerRole}>IELTS Expert & Trainer</span>

                <ul className={styles.speakerCreds}>
                  <li className="font-bn"><CheckCircle2 size={14} color="#10B981" /> 8+ বছরের IELTS কোচিং অভিজ্ঞতা</li>
                  <li className="font-bn"><CheckCircle2 size={14} color="#10B981" /> 20,000+ শিক্ষার্থীকে Band 7+ পেতে সহায়তা করেছেন</li>
                  <li className="font-bn"><CheckCircle2 size={14} color="#10B981" /> IDP Certified IELTS Trainer</li>
                  <li className="font-bn"><CheckCircle2 size={14} color="#10B981" /> লেখক: "IELTS প্রস্তুতির সেরা কৌশল"</li>
                </ul>

                <div className={styles.giveawayBox}>
                  <div className={styles.giftHeader}>
                    <Gift size={20} color="#EF4444" />
                    <strong className="font-bn">LIVE গিভঅ্যাওয়ে!</strong>
                  </div>
                  <p className={`${styles.giftText} font-bn`}>
                    ওয়েবিনারে অংশগ্রহণকারীদের জন্য থাকবে Exclusive Study Materials এবং কোর্স ডিসকাউন্ট!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={`section ${styles.testimonialSection}`}>
          <div className="container">
            <div className={styles.sectionHeaderCenter}>
              <h2 className={`${styles.sectionTitle} font-bn`}>আমাদের শিক্ষার্থীরা যা বলছে</h2>
            </div>

            <div className={styles.testimonialGrid}>
              <div className={styles.testiCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={`${styles.testiText} font-bn`}>
                  "ওয়েবিনারের স্ট্র্যাটেজি ফলো করে আমি Listening এ 8.0 পেয়েছি! অসাধারণ গাইডলাইন।"
                </p>
                <div className={styles.testiUser}>
                  <div className={styles.testiAvatar}>T</div>
                  <div>
                    <strong className={styles.testiName}>Tanzila Rahman</strong>
                    <span className={styles.testiBand}>Band 8.0 Achiever</span>
                  </div>
                </div>
              </div>

              <div className={styles.testiCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={`${styles.testiText} font-bn`}>
                  "IELTS Writing এর রোডম্যাপটা অসাধারণ ছিল! অনেক কিছু শিখতে পেরেছি।"
                </p>
                <div className={styles.testiUser}>
                  <div className={styles.testiAvatar} style={{ background: '#3B82F6' }}>R</div>
                  <div>
                    <strong className={styles.testiName}>Rafid Hossain</strong>
                    <span className={styles.testiBand}>Band 7.5 Achiever</span>
                  </div>
                </div>
              </div>

              <div className={styles.testiCard}>
                <div className={styles.stars}>★★★★★</div>
                <p className={`${styles.testiText} font-bn`}>
                  "Speaking নিয়ে যে ভয়টা ছিল তা কেটে গেছে। ধন্যবাদ IELTS Revolution!"
                </p>
                <div className={styles.testiUser}>
                  <div className={styles.testiAvatar} style={{ background: '#EF4444' }}>N</div>
                  <div>
                    <strong className={styles.testiName}>Nusrat Jahan</strong>
                    <span className={styles.testiBand}>Band 8.0 Achiever</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className={styles.sectionHeaderCenter}>
              <h2 className={`${styles.sectionTitle} font-bn`}>সাধারণ জিজ্ঞাসা</h2>
            </div>

            <div className={styles.faqList}>
              {faqs.map((f, idx) => (
                <div key={idx} className={styles.faqItem}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  >
                    <span className="font-bn">{f.q}</span>
                    {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openFaq === idx && (
                    <p className={`${styles.faqAnswer} font-bn`}>{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className={styles.bottomCtaBanner}>
          <div className={`container ${styles.bottomCtaFlex}`}>
            <div>
              <h2 className={`${styles.bottomCtaTitle} font-bn`}>এখনই আপনার সিট নিশ্চিত করুন!</h2>
              <p className={`${styles.bottomCtaSub} font-bn`}>সীমিত আসন! এখনই ফ্রি রেজিস্ট্রেশন করে রাখুন।</p>
            </div>
            <button className={`${styles.bottomRegBtn} font-bn`}>
              ফ্রি রেজিস্ট্রেশন করুন →
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
