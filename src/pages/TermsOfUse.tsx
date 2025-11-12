import { Link } from "react-router-dom";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";
import CtaSection from "@/components/ui/cta-section";

/**
 * Terms of Use Page (Full-width content, no boxed/container card)
 * - Keeps your content 100% verbatim.
 * - Uses the same gradient/glow typography system as your Privacy Policy page.
 */
const TermsOfUse = () => {
  return (
    <Layout>
      {/* Background halo */}
      <section className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60rem 60rem at 50% -10%, rgba(3,41,85,0.06) 0%, transparent 60%)",
          }}
        />
        <HeroSection2
          badge="Welford Systems — Terms of Use"
          title="Terms of Use"
          subtitle="Effective Date: 11 November 2025"
          bullets={[]}
          primaryCta={undefined}
          secondaryCta={undefined}
          image={{
            src: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/terms.jpg",
            alt: "Welford Systems Terms of Use",
          }}
          imageBadgeText=""
          id="terms-hero"
        />
      </section>

      {/* Full-width content (no box) */}
      <section className="relative overflow-hidden py-12 sm:py-16">
        {/* soft brand glows */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-28 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full blur-[160px] opacity-25"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #0b4aa8 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-[-160px] right-[-120px] h-[460px] w-[460px] rounded-full blur-[160px] opacity-20"
            style={{
              background:
                "radial-gradient(40% 40% at 50% 50%, #032955 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Content (no card, no border) */}
        <div className="relative z-10 mx-auto w-[92%] max-w-5xl px-2 sm:px-4">
          {/* Decorative gradient rule above content */}
          <div
            className="h-1 w-28 rounded-full mb-6 sm:mb-8"
            style={{
              background:
                "linear-gradient(90deg, #032955 0%, #0b4aa8 50%, #1f6feb 100%)",
            }}
          />

          <article className="prose prose-slate max-w-none">
            <style>{`
              .prose h2{
                font-weight: 700;
                line-height: 1.15;
                letter-spacing: -0.01em;
                margin-top: 0.25rem;
                margin-bottom: 0.75rem;
                background: linear-gradient(90deg, #032955 0%, #0b4aa8 100%);
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
                font-size: clamp(1.9rem, 3.2vw, 2.4rem);
              }
              .prose h3{
                color:#0f172a;
                font-weight: 700;
                font-size: clamp(1.15rem, 1.6vw, 1.3rem);
                margin-top: 2.25rem;
                margin-bottom: .85rem;
                padding-bottom: .65rem;
                position: relative;
              }
              .prose h3::after{
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                width: 160px;
                height: 2px;
                background: linear-gradient(90deg, rgba(3,41,85,0.18) 0%, rgba(11,74,168,0.22) 100%);
                border-radius: 9999px;
              }
              .prose p{
                color:#0f172a; 
                font-weight: 400; 
                line-height: 1.75;
              }
              .prose ul{
                list-style: none; 
                padding-left: 0;
              }
              .prose li{
                margin: .35rem 0; 
                color:#0f172a;
              }
              .muted{ color:#334155; font-size:.9rem; }
              /* Subtle section spacing harmony */
              .prose > * + * { 
                margin-top: 0.9rem; 
              }
              @media (min-width: 640px){
                .prose > * + * { 
                  margin-top: 1rem; 
                }
              }
              /* Print-friendly */
              @media print{
                header, nav, .pointer-events-none{ display:none !important; }
                article{ background:#fff !important; color:#000 !important; box-shadow:none !important; }
                .prose h2,.prose h3,.prose p,.prose li{ color:#000 !important; }
                section{ padding:0 !important; margin:0 !important; }
              }
              table { width: 100%; border-collapse: collapse; }
              th, td { border: 1px solid rgba(2,6,23,.08); padding: .5rem .6rem; }
              th { background: rgba(3,41,85,.04); font-weight: 700; }
            `}</style>

            {/* ============== EXACT VERBATIM CONTENT START ============== */}
            <h2>Terms of Use</h2>
            <p>Effective Date: 11 November 2025</p>

            <h3>Introduction and Acceptance of Terms</h3>
            <p>
              Welcome to Welford Systems Limited (“Welford Systems”, “we”, “our”, or “us”).
              These Terms of Use (“Terms”) govern your access to and use of our website at
              www.welfordsystems.com (the “Site”). By using or accessing our Site, you agree to be bound by these
              Terms and by our Privacy Policy. If you do not agree with these Terms, please do not use our Site.
            </p>

            <h3>Changes to These Terms</h3>
            <p>
              We may update or modify these Terms from time to time. If we make significant changes, we will
              update the “Effective Date” at the top of this page. Your continued use of the Site after any
              changes means you accept the updated Terms.
            </p>

            <h3>About Welford Systems Limited</h3>
            <p>
              Welford Systems Limited is a UK-registered technology and cybersecurity company that provides
              identity and access governance solutions, consulting services, and related technology offerings.
              Our Site provides information about our products, services, company updates, and contact options.
              It is intended for professional and informational use only.
            </p>

            <h3>Use of the Website</h3>
            <p>You may use our Site only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>• Use the Site in any way that violates any applicable law or regulation.</li>
              <li>• Attempt to gain unauthorized access to any part of the Site, server, or connected systems.</li>
              <li>• Introduce viruses, trojans, or other malicious code.</li>
              <li>• Attempt to copy, modify, or interfere with the Site’s functionality or content.</li>
              <li>• Use the Site to transmit false, misleading, or offensive information.</li>
            </ul>
            <p>
              We reserve the right to suspend or block your access if we reasonably believe you are violating
              these Terms or misusing the Site.
            </p>


            <h3>Intellectual Property</h3>
            <p>
              All content on this Site including text, images, graphics, software, logos, and design is owned or
              licensed by Welford Systems Limited. It is protected by copyright, trademark, and other intellectual
              property laws in the United Kingdom and internationally.
            </p>
            <p>
              You may view, download, or print pages from our Site for your personal or internal business use
              only. You may not copy, distribute, modify, or reuse any materials from the Site without our prior
              written permission.
            </p>
            <p>All product names, logos, and trademarks are the property of Welford Systems Limited or their respective owners.</p>

            <h3>User Responsibilities and Prohibited Use</h3>
            <p>By using our Site, you agree to:</p>
            <ul>
              <li>• Use the Site only for lawful business or informational purposes.</li>
              <li>• Provide accurate and truthful information when submitting forms or enquiries.</li>
              <li>• Refrain from attempting to disrupt or damage the Site or its content.</li>
            </ul>
            <p>
              You must not use this Site to engage in any activity that may harm Welford Systems’ reputation,
              infringe intellectual property rights, or violate data protection laws.
            </p>

            <h3>Links to Other Websites</h3>
            <p>
              Our Site may contain links to third-party websites for your convenience or reference. We do not
              control, endorse, or take responsibility for the content, security, or privacy practices of those
              external websites. We encourage you to review the terms and privacy policies of any third-party
              sites you visit.
            </p>

            <h3>No Warranties</h3>
            <p>
              The Site and its contents are provided “as is” and “as available.” We make no representations or
              warranties of any kind, express or implied, about:
            </p>
            <ul>
              <li>• The accuracy or completeness of the information on our Site.</li>
              <li>• The availability or uninterrupted operation of the Site.</li>
              <li>• The absence of errors, defects, or viruses.</li>
            </ul>
            <p>
              We may update or change the Site at any time without notice. Your use of the Site is at your own
              risk.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, Welford Systems Limited shall not be liable for any loss or
              damage arising out of or in connection with:
            </p>
            <ul>
              <li>• Your use of, or inability to use, our Site.</li>
              <li>• Any errors or omissions in the information provided.</li>
              <li>• Any technical issues, interruptions, or security breaches.</li>
            </ul>
            <p>
              This includes (without limitation) any indirect, consequential, or special loss, such as loss of
              business, revenue, profits, or data.
            </p>
            <p>
              Nothing in these Terms limits or excludes liability for death or personal injury caused by negligence,
              fraud, or any other liability that cannot lawfully be excluded under UK law.
            </p>

            <h3>Indemnity</h3>
            <p>
              You agree to indemnify and hold harmless Welford Systems Limited and its directors, employees,
              and agents from any claims, losses, or damages (including legal fees) arising from your breach of
              these Terms or misuse of our Site.
            </p>

            <h3>Termination of Access</h3>
            <p>
              We may suspend, restrict, or terminate your access to the Site at any time, without prior notice, if
              we reasonably believe that you have violated these Terms or used the Site in an unlawful or
              harmful way. We may also modify, suspend, or discontinue parts of the Site at any time as part of
              our ongoing business operations.
            </p>

            <h3>Governing Law and Jurisdiction</h3>
            <p>
              These Terms are governed by the laws of England and Wales. Any dispute arising out of or in
              connection with these Terms shall be subject to the exclusive jurisdiction of the courts of England
              and Wales.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions about these Terms of Use, please contact us:<br/>
              Email: security@welfordsystems.com<br/>
              Address: Welford Systems Limited<br/>
              71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
            </p>
            <p>
              Thank you for visiting Welford Systems. By using our Site, you confirm that you have read,
              understood, and agree to these Terms and our Privacy Policy.
            </p>


            
            {/* ============== EXACT VERBATIM CONTENT END ============== */}
          </article>

          {/* Decorative gradient rule below content */}
          <div
            className="h-1 w-28 rounded-full mt-10 sm:mt-12"
            style={{
              background:
                "linear-gradient(90deg, #1f6feb 0%, #0b4aa8 50%, #032955 100%)",
            }}
          />
        </div>
      </section>

      {/* Optional site-wide CTA for consistency (remove if you want strictly policy-only page) */}
      <CtaSection />
    </Layout>
  );
};

export default TermsOfUse;
