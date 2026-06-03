import type { ReactNode } from 'react';
import Link from 'next/link';

const lastUpdated = 'June 4, 2026';
const privacyEmail = 'avwithai.port@gmail.com';

const collectedData = [
  {
    category: 'Account and authentication data',
    details:
      'Firebase user ID, Google Sign-In profile details such as name, email address, and profile photo URL, sign-in status, account creation date, and account update date.',
    purpose:
      'Create and secure your whichOne account, keep you signed in, restore access, and connect your account to app features.',
    sharing:
      'Processed by Firebase Authentication and Google Sign-In. Your public display name and profile photo may be visible to other signed-in users according to app features and privacy settings.',
    retention:
      'Kept while your account is active. Deleted from active whichOne systems after a verified account deletion request, except where limited retention is needed for security, abuse prevention, billing, or legal compliance.',
  },
  {
    category: 'Profile and discovery data',
    details:
      'Display name, designation, bio, age, gender, interests, profile completion status, uploaded profile photos, visibility settings, blocked users, profile view counts, and profile view records.',
    purpose:
      'Show your profile, help nearby users decide whether to connect, support privacy controls, block/report safety features, and provide premium profile-view features.',
    sharing:
      'Profile fields, photos, interests, designation, approximate distance, and active story previews may be visible to signed-in users when your visibility settings allow it.',
    retention:
      'Kept while your account is active. Profile photos and profile data are removed during account deletion. Some safety or audit metadata may be retained in limited form when needed to protect users or comply with obligations.',
  },
  {
    category: 'Profile validation and limits',
    details:
      'Character and word count limitations on your display name (maximum 10 words) and bio description (maximum 30 words), and tag limits on custom interests (maximum 3 tags, with each interest tag restricted to a maximum of 5 words).',
    purpose:
      'Ensure a clean, readable, high-quality community, and prevent profile fields from being abused for spam or inappropriate content.',
    sharing:
      'Your display name, bio, and custom interests are visible to signed-in users as part of your public profile when visibility is enabled.',
    retention:
      'Retained while your profile is active, and removed from active systems upon account deletion.',
  },
  {
    category: 'Location and nearby visibility data',
    details:
      'Precise device location is accessed only after permission is granted. whichOne stores an approximate map location, geohash, nearby visibility mode, and nearby session expiry when nearby mode or map story sharing is enabled.',
    purpose:
      'Find nearby users, show approximate distance, power the map experience, and hide your location when visibility is off or a nearby session expires.',
    sharing:
      'Your exact live location is not shown to other users. Approximate distance, nearby presence, or map-story location may be visible to signed-in users based on your settings.',
    retention:
      'Nearby location records are temporary and are removed when visibility is hidden, permission is off, the session expires, you sign out, or you delete your account.',
  },
  {
    category: 'Requests, chats, reactions, and attachments',
    details:
      'Hangout requests, sender and receiver IDs, request messages, chat room membership, text messages, encrypted message payloads, E2EE device and key metadata, images, videos, voice messages, documents, encrypted file references, reply previews, reactions, file names, file sizes, timestamps, unread/read/delivery data, and deleted-message metadata.',
    purpose:
      'Send requests, create chats after a request is accepted, deliver messages, show read/delivery state, support message deletion, and maintain conversation integrity.',
    sharing:
      'Chat content and attachments are visible to the chat participants. Request details are visible to the sender and receiver. Notifications may include sender name and message preview.',
    retention:
      'Kept while needed for the chat feature. User-deleted messages are soft-deleted or marked as deleted. During account deletion, sent message content, encrypted payloads, encrypted file references, E2EE devices, and media are removed where technically possible, while limited room metadata may remain for the other participant and safety purposes.',
  },
  {
    category: 'Stories and map stories',
    details:
      'Photos or videos you capture or upload, captions, filters, media thumbnails, owner name, owner photo, story visibility, approximate map location when published to the map, story views, and timestamps.',
    purpose:
      'Create temporary stories, display stories on the map when selected, count story views, and help nearby users discover public map stories.',
    sharing:
      'Map stories are visible to signed-in users while active. Private or non-map stories are limited by the app feature in which they are used.',
    retention:
      'Stories are designed to expire after about 24 hours and are also removed when deleted by you or during account deletion. Cached copies and backups may expire later under Firebase systems.',
  },
  {
    category: 'Audio/video call and presence data',
    details:
      'Online status, last seen time, typing indicators, call session IDs, caller/receiver IDs, call type, call status, call logs, WebRTC signaling data, ICE candidates, live microphone/camera streams, foreground calling service state, full-screen incoming call intents, audio routing/bluetooth headset state, and phone vibration control.',
    purpose:
      'Show presence, support typing indicators, connect audio/video calls, display incoming call notifications, and log missed/ended calls.',
    sharing:
      'Presence and call state are visible to relevant chat participants. Live call media is sent through WebRTC between participants and may use STUN/TURN relay providers when required by the network.',
    retention:
      'Transient call setup records are cleaned up after calls end or expire where technically possible. whichOne does not record live audio or video calls.',
  },
  {
    category: 'Device permissions, local files, and camera/media access',
    details:
      'Camera, microphone, photo/video/audio library access, selected documents, downloaded files, and temporary local files created for compression, thumbnails, recording, or chat downloads.',
    purpose:
      'Capture stories, make audio/video calls, send media or documents, record voice messages, compress uploads, and save chat downloads you choose to open.',
    sharing:
      'Only files you choose to upload or send are transmitted to Firebase Storage and then shared with the intended app audience or chat participant.',
    retention:
      'Temporary local files are handled on your device. Uploaded profile, story, and chat media are retained as described for the relevant feature.',
  },
  {
    category: 'End-to-end encryption and device security data',
    details:
      'Device-specific encryption keys or public key material, encrypted private request notes, encrypted story replies, encrypted chat media metadata, secure local key storage state, and related setup status.',
    purpose:
      'Encrypt supported one-to-one chat messages, shared files, private request notes, and story replies on your device before upload, then decrypt them only on participant devices.',
    sharing:
      'Encrypted payloads may be stored in Firebase for delivery, but the content is designed to be readable only by intended participant devices. Notification previews are kept limited for privacy.',
    retention:
      'Kept while your account and active chats need encrypted messaging. If you reinstall or move to a new device, older encrypted content may not be recoverable. E2EE device records are deleted or anonymized during account deletion where technically possible.',
  },
  {
    category: 'Notifications and app activity data',
    details:
      'Firebase Cloud Messaging tokens, notification delivery data, active chat room marker, active chat room expiry, unread counts, notification interaction data, and foreground/background notification state.',
    purpose:
      'Send requests, chat, story, and incoming call notifications; avoid duplicate notifications; and keep notification counts accurate.',
    sharing:
      'Processed by Firebase Cloud Messaging and device notification services. Notification previews may appear on your device according to your operating-system settings.',
    retention:
      'Notification tokens are kept while your account is active and are removed or invalidated when no longer usable or when your account is deleted.',
  },
  {
    category: 'Payments, subscriptions, coins, and purchase status',
    details:
      'RevenueCat app user ID, entitlement status, product ID, store, expiry date, subscription tier, coin balance, and coin transaction history. Payment card details are handled by Google Play, not by whichOne.',
    purpose:
      'Provide paid features, restore purchases, manage subscriptions, prevent fraud, track coin balances, and provide purchase support.',
    sharing:
      'Processed by Google Play Billing and RevenueCat. whichOne stores purchase status needed to unlock app features.',
    retention:
      'Kept while needed for subscriptions, support, fraud prevention, tax, accounting, dispute handling, and legal compliance. Google Play and RevenueCat may retain transaction records under their own policies.',
  },
  {
    category: 'Reports, blocks, support, and deletion requests',
    details:
      'Blocked user IDs, report reason, report description, reporter ID, reported account ID, support emails, deletion request details, and request verification information.',
    purpose:
      'Protect users, investigate abuse, enforce safety controls, respond to support requests, and process account or data deletion requests.',
    sharing:
      'Reports are restricted to the developer or service providers needed for safety review. Support and deletion emails are handled through the developer contact channel.',
    retention:
      'Support and deletion messages are normally kept for up to 90 days after resolution. Safety records may be retained longer when needed to prevent abuse, investigate reports, or comply with legal obligations.',
  },
];

const thirdParties = [
  {
    name: 'Firebase Authentication',
    use: 'Google-backed account authentication and account security.',
  },
  {
    name: 'Cloud Firestore, Firebase Realtime Database, Firebase Storage, Cloud Functions, Firebase Cloud Messaging, and Firebase App Check',
    use: 'App database, presence, media storage, backend functions, push notifications, and abuse-resistant backend access.',
  },
  {
    name: 'Google Sign-In',
    use: 'Optional sign-in provider for creating and accessing your whichOne account.',
  },
  {
    name: 'Google Play Billing',
    use: 'In-app purchase and subscription payment processing. whichOne does not receive your full payment card details.',
  },
  {
    name: 'RevenueCat',
    use: 'Subscription entitlement management, purchase restoration, and subscription webhook status updates.',
  },
  {
    name: 'Mapbox and OpenStreetMap contributors',
    use: 'Map tile display. Map tile providers may receive technical request data such as IP address, device/browser request information, and requested map tile coordinates when map tiles load.',
  },
  {
    name: 'WebRTC STUN/TURN providers',
    use: 'Audio/video call connectivity. Calls use WebRTC and may use STUN/TURN relay infrastructure when a direct connection is not possible.',
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

export function WhichOnePrivacyPolicyContent() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8 max-w-4xl mx-auto font-sans">
      <div className="mb-10">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">
          &larr; Back to Portfolio
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">whichOne Privacy Policy</h1>
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

      <div className="space-y-10 leading-relaxed text-muted-foreground">
        <Section title="1. Overview">
          <p>
            This Privacy Policy explains how whichOne accesses, collects, uses, shares, retains, and deletes user data.
            whichOne is a nearby social discovery, request, story, chat, and calling app that uses Firebase services,
            Google Sign-In, location permission, media permissions, notifications, WebRTC calls, Google Play Billing,
            and RevenueCat subscriptions.
          </p>
          <p>
            whichOne does not sell personal or sensitive user data. whichOne does not show third-party ads and does
            not use advertising tracking SDKs. The app is intended for adults and is not directed to children.
          </p>
        </Section>

        <Section title="2. Data We Access or Collect">
          <div className="space-y-5">
            {collectedData.map((item) => (
              <article key={item.category} className="rounded-lg border border-border bg-muted/30 p-6 shadow-sm backdrop-blur-xs">
                <h3 className="text-lg font-bold text-foreground tracking-tight border-b border-border/50 pb-2 mb-4">{item.category}</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-4 gap-y-1">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider self-start md:text-right pt-0.5">Data</span>
                    <span className="text-foreground/90">{item.details}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-4 gap-y-1">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider self-start md:text-right pt-0.5">Purpose</span>
                    <span>{item.purpose}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-4 gap-y-1">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider self-start md:text-right pt-0.5">Sharing</span>
                    <span>{item.sharing}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-[100px_1fr] gap-x-4 gap-y-1">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider self-start md:text-right pt-0.5">Retention</span>
                    <span>{item.retention}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section title="3. How We Use Data">
          <ul className="list-disc space-y-2 pl-6">
            <li>To create, secure, and maintain user accounts.</li>
            <li>To show public profiles, nearby discovery, approximate distance, map stories, and privacy controls.</li>
            <li>To send hangout requests, create chats, deliver messages, support media sharing, and enable audio/video calls.</li>
            <li>To provide notifications, presence, typing status, unread counts, subscriptions, premium features, and coins.</li>
            <li>To respond to support, account deletion, data deletion, report, and safety requests.</li>
            <li>To prevent spam, fraud, abuse, unauthorized access, and policy violations.</li>
            <li>To comply with legal obligations and enforce app terms or safety rules.</li>
          </ul>
        </Section>

        <Section title="4. Location, Camera, Microphone, and Media Permissions">
          <p>
            Location is used only when you grant permission and use location-based features such as nearby discovery or
            map stories. whichOne stores approximate location information for map features rather than showing your exact
            live location to other users.
          </p>
          <p>
            Camera, microphone, photos, videos, audio, and document access are used only for features you choose to use,
            such as stories, profile photos, chat attachments, voice messages, and audio/video calls. Live calls are not
            recorded by whichOne.
          </p>
        </Section>

        <Section title="5. Third-Party Services and Sharing">
          <p>
            whichOne shares data only with service providers needed to operate the app, process purchases, support maps,
            deliver notifications, connect calls, provide support, prevent abuse, or comply with law. These providers may
            process data under their own terms and privacy policies.
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

        <Section title="6. Security">
          <p>
            whichOne uses Firebase and Google-backed services that transmit data over secure connections. Firestore,
            Realtime Database, and Storage security rules limit access based on authentication, ownership, and feature
            permissions. New one-to-one chat messages, shared chat files, private request notes, and story replies are
            encrypted on the device before upload where the app feature supports encryption. No internet service can
            guarantee perfect security, but whichOne uses reasonable safeguards for the data handled by the app.
          </p>
        </Section>

        <Section title="7. Data Retention and Deletion">
          <p>
            whichOne keeps account, profile, discovery, chat, story, purchase status, and safety data while your account
            is active and while the data is needed to provide app functionality. Temporary nearby sessions, active stories,
            call setup data, notification markers, and cached app state are designed to expire or be cleared when no longer
            needed.
          </p>
          <p>
            You can request account and associated data deletion from inside the app or from the public deletion page.
            When an account deletion request is verified, whichOne deletes or anonymizes account data from active systems
            within a reasonable period, normally 7 to 14 days. This includes profile data, map stories, story and profile
            view records, requests, approximate location data, notification tokens, E2EE devices, sent chat content,
            encrypted message payloads, and encrypted chat file references where technically possible.
          </p>
          <p>
            Some limited information may be retained longer where needed for security, fraud prevention, abuse reports,
            dispute handling, tax, accounting, legal compliance, or to preserve another user&apos;s conversation context
            after your sent content has been removed. Google Play, RevenueCat, Firebase, Mapbox, email providers, and
            device platforms may also retain data under their own policies.
          </p>
          <p>
            To request deletion from outside the app, visit the{' '}
            <Link href="/whichone-data-deletion" className="text-primary hover:underline">
              whichOne Account and Data Deletion page
            </Link>{' '}
            or email{' '}
            <a href={`mailto:${privacyEmail}`} className="text-primary hover:underline">
              {privacyEmail}
            </a>{' '}
            with the subject line <strong>whichOne Data Deletion Request</strong>.
          </p>
        </Section>

        <Section title="8. Your Choices">
          <ul className="list-disc space-y-2 pl-6">
            <li>You can hide nearby visibility, turn off nearby mode, or deny location permission.</li>
            <li>You can delete stories, delete your own chat messages, remove profile photos, block users, and report abuse.</li>
            <li>You can request deletion of your whole account or specific data from the public data deletion page.</li>
            <li>You can deny camera, microphone, notification, or media permissions, but related app features may not work.</li>
            <li>You can manage or cancel subscriptions through Google Play account settings.</li>
            <li>You can delete your account in the app from Settings &gt; Data Deletion or request deletion by email.</li>
          </ul>
        </Section>

        <Section title="9. Children and Child Safety">
          <p>
            whichOne is intended for adults and requires users to provide an adult age during profile setup. The app is
            not directed to children under 13. If you believe a child has provided personal data to whichOne, contact the
            developer so the data can be reviewed and deleted where appropriate.
          </p>
          <p>
            whichOne has zero tolerance for child sexual abuse and exploitation (CSAE), child sexual abuse material
            (CSAM), grooming, sextortion, trafficking of children, sexualization of minors, predatory behavior toward
            minors, or any content or conduct that endangers children.
          </p>
          <p>
            Users can report child safety concerns in the app through available report, block, abuse-report, support, or
            safety feedback flows. Child safety concerns can also be sent to{' '}
            <a href={`mailto:${privacyEmail}`} className="text-primary hover:underline">
              {privacyEmail}
            </a>
            . When whichOne obtains actual knowledge of CSAM or credible CSAE activity, the developer may remove content,
            restrict or terminate accounts, preserve relevant safety evidence, and report confirmed CSAM or child
            exploitation concerns to NCMEC, law enforcement, regional child safety authorities, or other appropriate
            organizations where required or appropriate.
          </p>
          <p>
            whichOne&apos;s published child safety standards are available on the{' '}
            <Link href="/whichone-child-safety-standards" className="text-primary hover:underline">
              whichOne Child Safety Standards page
            </Link>
            .
          </p>
        </Section>

        <Section title="10. Changes and Contact">
          <p>
            This Privacy Policy may be updated from time to time. Updates will be posted on this page with a revised last
            updated date.
          </p>
          <p>
            For privacy questions, support, or deletion requests, contact:
            <br />
            <strong>Adarsh Kumar Verma</strong>
            <br />
            Email:{' '}
            <a href={`mailto:${privacyEmail}`} className="text-primary hover:underline">
              {privacyEmail}
            </a>
          </p>
        </Section>
      </div>
    </main>
  );
}
