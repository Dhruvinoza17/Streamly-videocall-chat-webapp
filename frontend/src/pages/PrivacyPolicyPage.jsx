import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicyPage = () => (
  <div className='min-h-screen w-full p-4 sm:p-8 md:p-12 bg-base-200 text-base-content' data-theme="forest">
    <div className='flex items-center gap-3 mb-8'>
      <Shield className="size-7 text-primary" />
      <h1 className='text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Privacy Policy</h1>
    </div>
    <div className='space-y-10 text-sm sm:text-base text-left max-w-5xl'>
      <section>
        <h2 className='text-lg font-semibold mb-1'>1. Information We Collect</h2>
        <p>We collect information you provide when you register, such as your name, email address, and language preferences. We may also collect usage data, device information, and cookies to enhance your experience and improve our services. We may collect information about your interactions with other users, your device type, browser, and IP address.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>2. How We Use Your Information</h2>
        <ul className='list-disc ml-6 space-y-1'>
          <li>To provide, operate, and maintain Streamly services</li>
          <li>To personalize your experience and improve our platform</li>
          <li>To communicate with you about updates, security, and support</li>
          <li>To monitor usage and prevent fraud or abuse</li>
          <li>To comply with legal obligations and enforce our policies</li>
        </ul>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>3. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal information. We may share data with trusted partners who assist us in operating Streamly, subject to strict confidentiality agreements. We may also disclose information if required by law, to protect our rights and users, or in connection with a business transfer such as a merger or acquisition.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>4. Cookies and Tracking</h2>
        <p>We use cookies and similar technologies to remember your preferences, analyze site traffic, and improve your experience. You can control cookies through your browser settings. Disabling cookies may affect your ability to use certain features of Streamly.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>5. Data Security</h2>
        <p>We implement reasonable security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security. Please notify us immediately if you believe your account has been compromised.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>6. Data Retention</h2>
        <p>We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. We may anonymize or aggregate data for analytical purposes.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>7. International Data Transfers</h2>
        <p>Your information may be transferred to and maintained on servers located outside your country. We take steps to ensure your data is treated securely and in accordance with this policy, regardless of where it is processed.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>8. Your Data Protection Rights</h2>
        <ul className='list-disc ml-6 space-y-1'>
          <li>You have the right to access, update, or delete your personal information.</li>
          <li>You may object to or restrict certain processing of your data.</li>
          <li>You have the right to data portability and to withdraw consent at any time.</li>
          <li>To exercise these rights, contact us at <a href="mailto:privacy@streamly.com" className="text-primary underline">privacy@streamly.com</a>.</li>
        </ul>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>9. Children's Privacy</h2>
        <p>Streamly is not intended for children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with information, please contact us for removal.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>10. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page. Please review this policy periodically.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>11. How to Contact Us</h2>
        <p>If you have questions or concerns about this Privacy Policy, contact us at <a href="mailto:privacy@streamly.com" className="text-primary underline">privacy@streamly.com</a>.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>12. Effective Date</h2>
        <p>This Privacy Policy is effective as of June 1, 2024.</p>
      </section>
    </div>
  </div>
);

export default PrivacyPolicyPage; 