/** SEO-Textblock Startseite — scoped, keine Kollision mit anderen Seiten */
export const homeSeoTextStyles = `
.home-seo-text-section {
  max-width: 860px;
  margin: 3rem auto;
  padding: 2.5rem 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: #1F2937;
  line-height: 1.8;
  font-size: 1.05rem;
}

.home-seo-text-section h2 {
  font-size: 1.85rem;
  font-weight: 800;
  color: #4F46E5;
  margin-bottom: 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 3px solid #10B981;
}

.home-seo-text-section h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #4F46E5;
  margin-top: 2.5rem;
  margin-bottom: 0.75rem;
  padding-left: 0.75rem;
  border-left: 4px solid #10B981;
}

.home-seo-text-section p {
  margin-bottom: 1.15rem;
}

.home-seo-text-section a {
  color: #4F46E5;
  text-decoration: underline;
  text-decoration-color: #10B981;
  text-underline-offset: 3px;
  transition: color 0.2s ease;
}

.home-seo-text-section a:hover {
  color: #10B981;
}

.home-seo-text-section strong {
  color: #1F2937;
}

.home-seo-text-section ul {
  margin: 1rem 0 1.5rem 0;
  padding-left: 0;
  list-style: none;
}

.home-seo-text-section ul li {
  padding: 0.5rem 0 0.5rem 1.5rem;
  position: relative;
  border-bottom: 1px solid #F3F4F6;
}

.home-seo-text-section ul li:last-child {
  border-bottom: none;
}

.home-seo-text-section ul li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 8px;
  background-color: #10B981;
  border-radius: 50%;
}

.home-seo-text-section ul li a {
  font-weight: 600;
}

.home-seo-text-section .home-seo-text-branchen-btn-wrap {
  text-align: center;
  margin: 1.75rem 0 2rem;
}

.home-seo-text-section .home-seo-text-btn-branchen {
  display: inline-block;
  background: #fff;
  color: #4F46E5 !important;
  text-decoration: none !important;
  padding: 0.85rem 1.75rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1.05rem;
  border: 2px solid #10B981;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.15);
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}

.home-seo-text-section .home-seo-text-btn-branchen:hover {
  background: #ECFDF5;
  color: #3730A3 !important;
  border-color: #059669;
  transform: translateY(-1px);
}

.home-seo-text-section .home-seo-text-closing {
  margin-top: 0.5rem;
  margin-bottom: 1.25rem;
  text-align: center;
}

.home-seo-text-section .home-seo-text-closing a {
  font-weight: 700;
}

.home-seo-text-section .home-seo-text-contact {
  text-align: center;
}

@media (max-width: 768px) {
  .home-seo-text-section {
    padding: 1.5rem 1rem;
    margin: 2rem auto;
  }
  .home-seo-text-section h2 {
    font-size: 1.5rem;
  }
  .home-seo-text-section h3 {
    font-size: 1.15rem;
  }
}
`
