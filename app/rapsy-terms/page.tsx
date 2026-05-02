import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Rapsy - Terms and Conditions',
  description: 'Terms and Conditions for the Rapsy mobile application.',
};

export default function RapsyTermsConditions() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8 max-w-4xl mx-auto font-sans">
      <div className="mb-10">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">
          &larr; Back to Portfolio
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Terms and Conditions</h1>
        <p className="text-muted-foreground text-lg">
          App: <strong>Rapsy</strong><br />
          Developer: <strong>Adarsh Kumar Verma</strong><br />
          Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      <div className="space-y-10 leading-relaxed text-muted-foreground">
        
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">1. Acceptance of Terms</h2>
          <p>
            By downloading or using the Rapsy mobile application (&quot;App&quot;), these terms will automatically apply to you. You should make sure that you read them carefully before using the App. If you do not agree to these Terms and Conditions, please do not use the App.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">2. Health and Medical Disclaimer</h2>
          <p className="mb-3">
            <strong>Rapsy is an AI-powered fitness tracking tool, not a medical device or healthcare provider.</strong>
          </p>
          <p>
            The App provides exercise tracking, pose detection, and related fitness information. This information is for educational and tracking purposes only and should not be construed as medical advice. You should always consult with a physician or other qualified healthcare provider before starting any new exercise program, especially if you have an underlying medical condition. Use of the App is at your own risk. The developer, Adarsh Kumar Verma, is not liable for any injuries or damages you may sustain from using the workouts or tracking algorithms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">3. User Accounts and Authentication</h2>
          <p>
            Rapsy uses third-party sign-in services (e.g., Google Sign-In) via Firebase Authentication. You are responsible for maintaining the confidentiality of your authentication details. We collect basic profile information (such as your email address and name) solely to sync your workout data across devices. For privacy details, please read our <Link href="/rapsy-privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>. For instructions on how to delete your account and associated data, please refer to our <Link href="/rapsy-data-deletion" className="text-primary hover:underline">Data Deletion Policy</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">4. Privacy and Device Permissions</h2>
          <p className="mb-3">
            Rapsy requires access to your device&apos;s camera to utilize ML Kit for on-device pose detection.
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Camera Data:</strong> The camera feed is processed entirely on your local device. <strong>No video feeds or images are ever transmitted, saved, or uploaded to our servers.</strong></li>
            <li><strong>Workout Data:</strong> Simple numeric workout data (e.g., total reps, calories burned, dates) is securely stored in Firebase to provide your workout history.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">5. Subscriptions and Payments</h2>
          <p className="mb-3">
            Rapsy offers premium features through auto-renewing subscriptions (e.g., a &quot;Basic&quot; tier and a &quot;Pro&quot; tier). Payment will be charged to your Google Play Store account at the confirmation of purchase.
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.</li>
            <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
            <li>You can manage or turn off auto-renewal in your Google Play Store Account settings at any time.</li>
            <li>We may offer a free 14-day trial for certain exercises. Upon trial expiration, continued access requires a subscription.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">6. Intellectual Property Rights</h2>
          <p>
            All intellectual property rights in the App, including but not limited to the design, text, graphics, algorithms, and source code, are owned by Adarsh Kumar Verma. You may not copy, modify, distribute, sell, or lease any part of our App without explicit written permission.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">7. Limitations of Liability</h2>
          <p>
            The App is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The developer makes no representations or warranties of any kind, express or implied, as to the operation of the App or the information, content, or accuracy of the pose-detection algorithms. To the fullest extent permissible by law, Adarsh Kumar Verma shall not be held liable for any damages of any kind arising from the use of the App.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">8. Changes to These Terms</h2>
          <p>
            We may update our Terms and Conditions from time to time. You are advised to review this page periodically for any changes. We will notify you of any changes by updating the &quot;Last Updated&quot; date on this page. These changes are effective immediately after they are posted.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3 text-foreground border-b pb-2">9. Contact Us</h2>
          <p>
            If you have any questions or suggestions regarding our Terms and Conditions, do not hesitate to contact us at:
            <br /><br />
            <strong>Adarsh Kumar Verma</strong><br />
            Email: <a href="mailto:avwithai.port@gmail.com" className="text-primary hover:underline">avwithai.port@gmail.com</a>
          </p>
        </section>

      </div>
    </main>
  );
}
