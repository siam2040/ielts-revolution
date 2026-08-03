'use client';

import { Star, Quote } from 'lucide-react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Sarah J.',
    band: 'Band 7.5 Achiever',
    avatar: 'S',
    color: '#6C3CE1',
    text: 'IELTS Revolution পড়তেই Writing স্কোর ৬.০ থেকে ৭.৫ হয়ে গেছে! শিক্ষকদের সাহায্য এবং মক টেস্ট গুলো অসাধারণ।',
    rating: 5,
  },
  {
    name: 'Tanzila Rahman',
    band: 'Band 8.0 Achiever',
    avatar: 'T',
    color: '#3B82F6',
    text: 'এখনো বিশ্বাস হচ্ছে না যে আমার ফলাফল এত ভালো হয়েছে! Reading এর কৌশলগুলো সত্যিই কাজে দিয়েছে। ৬.০ থেকে ৭.৫ পেয়ে গেছি!',
    rating: 5,
  },
  {
    name: 'Rafid Hossain',
    band: 'Band 7.0 Achiever',
    avatar: 'R',
    color: '#F97316',
    text: 'এতদিন ভয় পাচ্ছিলাম IELTS নিয়ে কিন্তু এই কোর্সের Strategy আর Practice Tests করে আমি Writing নিয়ে confident হয়ে গেছি। Highly Recommend!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className="section-title font-bn">শিক্ষার্থীদের আলোচনা</h2>
          <p className="section-subtitle font-bn">
            আমাদের শিক্ষার্থীরা কী বলছেন তাদের সাফল্যের গল্প
          </p>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.quoteIcon}>
                <Quote size={24} />
              </div>
              <div className={styles.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
              <p className={`${styles.testimonialText} font-bn`}>{testimonial.text}</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.avatar} style={{ background: testimonial.color }}>
                  {testimonial.avatar}
                </div>
                <div>
                  <span className={styles.authorName}>{testimonial.name}</span>
                  <span className={styles.authorBand}>{testimonial.band}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
