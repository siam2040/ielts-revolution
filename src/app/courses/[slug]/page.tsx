'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Star, Users, BookOpen, Clock, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp,
  Play, Download, Award, Target, FileText, Check, Lock, ShoppingCart, ArrowRight
} from 'lucide-react';
import styles from '../Course.module.css';

export default function CourseDetailPage() {
  const [activeTab, setActiveTab] = useState('about');
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const modules = [
    {
      title: 'Module 1: IELTS Overview & Test Strategy',
      lessonsCount: '6 Lessons',
      lessons: [
        { title: 'Welcome & Course Orientation', duration: '12:45', free: true },
        { title: 'IELTS Band Descriptors Explained', duration: '18:20', free: true },
        { title: 'Academic vs General Training', duration: '15:10', free: false },
        { title: 'Test Day Preparation & Strategy', duration: '20:00', free: false },
      ],
    },
    {
      title: 'Module 2: Listening Section',
      lessonsCount: '28 Lessons',
      lessons: [
        { title: 'Listening Part 1: Form Completion', duration: '22:15', free: false },
        { title: 'Listening Part 2: Multiple Choice & Maps', duration: '25:40', free: false },
        { title: 'Listening Part 3 & 4: Academic Talks', duration: '30:10', free: false },
      ],
    },
    {
      title: 'Module 3: Reading Section',
      lessonsCount: '28 Lessons',
      lessons: [
        { title: 'Skimming & Scanning Techniques', duration: '24:00', free: false },
        { title: 'True / False / Not Given Mastery', duration: '28:30', free: false },
        { title: 'Matching Headings & Summary Completion', duration: '26:15', free: false },
      ],
    },
    {
      title: 'Module 4: Writing Section',
      lessonsCount: '32 Lessons',
      lessons: [
        { title: 'Writing Task 1: Chart & Graph Analysis', duration: '25:00', free: false },
        { title: 'Writing Task 2: Essay Structure & Cohesion', duration: '35:20', free: false },
        { title: 'High-Band Vocabulary & Complex Sentence Patterns', duration: '30:00', free: false },
      ],
    },
    {
      title: 'Module 5: Speaking Section',
      lessonsCount: '20 Lessons',
      lessons: [
        { title: 'Speaking Part 1: Fluency & Confidence', duration: '20:15', free: false },
        { title: 'Speaking Part 2: Cue Card Strategy & Structure', duration: '28:00', free: false },
        { title: 'Speaking Part 3: Deep Discussion Techniques', duration: '24:45', free: false },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <main className={styles.detailMain}>
        {/* Breadcrumb Header */}
        <div className={styles.breadcrumbBar}>
          <div className="container">
            <div className={`${styles.breadcrumbs} font-bn`}>
              <Link href="/">হোম</Link>
              <span>›</span>
              <Link href="/courses">কোর্সসমূহ</Link>
              <span>›</span>
              <span className={styles.activeBreadcrumb}>IELTS Complete Preparation (Band 6.5-8+)</span>
            </div>
          </div>
        </div>

        {/* Hero Banner Header */}
        <section className={styles.detailHero}>
          <div className={`container ${styles.heroLayout}`}>
            {/* Left Header Content */}
            <div className={styles.heroLeftCol}>
              <span className={styles.bestsellerTag}>বেস্টসেলার কোর্স</span>
              <h1 className={styles.courseHeaderTitle}>IELTS Complete Preparation (Band 6.5-8+)</h1>
              <p className={`${styles.courseHeaderSubtitle} font-bn`}>
                Listening, Reading, Writing & Speaking — সব সেকশন কভার করে আপনাকে Band 6.5 থেকে 8+ এর মধ্যে নিতে আমাদের সম্পূর্ণ গাইডলাইন।
              </p>

              <div className={styles.ratingInfoRow}>
                <div className={styles.ratingStars}>
                  <Star size={16} fill="#F59E0B" color="#F59E0B" />
                  <strong>4.8</strong>
                  <span>(236 Reviews)</span>
                </div>
                <div className={styles.enrolledInfo}>
                  <Users size={16} />
                  <span className="font-bn">10,000+ শিক্ষার্থী এনরোল করেছেন</span>
                </div>
              </div>

              {/* Feature Pills */}
              <div className={styles.featurePillsGrid}>
                <div className={styles.pillItem}>
                  <CheckCircle2 size={16} className={styles.pillIcon} />
                  <span className="font-bn">৪টি সেকশন কভার করবে</span>
                </div>
                <div className={styles.pillItem}>
                  <CheckCircle2 size={16} className={styles.pillIcon} />
                  <span className="font-bn">১২০+ ভিডিও লেসন</span>
                </div>
                <div className={styles.pillItem}>
                  <CheckCircle2 size={16} className={styles.pillIcon} />
                  <span className="font-bn">৫০+ প্র্যাকটিস টেস্ট ও কুইজ</span>
                </div>
                <div className={styles.pillItem}>
                  <CheckCircle2 size={16} className={styles.pillIcon} />
                  <span className="font-bn">ডাউনলোডযোগ্য স্টাডি মেটেরিয়াল</span>
                </div>
                <div className={styles.pillItem}>
                  <CheckCircle2 size={16} className={styles.pillIcon} />
                  <span className="font-bn">লাইভ টেস্ট এক্সাম</span>
                </div>
              </div>
            </div>

            {/* Right Video / Price Card */}
            <div className={styles.heroRightCard}>
              <div className={styles.videoPreviewBox}>
                <div className={styles.videoOverlay}>
                  <div className={styles.videoPlayBtn}>
                    <Play size={28} fill="currentColor" />
                  </div>
                  <span className={styles.previewText}>Preview Course</span>
                </div>
              </div>

              <div className={styles.pricingBody}>
                <div className={styles.priceRow}>
                  <span className={styles.priceBig}>$99</span>
                  <span className={styles.priceOld}>$199</span>
                  <span className={`${styles.discountBadge} font-bn`}>50% ছাড় চলছে!</span>
                </div>

                <div className={styles.featuresChecklist}>
                  <div className={styles.checkRow}><Check size={16} /><span>All Levels</span></div>
                  <div className={styles.checkRow}><Check size={16} /><span>120+ Lessons</span></div>
                  <div className={styles.checkRow}><Check size={16} /><span>15+ Hours Content</span></div>
                  <div className={styles.checkRow}><Check size={16} /><span>Certificate of Completion</span></div>
                  <div className={styles.checkRow}><Check size={16} /><span>Lifetime Access</span></div>
                  <div className={styles.checkRow}><Check size={16} /><span>Mobile & Desktop Access</span></div>
                  <div className={styles.checkRow}><Check size={16} /><span>30 Days Money Back Guarantee</span></div>
                </div>

                <button className={`${styles.enrollCtaBtn} font-bn`}>
                  এখনই এনরোল করুন →
                </button>
                <button className={`${styles.addToCartBtn} font-bn`}>
                  <ShoppingCart size={16} />
                  <span>কার্টে যোগ করুন</span>
                </button>

                <div className={styles.secureNote}>
                  <ShieldCheck size={14} />
                  <span>100% Secure Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Tabs & Main Details Section */}
        <section className={styles.tabsSection}>
          <div className={`container ${styles.detailContainer}`}>
            {/* Left Content Area */}
            <div className={styles.mainDetailCol}>
              {/* Tab Navigation */}
              <div className={styles.tabNavRow}>
                <button
                  className={`${styles.tabNavBtn} ${activeTab === 'about' ? styles.tabNavActive : ''}`}
                  onClick={() => setActiveTab('about')}
                >
                  <span className="font-bn">কোর্স সম্পর্কে</span>
                </button>
                <button
                  className={`${styles.tabNavBtn} ${activeTab === 'curriculum' ? styles.tabNavActive : ''}`}
                  onClick={() => setActiveTab('curriculum')}
                >
                  <span className="font-bn">কারিকুলাম</span>
                </button>
                <button
                  className={`${styles.tabNavBtn} ${activeTab === 'instructor' ? styles.tabNavActive : ''}`}
                  onClick={() => setActiveTab('instructor')}
                >
                  <span className="font-bn">ইন্সট্রাক্টর</span>
                </button>
                <button
                  className={`${styles.tabNavBtn} ${activeTab === 'reviews' ? styles.tabNavActive : ''}`}
                  onClick={() => setActiveTab('reviews')}
                >
                  <span className="font-bn">রিভিউ (236)</span>
                </button>
                <button
                  className={`${styles.tabNavBtn} ${activeTab === 'faq' ? styles.tabNavActive : ''}`}
                  onClick={() => setActiveTab('faq')}
                >
                  <span>FAQ</span>
                </button>
              </div>

              {/* Course About */}
              <div className={styles.aboutBox}>
                <h3 className={`${styles.sectionHeading} font-bn`}>কোর্স সম্পর্কে</h3>
                <p className={`${styles.aboutText} font-bn`}>
                  এই কোর্সে আপনি IELTS এর প্রতিটি সেকশন নিয়ে গভীরভাবে শিখবেন এবং প্রচুর প্র্যাকটিসের মাধ্যমে আপনার স্কোর দ্রুত উন্নত করবেন। বাস্তব পরীক্ষার মতো মক টেস্ট, এক্সপার্ট স্ট্র্যাটেজি ও ডিটেইল ফিডব্যাক আপনাকে সফলতার পথে এগিয়ে নেবে।
                </p>

                <div className={styles.aboutChecklist}>
                  <div className={styles.aboutCheckItem}>
                    <CheckCircle2 size={18} className={styles.checkIconColor} />
                    <span className="font-bn">পরীক্ষার সম্পূর্ণ গাইডলাইন ও স্ট্র্যাটেজি</span>
                  </div>
                  <div className={styles.aboutCheckItem}>
                    <CheckCircle2 size={18} className={styles.checkIconColor} />
                    <span className="font-bn">প্রতিটি সেকশনের জন্য টিপস, ট্রিক্স ও শর্টকাট টেকনিক</span>
                  </div>
                  <div className={styles.aboutCheckItem}>
                    <CheckCircle2 size={18} className={styles.checkIconColor} />
                    <span className="font-bn">রিয়েল এক্সাম ভিত্তিক প্র্যাকটিস টেস্ট ও কুইজ</span>
                  </div>
                  <div className={styles.aboutCheckItem}>
                    <CheckCircle2 size={18} className={styles.checkIconColor} />
                    <span className="font-bn">ডিটেইল অ্যানালাইসিস ও স্কোর ইমপ্রুভমেন্ট গাইড</span>
                  </div>
                  <div className={styles.aboutCheckItem}>
                    <CheckCircle2 size={18} className={styles.checkIconColor} />
                    <span className="font-bn">ডাউনলোডযোগ্য পিডিএফ, নোটস ও টেমপ্লেট</span>
                  </div>
                  <div className={styles.aboutCheckItem}>
                    <CheckCircle2 size={18} className={styles.checkIconColor} />
                    <span className="font-bn">লাইফটাইম অ্যাক্সেস - একবার কিনে চিরদিন শিখুন</span>
                  </div>
                </div>
              </div>

              {/* Course Curriculum Accordion */}
              <div className={styles.curriculumBox}>
                <div className={styles.currHeaderRow}>
                  <h3 className={`${styles.sectionHeading} font-bn`}>কোর্স কারিকুলাম</h3>
                  <span className={styles.currMeta}>মোট 5 টি মডিউল • 120+ লেসন • 15+ ঘণ্টা কনটেন্ট</span>
                </div>

                <div className={styles.accordionGroup}>
                  {modules.map((m, idx) => (
                    <div key={idx} className={styles.accordionItem}>
                      <button
                        className={styles.accordionHeader}
                        onClick={() => toggleAccordion(idx)}
                      >
                        <span className={styles.accordionTitle}>{m.title}</span>
                        <div className={styles.accordionRight}>
                          <span className={styles.accordionCount}>{m.lessonsCount}</span>
                          {openAccordion === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </button>

                      {openAccordion === idx && (
                        <div className={styles.accordionBody}>
                          {m.lessons.map((les, lIdx) => (
                            <div key={lIdx} className={styles.lessonRow}>
                              <div className={styles.lessonLeft}>
                                <Play size={14} className={styles.lessonPlayIcon} />
                                <span>{les.title}</span>
                              </div>
                              <div className={styles.lessonRight}>
                                {les.free ? (
                                  <span className={`${styles.freeLessonBadge} font-bn`}>ফ্রি প্রিভিউ</span>
                                ) : (
                                  <Lock size={12} className={styles.lockIcon} />
                                )}
                                <span className={styles.lessonDuration}>{les.duration}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* What You'll Get Section */}
              <div className={styles.benefitsBox}>
                <h3 className={`${styles.sectionHeading} font-bn`}>এই কোর্স থেকে আপনি যা পাবেন</h3>
                <div className={styles.benefitsGrid}>
                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon} style={{ background: '#EDE5FF', color: '#6C3CE1' }}>
                      <BookOpen size={24} />
                    </div>
                    <h4 className={`${styles.benefitTitle} font-bn`}>প্রফেশনাল ভিডিও লেসন</h4>
                    <p className={`${styles.benefitDesc} font-bn`}>সহজ ভাষায় ব্যাখ্যা করা সহজবোধ্য ব্যাখ্যা</p>
                  </div>

                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon} style={{ background: '#DCFCE7', color: '#16A34A' }}>
                      <Target size={24} />
                    </div>
                    <h4 className={`${styles.benefitTitle} font-bn`}>প্র্যাকটিস টেস্ট</h4>
                    <p className={`${styles.benefitDesc} font-bn`}>রিয়েল এক্সাম সিমুলেশন ও ফিডব্যাক</p>
                  </div>

                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon} style={{ background: '#DBEAFE', color: '#2563EB' }}>
                      <FileText size={24} />
                    </div>
                    <h4 className={`${styles.benefitTitle} font-bn`}>স্টাডি মেটেরিয়াল</h4>
                    <p className={`${styles.benefitDesc} font-bn`}>PDF, নোটস, টেমপ্লেট ও টিপস</p>
                  </div>

                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon} style={{ background: '#DCFCE7', color: '#16A34A' }}>
                      <Award size={24} />
                    </div>
                    <h4 className={`${styles.benefitTitle} font-bn`}>পার্সোনাল প্রোগ্রেস ট্র্যাক</h4>
                    <p className={`${styles.benefitDesc} font-bn`}>আপনার অগ্রগতি ট্রাক ও উন্নতির মাধ্যম</p>
                  </div>

                  <div className={styles.benefitCard}>
                    <div className={styles.benefitIcon} style={{ background: '#FEE2E2', color: '#EF4444' }}>
                      <Award size={24} />
                    </div>
                    <h4 className={`${styles.benefitTitle} font-bn`}>সার্টিফিকেট</h4>
                    <p className={`${styles.benefitDesc} font-bn`}>কোর্স কমপ্লিট করলে সার্টিফিকেট পান</p>
                  </div>
                </div>
              </div>

              {/* Student Reviews */}
              <div className={styles.reviewsBox}>
                <div className={styles.reviewsHeaderRow}>
                  <h3 className={`${styles.sectionHeading} font-bn`}>শিক্ষার্থীদের রিভিউ</h3>
                  <span className={`${styles.seeAllReviews} font-bn`}>সব রিভিউ দেখুন →</span>
                </div>
                <div className={styles.reviewsList}>
                  <div className={styles.reviewItemCard}>
                    <div className={styles.reviewStars}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                    <p className={`${styles.reviewComment} font-bn`}>
                      কোর্সের স্ট্র্যাটেজি এবং প্র্যাকটিস টেস্টগুলো অসাধারণ! আমি Band 7.5 পেয়েছি।
                    </p>
                    <div className={styles.reviewerInfo}>
                      <div className={styles.revAvatar}>T</div>
                      <div>
                        <span className={styles.revName}>Tanzila Rahman</span>
                        <span className={styles.revBand}>Band 7.5 Achiever</span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.reviewItemCard}>
                    <div className={styles.reviewStars}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#F59E0B" color="#F59E0B" />
                      ))}
                    </div>
                    <p className={`${styles.reviewComment} font-bn`}>
                      প্রতিটি সেকশন খুব সুন্দরভাবে ব্যাখ্যা করা হয়েছে। Writing সেকশন এর গাইডলাইন খুবই সহায়ক।
                    </p>
                    <div className={styles.reviewerInfo}>
                      <div className={styles.revAvatar} style={{ background: '#3B82F6' }}>R</div>
                      <div>
                        <span className={styles.revName}>Rafid Hossain</span>
                        <span className={styles.revBand}>Band 7.0 Achiever</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar Area */}
            <aside className={styles.sideCol}>
              {/* Who is this for card */}
              <div className={styles.sideCard}>
                <h4 className={`${styles.sideCardTitle} font-bn`}>এই কোর্সটি কার জন্য?</h4>
                <ul className={styles.whoList}>
                  <li className="font-bn"><Check size={16} className={styles.checkGreen} />IELTS পরীক্ষার জন্য প্রস্তুতি নিচ্ছেন এমন শিক্ষার্থীদের জন্য</li>
                  <li className="font-bn"><Check size={16} className={styles.checkGreen} />Band 6.5-8+ পেতে ইচ্ছুক শিক্ষার্থীদের জন্য</li>
                  <li className="font-bn"><Check size={16} className={styles.checkGreen} />উচ্চ শিক্ষা, চাকরি বা অভিবাসনের জন্য IELTS প্রয়োজন যাদের</li>
                  <li className="font-bn"><Check size={16} className={styles.checkGreen} />সেলফ স্টাডি ও গাইডলাইন ফলো করতে চান এমনদের জন্য</li>
                </ul>
              </div>

              {/* Instructor Card */}
              <div className={styles.sideCard}>
                <h4 className={`${styles.sideCardTitle} font-bn`}>আপনার ইন্সট্রাক্টর</h4>
                <div className={styles.instructorProfile}>
                  <div className={styles.instPhotoArea}>A</div>
                  <h4 className={styles.instNameTitle}>Anik Islam</h4>
                  <span className={styles.instRoleTitle}>IELTS Expert & Trainer</span>
                  <ul className={styles.instCreds}>
                    <li className="font-bn"><Check size={14} /> 8+ বছরের IELTS কোচিং অভিজ্ঞতা</li>
                    <li className="font-bn"><Check size={14} /> 20,000+ শিক্ষার্থীকে Band 7+ পেতে সহায়তা করেছেন</li>
                    <li className="font-bn"><Check size={14} /> IDP Certified IELTS Trainer</li>
                  </ul>
                  <div className={styles.signatureGraphic}>Anik Islam</div>
                </div>
              </div>

              {/* Rating Summary Box */}
              <div className={styles.sideCardCenter}>
                <h4 className={`${styles.sideCardTitle} font-bn`}>শিক্ষার্থীদের ভালোবাসায়</h4>
                <div className={styles.bigRatingVal}>10,000+</div>
                <span className={`${styles.bigRatingSub} font-bn`}>শিক্ষার্থী এনরোল করেছেন</span>
                <div className={styles.bigStarRow}>
                  <span className={styles.bigScoreNum}>4.8</span>
                  <div className={styles.starsFlex}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                </div>
                <span className={styles.reviewsCountLabel}>(236 Reviews)</span>
              </div>
            </aside>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className={styles.detailBottomBanner}>
          <div className={`container ${styles.bottomBannerFlex}`}>
            <div>
              <h2 className={`${styles.bottomBannerHeading} font-bn`}>
                আপনার IELTS স্বপ্ন পূরণের যাত্রা শুরু করুন আজই!
              </h2>
              <p className={`${styles.bottomBannerSub} font-bn`}>
                এখনই এনরোল করুন এবং Band 7+ এর নিশ্চয়তা পান!
              </p>
            </div>
            <button className={`${styles.bottomEnrollBtn} font-bn`}>
              এখনই এনরোল করুন →
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
