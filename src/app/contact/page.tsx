'use client';

import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import {
  Mail, MessageSquare, Phone, MapPin, Headphones, Send, ChevronDown, ChevronUp,
  ShieldCheck, CheckCircle2
} from 'lucide-react';
import styles from './Contact.module.css';

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'general', message: '' });

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const contactFaqs = [
    {
      q: 'How quickly do you respond to inquiries?',
      a: 'We usually respond within 24 hours on business days (Mon-Fri). For urgent course support, live chat is available.'
    },
    {
      q: 'Can I request a demo of your courses?',
      a: 'Yes! We offer free preview lessons on all our courses so you can test our learning platform before enrolling.'
    },
    {
      q: 'Do you offer refund if I am not satisfied?',
      a: 'Absolutely. We offer a 30-day money-back guarantee for all full preparation courses if you are not satisfied.'
    },
    {
      q: 'I have a technical issue. What should I do?',
      a: 'Please reach out via live chat or select "Technical Support" in the subject dropdown for priority assistance.'
    },
    {
      q: 'How can I suggest a new feature or content?',
      a: 'We love feedback! Feel free to send your suggestions using the contact form on this page.'
    },
    {
      q: 'Where can I find more help?',
      a: 'Visit our Help Center / FAQ page or join our community group for student support and peer discussion.'
    },
  ];

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={`container ${styles.heroContainer}`}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>We're Here to Help You</h1>
              <p className={styles.heroCursive}>Your success is our mission!</p>
              <p className={styles.heroDesc}>
                Have a question, suggestion, or need support? We'd love to hear from you. Our team will get back to you as soon as possible.
              </p>
            </div>
            <div className={styles.mailboxGraphic}>
              <div className={styles.mailboxOuter}>
                <div className={styles.mailboxFlag} />
                <div className={styles.letterEnvelope}>
                  <Mail size={32} color="#6C3CE1" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Grid */}
        <section className="section">
          <div className={`container ${styles.formGrid}`}>
            {/* Form Column */}
            <div className={styles.formCard}>
              <h2 className={styles.cardTitle}>Send us a message</h2>
              <p className={styles.cardSub}>Fill out the form below and we'll get back to you shortly.</p>

              {submitted ? (
                <div className={styles.sentSuccess}>
                  <CheckCircle2 size={48} color="#10B981" />
                  <h3>Message Sent!</h3>
                  <p>Thank you for contacting us. We will reply to your email within 24 hours.</p>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.fieldGroup}>
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="youremail@gmail.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label>Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    >
                      <option value="general">What is this about?</option>
                      <option value="course">Course Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing & Refund</option>
                      <option value="feedback">Feedback / Suggestion</option>
                    </select>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label>Message</label>
                    <textarea
                      rows={5}
                      placeholder="Type your message here..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={styles.sendMsgBtn}>
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>

                  <div className={styles.privacyNote}>
                    <ShieldCheck size={14} />
                    <span>We respect your privacy. Your information is safe with us.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Info Sidebar Column */}
            <div className={styles.infoCol}>
              <h2 className={styles.cardTitle}>Get in touch</h2>

              <div className={styles.contactItemCard}>
                <div className={styles.itemIconBox} style={{ background: '#EDE5FF', color: '#6C3CE1' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <strong className={styles.itemTitle}>Email Us</strong>
                  <span className={styles.itemSub}>We usually reply within 24 hours</span>
                  <a href="mailto:support@ieltsrevolution.com" className={styles.itemLink}>
                    support@ieltsrevolution.com
                  </a>
                </div>
              </div>

              <div className={styles.contactItemCard}>
                <div className={styles.itemIconBox} style={{ background: '#FEF3C7', color: '#D97706' }}>
                  <MessageSquare size={20} />
                </div>
                <div>
                  <strong className={styles.itemTitle}>Live Chat</strong>
                  <span className={styles.itemSub}>Chat with our support team</span>
                  <span className={styles.itemActionLink}>Start Live Chat</span>
                </div>
              </div>

              <div className={styles.contactItemCard}>
                <div className={styles.itemIconBox} style={{ background: '#DCFCE7', color: '#16A34A' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <strong className={styles.itemTitle}>Call Us</strong>
                  <span className={styles.itemSub}>Mon - Fri: 9:00 AM - 6:00 PM (GMT+6)</span>
                  <span className={styles.itemPhone}>+880 1234-567890</span>
                </div>
              </div>

              <div className={styles.contactItemCard}>
                <div className={styles.itemIconBox} style={{ background: '#DBEAFE', color: '#2563EB' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <strong className={styles.itemTitle}>Our Location</strong>
                  <span className={styles.itemSub}>Dhaka, Bangladesh</span>
                  <span className={styles.itemNote}>We're a remote-first team</span>
                </div>
              </div>

              {/* Support Card */}
              <div className={styles.supportBox}>
                <div className={styles.supportIcon}>
                  <Headphones size={24} color="#6C3CE1" />
                </div>
                <div>
                  <h4 className={styles.supportTitle}>We're here for you</h4>
                  <p className={styles.supportDesc}>
                    Our support team is available 5 days a week to help you on your IELTS journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`section ${styles.faqSection}`}>
          <div className="container">
            <div className={styles.faqHeaderCenter}>
              <span className={styles.faqBadge}>FAQ</span>
              <h2 className={styles.faqMainTitle}>Frequently Asked Questions</h2>
              <p className={styles.faqSubTitle}>Quick answers to common questions</p>
            </div>

            <div className={styles.faqTwoColGrid}>
              {contactFaqs.map((f, idx) => (
                <div key={idx} className={styles.faqCardItem}>
                  <button className={styles.faqHeaderBtn} onClick={() => toggleFaq(idx)}>
                    <span>{f.q}</span>
                    {openFaq === idx ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {openFaq === idx && (
                    <p className={styles.faqAnswerText}>{f.a}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stay in the Loop Newsletter */}
        <section className={styles.stayLoopSection}>
          <div className={`container ${styles.loopContainer}`}>
            <div className={styles.loopLeft}>
              <div className={styles.loopIconWrapper}>
                <Mail size={24} color="#6C3CE1" />
              </div>
              <div>
                <h3 className={styles.loopTitle}>Stay in the loop</h3>
                <p className={styles.loopDesc}>Subscribe to get the latest tips, free resources, and exclusive updates.</p>
              </div>
            </div>
            <form className={styles.loopForm} onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className={styles.loopInput} />
              <button type="submit" className={styles.loopSubmitBtn}>Subscribe</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
