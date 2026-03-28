/**
 * Scoped GEO-Leistungsseite — Variablen auf .geo-page, umbenannte Klassen (geo-cta, geo-info-box …),
 * damit nichts mit Blog/Branchen kollidiert.
 */
export const geoAgenturPageStyles = `
.geo-page {
  --primary: #4F46E5;
  --primary-dark: #3730A3;
  --secondary: #10B981;
  --secondary-dark: #059669;
  --accent: #F59E0B;
  --text: #1F2937;
  --text-light: #6B7280;
  --bg: #FFFFFF;
  --bg-light: #F9FAFB;
  --bg-card: #F3F4F6;
  --border: #E5E7EB;
  font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
  color: var(--text);
  line-height: 1.7;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
}

.geo-page h1 {
  font-size: 2.2rem;
  font-weight: 800;
  color: var(--primary);
  line-height: 1.25;
  margin-bottom: 0.5rem;
}

.geo-page h2 {
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary-dark);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid var(--secondary);
}

.geo-page h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.geo-page p {
  margin-bottom: 1rem;
  font-size: 1.05rem;
}

.geo-page a {
  color: var(--primary);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
}

.geo-page a:hover {
  color: var(--primary-dark);
}

.geo-hero {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: #fff;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  margin-bottom: 2.5rem;
}

.geo-hero h1 {
  color: #fff;
  margin-bottom: 1rem;
}

.geo-hero p {
  color: rgba(255,255,255,0.92);
  font-size: 1.1rem;
}

.geo-hero .stat-highlight {
  background: rgba(255,255,255,0.15);
  border-left: 4px solid var(--accent);
  padding: 0.75rem 1rem;
  border-radius: 0 8px 8px 0;
  margin: 1.2rem 0;
  font-weight: 600;
  font-size: 1.05rem;
}

.geo-hero .stat-highlight a {
  color: #fff;
}

.geo-cta {
  display: inline-block;
  background: var(--accent);
  color: var(--text) !important;
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 8px;
  text-decoration: none !important;
  font-size: 1.1rem;
  transition: background 0.2s, transform 0.15s;
  box-shadow: 0 2px 8px rgba(245,158,11,0.3);
}

.geo-cta:hover {
  background: #D97706;
  transform: translateY(-1px);
}

.geo-info-box {
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: 0 8px 8px 0;
  padding: 1.25rem 1.5rem;
  margin: 1.5rem 0;
}

.platform-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.platform-card {
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1.25rem;
  text-align: center;
  transition: box-shadow 0.2s;
}

.platform-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.platform-card .platform-name {
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--primary);
  margin-bottom: 0.4rem;
}

.platform-card .platform-stat {
  font-size: 0.92rem;
  color: var(--text-light);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.service-card {
  background: var(--bg-light);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
}

.service-card .service-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: var(--primary);
  color: #fff;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.service-card h3 {
  color: var(--primary-dark);
  margin-top: 0.5rem;
  font-size: 1.1rem;
}

.service-card p {
  font-size: 0.98rem;
  color: var(--text-light);
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.process-step {
  text-align: center;
  padding: 1.25rem 1rem;
  background: var(--bg-light);
  border-radius: 10px;
  border: 1px solid var(--border);
  position: relative;
}

.process-step .step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: var(--secondary);
  color: #fff;
  border-radius: 50%;
  font-weight: 800;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
}

.process-step h3 {
  font-size: 1rem;
  margin-top: 0;
}

.process-step p {
  font-size: 0.92rem;
  color: var(--text-light);
}

.synergy-box {
  background: linear-gradient(135deg, #EEF2FF 0%, #ECFDF5 100%);
  border: 2px solid var(--secondary);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
}

.synergy-box h2 {
  border-bottom: none;
  color: var(--primary);
  margin-top: 0;
}

.synergy-list {
  list-style: none;
  padding: 0;
}

.synergy-list li {
  padding: 0.4rem 0 0.4rem 1.75rem;
  position: relative;
  font-size: 1.02rem;
}

.synergy-list li::before {
  content: '\\2713';
  position: absolute;
  left: 0;
  color: var(--secondary);
  font-weight: 700;
  font-size: 1.1rem;
}

.geo-faq-item {
  border-bottom: 1px solid var(--border);
  padding: 1.25rem 0;
}

.geo-faq-item:last-child {
  border-bottom: none;
}

.geo-faq-q {
  font-weight: 700;
  font-size: 1.08rem;
  color: var(--primary-dark);
  margin-bottom: 0.5rem;
}

.geo-faq-a {
  color: var(--text);
  font-size: 1rem;
}

.geo-final-cta {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: #fff;
  border-radius: 12px;
  padding: 2.5rem 2rem;
  text-align: center;
  margin: 3rem 0 1rem;
}

.geo-final-cta h2 {
  color: #fff;
  border-bottom: none;
  margin-top: 0;
  font-size: 1.5rem;
}

.geo-final-cta p {
  color: rgba(255,255,255,0.9);
  font-size: 1.05rem;
}

.geo-final-cta .geo-cta {
  margin-top: 1rem;
}

.geo-contact {
  margin-top: 1.5rem;
  font-size: 0.98rem;
  color: rgba(255,255,255,0.85);
}

.geo-contact a {
  color: var(--accent) !important;
}

.geo-bc {
  font-size: 0.88rem;
  color: var(--text-light);
  margin-bottom: 1.5rem;
}

.geo-bc a {
  color: var(--text-light);
  text-decoration: none;
}

.geo-bc a:hover {
  color: var(--primary);
}

@media (max-width: 600px) {
  .geo-page h1 { font-size: 1.6rem; }
  .geo-hero { padding: 1.5rem 1.25rem; }
  .service-grid { grid-template-columns: 1fr; }
  .process-steps { grid-template-columns: 1fr 1fr; }
  .platform-grid { grid-template-columns: 1fr; }
}
`
