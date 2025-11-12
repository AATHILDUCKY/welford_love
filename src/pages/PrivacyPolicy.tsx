import { Link } from "react-router-dom";
import Layout from "@/components/layout/layout";
import HeroSection2 from "@/components/ui/herosection2";
import CtaSection from "@/components/ui/cta-section";

/**
 * Privacy Policy Page (Full-width content, no boxed/container card)
 * - Keeps your content 100% verbatim.
 * - Uses brand gradients, soft glows, and refined typography directly on the page background.
 */
const PrivacyPolicy = () => {
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
          badge="Welford Systems — Privacy Policy"
          title="Privacy Policy"
          subtitle="Effective Date: 11 November 2025"
          bullets={[]}
          primaryCta={undefined}
          secondaryCta={undefined}
          image={{
            src: "https://raw.githubusercontent.com/AATHILDUCKY/my-assets/refs/heads/main/privacy.jpg",
            alt: "Welford Systems Privacy Policy",
          }}
          imageBadgeText=""
          id="privacy-hero"
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
                width: 120px;
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
            `}</style>

            {/* ============== EXACT VERBATIM CONTENT START ============== */}
            <h2>Privacy Policy</h2>
            <p>Effective Date: 11 November 2025</p>

            <h3>Who We Are</h3>
            <p>
              Welford Systems Limited (“Welford Systems”, “we”, “our”, or “us”) is a UK-registered technology
              company specializing in cybersecurity, identity, and access governance solutions.
              We are committed to protecting your personal information and handling it in a lawful, fair, and
              transparent way. We act as a data controller when we collect and process personal data for our
              own business purposes.
            </p>

            <h3>What Information We Collect</h3>
            <p>
              We only collect the information necessary to provide our services and operate our business. This
              may include:
            </p>
            <ul>
              <li>• Contact details: name, email address, phone number, company name, or job title.</li>
              <li>• Account and service data: information related to your use of our platforms or services.</li>
              <li>• Communications: messages or enquiries you send to us via email, website forms, or other
              channels.</li>
              <li>• Recruitment data: CVs, qualifications, or references when you apply for a job with us.</li>
              <li>• Technical data:
              <br/>When you visit our website or use our online platforms, our systems may automatically
              record limited technical information such as your IP address, browser type, and access
              times.
              <br/>This helps us keep our systems secure, detect and fix technical issues, and protect against
              cyber threats.
              <br/>We do not use this information to personally identify visitors, and it is retained only for
              security and diagnostic purposes.
              </li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>We use your personal data to:</p>
            <ul>
              <li>• Provide and support our products and services.</li>
              <li>• Respond to your enquiries and communicate with you.</li>
              <li>• Manage customer relationships and service accounts.</li>
              <li>• Meet legal, regulatory, or contractual obligations.</li>
              <li>• Protect our systems and prevent fraud or abuse.</li>
              <li>• Manage recruitment and employment processes.</li>
            </ul>
            <p>
              We process your data based on one or more lawful bases, including contract performance,
              legitimate interests, legal obligations, or your consent, where applicable.
            </p>

            <h3>How We Share Information</h3>
            <p>
              We only share data when necessary and always under appropriate safeguards.
              This may include:
            </p>
            <ul>
              <li>• Service providers who help us operate our business (e.g., secure cloud hosting or IT
              services).</li>
              <li>• Professional advisers and auditors who support compliance and business operations.</li>
              <li>• Regulators or law enforcement when required by law or to protect our legal rights.</li>
            </ul>
            <p>
              All third parties are contractually required to maintain confidentiality and comply with data
              protection standards consistent with the UK GDPR.
            </p>

            <h3>How We Store and Protect Data</h3>
            <p>
              Your information is stored securely in trusted cloud environments such as Microsoft Azure.
              We use strong technical and organizational security measures including encryption, access
              controls, and regular monitoring to protect your data from unauthorized access, loss, or misuse.
              We retain your personal data only for as long as necessary to fulfil the purpose for which it was
              collected or to comply with legal and regulatory requirements. Once data is no longer needed, it is
              securely deleted or anonymized.
            </p>

            <h3>Your Data Protection Rights</h3>
            <p>
              Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018,
              you have the right to:
            </p>
            <ul>
              <li>• Access your personal data.</li>
              <li>• Request correction of inaccurate or incomplete information.</li>
              <li>• Request deletion of your data where appropriate.</li>
              <li>• Object to or restrict how your data is processed.</li>
              <li>• Request transfer of your data (data portability).</li>
              <li>• Withdraw consent where processing is based on consent.</li>
            </ul>
            <p>
              You also have the right to complain to the Information Commissioner’s Office (ICO) if you believe
              your data has been handled improperly.
              Visit www.ico.org.uk for more information.
            </p>

            <h3>Cookies</h3>
            <p>
              Our website does not use cookies or any similar tracking technologies. We do not collect analytics,
              track user behavior, or store information on your device.
              If this changes in the future, we will update this Privacy Policy and publish a clear Cookie Notice
              explaining what cookies are used and why.
            </p>

            <h3>Updates to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our business or legal
              requirements. The most recent version will always be available on our website, and the “Effective
              Date” above will indicate the latest update.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy or how we handle your personal data, please
              contact us at:
              Email: security@welfordsystems.com
              Address: Welford Systems Limited
              71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom
              We value your trust.
              If you have questions or concerns about how we protect your data, please reach out we’ll be
              happy to help.
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

export default PrivacyPolicy;
