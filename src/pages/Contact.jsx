import React, { useState, useEffect } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import SplitText from '../components/reactbits/SplitText';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--color-bg-primary)' }}>
      {/* Immersive Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '60vh', 
        minHeight: '400px',
        maxHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Parallax Background Image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/images/projects/meridian.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed', // Parallax effect
          zIndex: 1
        }} />
        
        {/* Gradient Overlay for Text Readability & Blend into next section */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(17,19,19,0.8) 0%, rgba(17,19,19,0.4) 60%, var(--color-bg-primary) 100%)',
          zIndex: 2
        }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 3, textAlign: 'center', paddingTop: '80px' }}>
          <SectionHeading style={{ color: 'white' }}>
            <SplitText text="LET'S BUILD" delay={40} />
            <br />
            <SplitText text="SOMETHING EXCEPTIONAL." delay={40} />
          </SectionHeading>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '60px 0 120px 0', position: 'relative', zIndex: 10 }}>
        <div className="container grid-12">
          
          {/* Left Col - Info Cards */}
          <div className="col" style={{ '--col-desktop': 5 }}>
            <ScrollReveal delay={0.2} animation="slide-up">
              <p className="text-body-lg" style={{ marginBottom: '48px', color: 'var(--color-text-primary)' }}>
                Whether you're planning a private residence, commercial development or complex construction project, start the conversation with our team.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Info Card 1 */}
                <div className="info-card">
                  <div className="info-icon">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="info-title">Head Office</h4>
                    <div className="info-text">
                      Ganesh Construction<br />
                      120 Innovation Avenue<br />
                      Chennai, Tamil Nadu, India
                    </div>
                  </div>
                </div>
                
                {/* Info Card 2 */}
                <div className="info-card">
                  <div className="info-icon">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="info-title">Contact</h4>
                    <div className="info-text">
                      +91 44 4000 2026<br/>
                      hello@ganeshconstruction.com
                    </div>
                  </div>
                </div>
                
                {/* Info Card 3 */}
                <div className="info-card">
                  <div className="info-icon">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="info-title">Business Hours</h4>
                    <div className="info-text">
                      Monday — Friday<br />
                      9:00 AM — 6:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Col - Form */}
          <div className="col" style={{ '--col-desktop': 6, gridColumnStart: 7 }}>
            <ScrollReveal delay={0.4} animation="slide-up">
              <div className="form-container">
                {status === 'success' ? (
                  <div className="success-state">
                    <div className="success-icon">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h3>Enquiry Sent Successfully</h3>
                    <p>Thank you for reaching out. A member of our executive team will contact you within 24 hours.</p>
                    <button onClick={() => setStatus('idle')} className="reset-btn">
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form">
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '32px', fontFamily: 'var(--font-primary)' }}>Start a Project</h3>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <input type="text" required id="fullName" placeholder=" " />
                        <label htmlFor="fullName">Full Name *</label>
                        <div className="focus-border"></div>
                      </div>
                      <div className="form-group">
                        <input type="email" required id="email" placeholder=" " />
                        <label htmlFor="email">Email Address *</label>
                        <div className="focus-border"></div>
                      </div>
                    </div>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <input type="tel" required id="phone" placeholder=" " />
                        <label htmlFor="phone">Phone Number *</label>
                        <div className="focus-border"></div>
                      </div>
                      <div className="form-group">
                        <input type="text" id="company" placeholder=" " />
                        <label htmlFor="company">Company</label>
                        <div className="focus-border"></div>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <select required id="projectType" defaultValue="">
                          <option value="" disabled hidden></option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="hospitality">Hospitality</option>
                          <option value="interior">Interior</option>
                          <option value="infrastructure">Infrastructure</option>
                          <option value="other">Other</option>
                        </select>
                        <label htmlFor="projectType">Project Type *</label>
                        <div className="focus-border"></div>
                      </div>
                      <div className="form-group">
                        <input type="text" id="budget" placeholder=" " />
                        <label htmlFor="budget">Estimated Budget</label>
                        <div className="focus-border"></div>
                      </div>
                    </div>

                    <div className="form-group">
                      <input type="text" required id="location" placeholder=" " />
                      <label htmlFor="location">Project Location *</label>
                      <div className="focus-border"></div>
                    </div>

                    <div className="form-group">
                      <textarea rows="4" required id="details" placeholder=" "></textarea>
                      <label htmlFor="details">Tell Us About Your Project *</label>
                      <div className="focus-border"></div>
                    </div>

                    <div style={{ marginTop: '24px' }}>
                      <Button type="submit" disabled={status === 'submitting'} withArrow style={{ width: '100%', justifyContent: 'center' }}>
                        {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      <style>{`
        /* Info Cards */
        .info-card {
          display: flex;
          gap: 24px;
          padding: 32px;
          background: var(--color-bg-secondary);
          border: 1px solid rgba(17, 19, 19, 0.05);
          border-radius: 4px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);
        }
        .info-icon {
          color: var(--color-accent);
          flex-shrink: 0;
          margin-top: 4px;
        }
        .info-title {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--color-steel-gray);
          margin-bottom: 12px;
          font-weight: 600;
        }
        .info-text {
          color: var(--color-text-primary);
          line-height: 1.6;
          font-weight: 500;
        }

        /* Form Container */
        .form-container {
          background: var(--color-bg-secondary);
          padding: 48px;
          border-radius: 4px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.03);
          border: 1px solid rgba(17, 19, 19, 0.05);
        }

        /* Floating Label Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        .form-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 32px;
        }
        .form-group {
          position: relative;
          display: flex;
          flex-direction: column;
        }
        
        .form-group input, 
        .form-group select, 
        .form-group textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--color-concrete-gray);
          color: var(--color-text-primary);
          padding: 12px 0 8px 0;
          font-family: var(--font-secondary);
          font-size: 1rem;
          transition: border-color 0.3s ease;
          z-index: 2;
        }
        
        .form-group textarea {
          resize: vertical;
          min-height: 40px;
        }
        
        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          outline: none;
        }

        /* Focus Animated Border */
        .focus-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-accent);
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 3;
        }
        .form-group input:focus ~ .focus-border,
        .form-group select:focus ~ .focus-border,
        .form-group textarea:focus ~ .focus-border {
          width: 100%;
        }

        /* Floating Label */
        .form-group label {
          position: absolute;
          left: 0;
          top: 12px;
          font-size: 0.875rem;
          color: var(--color-steel-gray);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: none;
          z-index: 1;
        }
        
        /* Float label when input has value or is focused */
        .form-group input:focus ~ label,
        .form-group input:not(:placeholder-shown) ~ label,
        .form-group select:focus ~ label,
        .form-group select:valid ~ label,
        .form-group textarea:focus ~ label,
        .form-group textarea:not(:placeholder-shown) ~ label {
          top: -16px;
          font-size: 0.75rem;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        /* For select, it's tricky because there's no placeholder-shown. We use :valid with required */
        .form-group select:invalid {
          color: transparent;
        }
        .form-group select:focus:invalid {
          color: var(--color-text-primary);
        }

        /* Success State */
        .success-state {
          text-align: center;
          padding: 40px 20px;
        }
        .success-icon {
          width: 64px;
          height: 64px;
          background-color: var(--color-accent);
          color: var(--color-bg-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px auto;
        }
        .success-state h3 {
          font-family: var(--font-primary);
          font-size: 1.5rem;
          margin-bottom: 16px;
        }
        .success-state p {
          color: var(--color-steel-gray);
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .reset-btn {
          background: none;
          border: none;
          color: var(--color-accent);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-size: 0.875rem;
          font-weight: 600;
          border-bottom: 1px solid var(--color-accent);
          padding-bottom: 4px;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        .reset-btn:hover {
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .form-container {
            padding: 32px 24px;
          }
        }
      `}</style>
    </main>
  );
};

export default Contact;
