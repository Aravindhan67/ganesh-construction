import React, { useEffect, useRef, useState } from 'react';
import SectionLabel from '../common/SectionLabel';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../reactbits/ScrollReveal';
import { motion, useInView } from 'framer-motion';

const Counter = ({ from, to, duration, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        const currentCount = Math.floor(progress * (to - from) + from);
        
        // Handle decimals if 'to' is a float (e.g. 4.8)
        if (to % 1 !== 0) {
            setCount((progress * (to - from) + from).toFixed(1));
        } else {
            setCount(currentCount);
        }
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(to);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { value: 25, suffix: '+', label: 'Years of Experience' },
    { value: 180, suffix: '+', label: 'Completed Projects' },
    { value: 4.8, suffix: 'M', label: 'Square Feet Delivered' },
    { value: 12, suffix: '', label: 'Industry Recognitions' }
  ];

  return (
    <div style={{ padding: '60px 0', backgroundColor: 'var(--color-bg-primary)', position: 'relative', zIndex: 10 }}>
      <div className="container grid-12">
        <div className="col" style={{ '--col-desktop': 5 }}>
          <SectionLabel>01 — Who We Are</SectionLabel>
          <SectionHeading>BUILT ON<br/>CERTAINTY.</SectionHeading>
        </div>
        
        <div className="col" style={{ '--col-desktop': 7, paddingTop: '40px' }}>
          <ScrollReveal animation="slide-up">
            <p className="text-body-lg" style={{ marginBottom: '64px' }}>
              Great construction is more than concrete, steel and glass. It is a promise made visible. At Ganesh Construction, we combine technical expertise, architectural intelligence and meticulous project management to deliver environments that perform for decades.
            </p>
          </ScrollReveal>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '24px' }}>
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1} animation="slide-up">
                <div>
                  <div style={{ 
                    fontFamily: 'var(--font-primary)', 
                    fontSize: '3rem', 
                    fontWeight: 700, 
                    color: 'var(--color-accent)',
                    marginBottom: '8px'
                  }}>
                    <Counter from={0} to={stat.value} duration={2} suffix={stat.suffix} />
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-steel-gray)', fontWeight: 500, lineHeight: 1.4 }}>
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
