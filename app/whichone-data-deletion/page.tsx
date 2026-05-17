import type { Metadata } from 'next';
import Link from 'next/link';

const lastUpdated = 'May 17, 2026';
const privacyEmail = 'avwithai.port@gmail.com';
const mailtoHref =
  'mailto:avwithai.port@gmail.com?subject=whichOne%20Data%20Deletion%20Request';

export const metadata: Metadata = {
  title: 'whichOne Account and Data Deletion',
  description:
    'Instructions to request account and data deletion for the whichOne mobile application by Adarsh Kumar Verma.',
  alternates: {
    canonical: '/whichone-data-deletion',
  },
};

export default function WhichOneDataDeletionPage() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8 max-w-4xl mx-auto font-sans">
      <div className="mb-10">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">
          &larr; Back to Portfolio
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">whichOne Account &amp; Data Deletion</h1>
        <p className="text-muted-foreground text-lg">
          App: <strong>whichOne</strong>
          <br />
          Developer: <strong>Adarsh Kumar Verma</strong>
          <br />
          Privacy contact:{' '}
          <a href={`mailto:${privacyEmail}`} className="text-primary hover:underline">
            {privacyEmail}
          </a>
          <br />
          Last updated: <strong>{lastUpdated}</strong>
        </p>
      </div>

      <div className="space-y-12 leading-relaxed">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-border pb-2">Request Deletion From the Web</h2>
          <p className="text-muted-foreground">
            If you cannot access the app, you can request deletion of your whichOne account and associated app data by
            email. This public page is provided for Google Play account-deletion and data-deletion requests.
          </p>
          <div className="rounded-lg border border-border bg-muted/40 p-6">
            <h3 className="text-lg font-semibold text-foreground mb-3">Email request steps</h3>
            <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
              <li>
                Send an email to{' '}
                <a href={mailtoHref} className="text-primary hover:underline">
                  {privacyEmail}
                </a>{' '}
                with the subject line <strong>whichOne Data Deletion Request</strong>.
              </li>
              <li>Include the email address used for Google Sign-In in whichOne.</li>
              <li>State whether you want to delete your entire account or only specific data.</li>
              <li>Do not send your password. We may ask for reasonable information to verify account ownership.</li>
            </ol>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-border pb-2">In-App Account Deletion</h2>
          <p className="text-muted-foreground">
            You can also start account deletion directly from the whichOne app:
          </p>
          <ol className="list-decimal space-y-2 pl-6 text-muted-foreground">
            <li>Open the whichOne app and sign in.</li>
            <li>Go to <strong>Settings</strong>.</li>
            <li>Open <strong>Data Deletion</strong>.</li>
            <li>Tap <strong>Delete Account</strong>.</li>
            <li>Confirm the deletion prompt.</li>
          </ol>
          <p className="text-sm text-amber-600 dark:text-amber-400">
            Account deletion is permanent and cannot be undone once completed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-border pb-2">What Is Deleted or Anonymized</h2>
          <p className="text-muted-foreground">
            After a verified account deletion request, whichOne removes or anonymizes account data from active systems,
            including:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Firebase Authentication account data for the whichOne account.</li>
            <li>Profile data, including display name, bio, age, gender, interests, designation, visibility settings, profile photos, and profile view records.</li>
            <li>Nearby visibility data, approximate map location, geohash, and location-session expiry data.</li>
            <li>Owned stories, map stories, story media, story thumbnails, captions, and story view records where technically possible.</li>
            <li>Sent and received hangout requests.</li>
            <li>Reports submitted by you. Reports about the deleted account may be retained with the account identity minimized when needed for safety.</li>
            <li>Active call sessions connected to the account.</li>
            <li>Notification tokens and active chat notification markers stored on the account.</li>
            <li>E2EE device records and encryption setup metadata tied to your account where technically possible.</li>
            <li>Sent chat message content, encrypted message payloads, sent media attachments, encrypted chat file references, and deleted-message markers where technically possible. Chat rooms may retain limited metadata so the other participant can preserve conversation context.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-border pb-2">Data That May Be Retained</h2>
          <p className="text-muted-foreground">
            Some limited data may be retained after account deletion when necessary for legitimate reasons, including:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
            <li>Safety, abuse-prevention, blocking, report, or fraud-prevention records.</li>
            <li>Purchase, subscription, coin, and entitlement records needed for support, tax, accounting, chargeback, or legal compliance.</li>
            <li>Minimal anonymized chat room, call, report, or deleted-message metadata needed to preserve another user&apos;s conversation context or protect users.</li>
            <li>Server logs, backups, cached copies, or service-provider records until they expire under Firebase, Google Play, RevenueCat, email, or infrastructure retention schedules.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-border pb-2">Subscriptions and Google Play Purchases</h2>
          <p className="text-muted-foreground">
            Deleting your whichOne account does not automatically cancel an active Google Play subscription. To stop
            future billing, manage or cancel the subscription in your Google Play account settings. Google Play and
            RevenueCat may retain purchase and transaction records according to their own financial, fraud-prevention,
            refund, tax, and legal requirements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-border pb-2">Timing</h2>
          <p className="text-muted-foreground">
            In-app deletion starts immediately after confirmation. Email requests are reviewed and fulfilled after
            reasonable verification, normally within 7 to 14 days. Some backups, cached copies, service-provider records,
            or legally retained records may take longer to expire.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-border pb-2">Delete Specific Data Without Deleting Your Account</h2>
          <p className="text-muted-foreground">
            You can delete some content in the app without deleting your account, such as your own stories, profile
            photos, and chat messages where the feature allows it. You may also email{' '}
            <a href={mailtoHref} className="text-primary hover:underline">
              {privacyEmail}
            </a>{' '}
            to request deletion of specific whichOne data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-border pb-2">Privacy Policy and Contact</h2>
          <p className="text-muted-foreground">
            For full details about what whichOne collects, how data is used, retention periods, and third-party services,
            read the{' '}
            <Link href="/whichone-privacy-policy" className="text-primary hover:underline">
              whichOne Privacy Policy
            </Link>
            .
          </p>
          <p className="text-muted-foreground">
            Developer: <strong>Adarsh Kumar Verma</strong>
            <br />
            Email:{' '}
            <a href={`mailto:${privacyEmail}`} className="text-primary hover:underline">
              {privacyEmail}
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
