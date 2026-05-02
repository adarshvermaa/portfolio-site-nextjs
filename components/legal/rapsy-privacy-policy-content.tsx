import type { ReactNode } from 'react';
import Link from 'next/link';

const lastUpdated = 'May 2, 2026';

const collectedData = [
  {
    category: 'Account and profile data',
    details: 'Name, email address, Firebase user ID, sign-in provider, and profile photo URL when provided through Google Sign-In or Firebase Authentication.',
    purpose: 'Create and secure your Rapsy account, keep you signed in, and sync your workout history across devices.',
    retention: 'Kept while your account is active. Deleted from active Rapsy systems within 7 to 14 days after a verified account deletion request.',
  },
  {
    category: 'Workout and fitness activity data',
    details: 'Workout dates, selected exercises, reps, sets, duration, estimated calories, weight entries, and progress history that you choose to save in the app.',
    purpose: 'Show your workout history, progress, and app features that depend on saved training data.',
    retention: 'Kept while your account is active. Deleted within 7 to 14 days after account deletion or a verified request to delete workout history.',
  },
  {
    category: 'Camera permission and pose data',
    details: 'Rapsy accesses your device camera during workout tracking so on-device ML Kit pose detection can identify body points in real time.',
    purpose: 'Count reps, analyze exercise form, and provide real-time workout feedback.',
    retention: 'Camera frames, images, videos, and raw camera feeds are not uploaded, saved, or retained by Rapsy.',
  },
  {
    category: 'Subscription and purchase status',
    details: 'Subscription tier, entitlement status, purchase identifiers, and related transaction metadata from Google Play and RevenueCat. Rapsy does not collect or store credit card numbers.',
    purpose: 'Provide paid features, restore purchases, prevent abuse, and handle subscription support.',
    retention: 'Kept while needed to provide subscriptions and support. Google Play and RevenueCat may retain transaction records as required for tax, accounting, fraud prevention, and legal compliance.',
  },
  {
    category: 'Support and deletion request emails',
    details: 'Email address, request details, and messages you send to the developer.',
    purpose: 'Respond to support requests, verify deletion requests, and keep a record of completed requests.',
    retention: 'Normally kept for up to 90 days after the request is resolved unless a longer period is required for legal, security, or dispute reasons.',
  },
];

const thirdParties = [
  {
    name: 'Firebase Authentication and Firebase services',
    use: 'Authentication, account security, and storage or sync of account and workout data.',
  },
  {
    name: 'Google Sign-In',
    use: 'Optional sign-in provider for creating and accessing your Rapsy account.',
  },
  {
    name: 'Google Play Billing',
    use: 'Subscription purchase processing, renewal status, cancellation handling, and payment compliance.',
  },
  {
    name: 'RevenueCat',
    use: 'Subscription entitlement management and purchase restoration.',
  },
  {
    name: 'Google ML Kit',
    use: 'On-device pose detection. Camera frames are processed locally on your device and are not sent to Rapsy servers.',
  },
];

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4 border-b border-border pb-8 last:border-b-0 last:pb-0">
      <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}

export function RapsyPrivacyPolicyContent() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8 max-w-4xl mx-auto font-sans">
      <div className="mb-10">
        <Link href="/rapsy" className="text-primary hover:underline mb-8 inline-block">
          &larr; Back to Rapsy
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Rapsy Privacy Policy</h1>
        <p className="text-muted-foreground text-lg">
          App: <strong>Rapsy</strong>
          <br />
          Developer: <strong>Adarsh Kumar Verma</strong>
          <br />
          Privacy contact: <a href="mailto:avwithai.port@gmail.com" className="text-primary hover:underline">avwithai.port@gmail.com</a>
          <br />
          Last updated: <strong>{lastUpdated}</strong>
        </p>
      </div>

      <div className="space-y-10 leading-relaxed text-muted-foreground">
        <Section title="1. Overview">
          <p>
            This Privacy Policy explains how Rapsy accesses, collects, uses, shares, retains, and deletes user data. Rapsy is an AI-powered fitness tracking app that uses on-device camera pose detection, Firebase account services, saved workout history, and Google Play subscriptions.
          </p>
          <p>
            Rapsy does not sell personal or sensitive user data. Rapsy does not show ads, use advertising tracking, use analytics SDKs, use Crashlytics, collect location, collect contacts, use health-record APIs, or upload camera images or videos to Rapsy servers.
          </p>
        </Section>

        <Section title="2. Data We Access or Collect">
          <div className="space-y-5">
            {collectedData.map((item) => (
              <article key={item.category} className="rounded-lg border border-border bg-muted/30 p-5">
                <h3 className="text-lg font-semibold text-foreground">{item.category}</h3>
                <p className="mt-2"><strong>Data:</strong> {item.details}</p>
                <p className="mt-2"><strong>Use:</strong> {item.purpose}</p>
                <p className="mt-2"><strong>Retention:</strong> {item.retention}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="3. How We Use Data">
          <ul className="list-disc space-y-2 pl-6">
            <li>To provide account sign-in, authentication, and account security.</li>
            <li>To save and display workout history, progress, subscription access, and app settings.</li>
            <li>To run on-device pose detection during workouts and provide rep counting or form feedback.</li>
            <li>To respond to support, account deletion, and data deletion requests.</li>
            <li>To comply with legal obligations, enforce terms, prevent fraud, and protect users and the app.</li>
          </ul>
        </Section>

        <Section title="4. Third-Party Services and Sharing">
          <p>
            Rapsy shares user data only with service providers needed to operate the app, process subscriptions, support sign-in, or comply with legal obligations. These providers process data under their own security and privacy terms.
          </p>
          <div className="space-y-4">
            {thirdParties.map((party) => (
              <article key={party.name} className="rounded-lg border border-border bg-muted/30 p-5">
                <h3 className="text-lg font-semibold text-foreground">{party.name}</h3>
                <p className="mt-2">{party.use}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section title="5. Camera and On-Device Processing">
          <p>
            Rapsy requests camera access only when you use workout tracking features that need pose detection. Camera frames are processed locally on your device using ML Kit. Rapsy does not transmit, save, upload, or share your camera feed, photos, or videos.
          </p>
        </Section>

        <Section title="6. Security">
          <p>
            Rapsy uses Firebase and Google Play services that transmit data over secure connections. Access to account and workout data is limited to app functionality, user support, security, and compliance needs. No method of transmission or storage is perfect, but Rapsy uses reasonable safeguards for the type of data handled by the app.
          </p>
        </Section>

        <Section title="7. Data Retention and Deletion">
          <p>
            Rapsy keeps account and workout data while your account is active so the app can provide its core features. When you delete your account in the app or send a verified deletion request, Rapsy deletes your Firebase Authentication profile and saved Rapsy workout data from active systems within 7 to 14 days.
          </p>
          <p>
            Some limited records may be retained longer when required for legitimate reasons such as security, fraud prevention, billing disputes, tax, accounting, legal compliance, or proof that a deletion request was completed. Google Play, RevenueCat, Firebase, and email providers may also retain data under their own required retention schedules.
          </p>
          <p>
            To request deletion from outside the app, visit the <Link href="/rapsy-data-deletion" className="text-primary hover:underline">Rapsy Account and Data Deletion page</Link> or email <a href="mailto:avwithai.port@gmail.com" className="text-primary hover:underline">avwithai.port@gmail.com</a> with the subject line <strong>Rapsy Data Deletion Request</strong>.
          </p>
        </Section>

        <Section title="8. Your Choices">
          <ul className="list-disc space-y-2 pl-6">
            <li>You can delete your Rapsy account in the app from the Profile or Settings area.</li>
            <li>You can request account or workout data deletion by email if you no longer have access to the app.</li>
            <li>You can cancel or manage subscriptions through your Google Play account settings.</li>
            <li>You can deny camera permission, but workout tracking features that require pose detection will not work without it.</li>
          </ul>
        </Section>

        <Section title="9. Children">
          <p>
            Rapsy is not directed to children under 13. If you believe a child has provided personal data to Rapsy, contact the developer so the data can be reviewed and deleted where appropriate.
          </p>
        </Section>

        <Section title="10. Changes and Contact">
          <p>
            This Privacy Policy may be updated from time to time. Updates will be posted on this page with a revised last updated date.
          </p>
          <p>
            For privacy questions, support, or deletion requests, contact:
            <br />
            <strong>Adarsh Kumar Verma</strong>
            <br />
            Email: <a href="mailto:avwithai.port@gmail.com" className="text-primary hover:underline">avwithai.port@gmail.com</a>
          </p>
        </Section>
      </div>
    </main>
  );
}
