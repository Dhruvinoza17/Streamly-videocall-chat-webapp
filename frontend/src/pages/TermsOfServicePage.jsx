import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfServicePage = () => (
  <div className='min-h-screen w-full p-4 sm:p-8 md:p-12 bg-base-200 text-base-content' data-theme="forest">
    <div className='flex items-center gap-3 mb-8'>
      <FileText className="size-7 text-primary" />
      <h1 className='text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Terms of Service</h1>
    </div>
    <div className='space-y-10 text-sm sm:text-base text-left max-w-5xl'>
      <section>
        <h2 className='text-lg font-semibold mb-1'>1. Acceptance of Terms</h2>
        <p>By accessing or using Streamly, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree, you are prohibited from using or accessing this site.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>2. Eligibility</h2>
        <p>You must be at least 13 years old to use Streamly. By using our service, you represent and warrant that you meet this requirement.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>3. Account Registration & Security</h2>
        <p>You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must provide accurate and complete information during registration and keep your information up to date. You agree to notify us immediately of any unauthorized use of your account.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>4. User Conduct</h2>
        <ul className='list-disc ml-6 space-y-1'>
          <li>Do not use Streamly for any unlawful or prohibited purpose.</li>
          <li>Respect other users and do not harass, abuse, or harm others.</li>
          <li>Do not upload or share content that is offensive, illegal, or infringes on others' rights.</li>
          <li>Do not attempt to gain unauthorized access to other accounts or systems.</li>
          <li>Do not use bots, scripts, or automated methods to access or use the service.</li>
        </ul>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>5. Prohibited Activities</h2>
        <ul className='list-disc ml-6 space-y-1'>
          <li>Impersonating any person or entity.</li>
          <li>Engaging in fraudulent, deceptive, or misleading practices.</li>
          <li>Transmitting viruses, malware, or other harmful code.</li>
          <li>Collecting or harvesting information from other users without consent.</li>
          <li>Interfering with the operation of Streamly or any user's enjoyment of the service.</li>
          <li>Reverse engineering, decompiling, or disassembling any part of Streamly.</li>
          <li>Using Streamly to send spam or unsolicited communications.</li>
        </ul>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>6. Content Ownership & Intellectual Property</h2>
        <p>You retain ownership of the content you submit, but grant Streamly a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content as part of the service. All content, trademarks, logos, and intellectual property on Streamly, except user-generated content, are owned by Streamly or its licensors. You may not use, copy, or distribute any content from Streamly without our express permission.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>7. Third-Party Services & Links</h2>
        <p>Streamly may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of any third-party sites or services. Accessing third-party resources is at your own risk.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>8. Privacy</h2>
        <p>Your privacy is important to us. Please review our Privacy Policy to understand how your information is collected, used, and protected.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>9. Termination & Suspension</h2>
        <p>We reserve the right to suspend or terminate your access to Streamly at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users or the service. Upon termination, your right to use Streamly will immediately cease.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>10. Disclaimers & Limitation of Liability</h2>
        <p>Streamly is provided "as is" and without warranties of any kind. We do not guarantee the accuracy, reliability, or availability of the service. To the fullest extent permitted by law, Streamly and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the service.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>11. Indemnification</h2>
        <p>You agree to indemnify and hold harmless Streamly, its affiliates, and their respective officers, directors, employees, and agents from any claims, damages, liabilities, and expenses arising from your use of the service or violation of these Terms.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>12. Governing Law & Dispute Resolution</h2>
        <p>These Terms are governed by and construed in accordance with the laws of your jurisdiction, without regard to its conflict of law principles. Any disputes arising from these Terms or your use of Streamly will be resolved through binding arbitration or in the courts of your jurisdiction.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>13. Feedback & Suggestions</h2>
        <p>If you provide feedback or suggestions about Streamly, we may use your feedback without obligation to you.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>14. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Continued use of Streamly after changes means you accept the new Terms. Please review this page periodically.</p>
      </section>
      <section>
        <h2 className='text-lg font-semibold mb-1'>15. Contact Us</h2>
        <p>If you have questions about these Terms, contact us at <a href="mailto:support@streamly.com" className="text-primary underline">support@streamly.com</a>.</p>
      </section>
    </div>
  </div>
);

export default TermsOfServicePage; 