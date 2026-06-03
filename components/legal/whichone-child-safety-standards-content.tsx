import type { ReactNode } from 'react';
import Link from 'next/link';

const lastUpdated = 'June 4, 2026';
const childSafetyEmail = 'avwithai.port@gmail.com';

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

export function WhichOneChildSafetyStandardsContent() {
  return (
    <main className="min-h-screen bg-background text-foreground py-20 px-4 md:px-8 max-w-4xl mx-auto font-sans">
      <div className="mb-10">
        <Link href="/whichone-privacy-policy" className="text-primary hover:underline mb-8 inline-block">
          &larr; Back to whichOne Privacy Policy
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          whichOne Child Safety Standards
        </h1>
        <p className="text-muted-foreground text-lg">
          App: <strong>whichOne</strong>
          <br />
          Developer: <strong>Adarsh Kumar Verma</strong>
          <br />
          Child safety contact:{' '}
          <a href={`mailto:${childSafetyEmail}`} className="text-primary hover:underline">
            {childSafetyEmail}
          </a>
          <br />
          Last updated: <strong>{lastUpdated}</strong>
        </p>
      </div>

      <div className="space-y-10 leading-relaxed text-muted-foreground">
        <Section title="1. Purpose and Scope">
          <p>
            These Child Safety Standards describe whichOne&apos;s public standards against child sexual abuse and
            exploitation (CSAE) and child sexual abuse material (CSAM). They apply to all users, profiles, messages,
            media, stories, requests, calls, reports, and other content or conduct in the whichOne app.
          </p>
          <p>
            whichOne is intended for adults and is not directed to children. Even when an app is intended for adults,
            child safety standards apply to any content or behavior that may exploit, abuse, endanger, groom, sextort,
            traffic, sexualize, or otherwise harm a child.
          </p>
        </Section>

        <Section title="2. Zero-Tolerance CSAE and CSAM Policy">
          <p>
            whichOne has zero tolerance for CSAE, CSAM, grooming, sextortion, trafficking of children, sexualization of
            minors, predatory behavior toward minors, attempts to obtain sexual imagery from a minor, or any content or
            conduct that facilitates child abuse or exploitation.
          </p>
          <p>
            Users may not create, upload, send, request, promote, distribute, store, or link to CSAM or CSAE content in
            whichOne. Users also may not use whichOne to contact, target, coerce, blackmail, solicit, exploit, or
            endanger a child in any way.
          </p>
        </Section>

        <Section title="3. Reporting Child Safety Concerns">
          <p>
            Users can report child safety concerns in the app through available report, block, abuse-report, support, or
            safety feedback flows. Reports may include account details, report reasons, report descriptions, timestamps,
            and related content needed to review the concern.
          </p>
          <p>
            Child safety concerns can also be sent directly to the designated contact:
            <br />
            <strong>Adarsh Kumar Verma</strong>
            <br />
            Email:{' '}
            <a href={`mailto:${childSafetyEmail}`} className="text-primary hover:underline">
              {childSafetyEmail}
            </a>
          </p>
          <p>
            If a child is in immediate danger, users should contact local emergency services or law enforcement first.
          </p>
        </Section>

        <Section title="4. Review, Removal, and Enforcement">
          <p>
            When whichOne obtains actual knowledge of CSAM or credible CSAE activity, the developer will review the
            report, restrict or remove violating content where technically possible, preserve relevant safety evidence
            when needed, and take action against accounts involved in child exploitation or endangerment.
          </p>
          <p>
            Enforcement may include content removal, account suspension, account termination, blocking access to app
            features, preserving relevant records for safety review, and cooperating with lawful requests from child
            safety authorities or law enforcement.
          </p>
        </Section>

        <Section title="5. Reporting to Authorities and Legal Compliance">
          <p>
            whichOne complies with applicable child safety laws and regulations. Confirmed CSAM or child exploitation
            concerns may be reported to the National Center for Missing &amp; Exploited Children (NCMEC), regional child
            safety reporting authorities, law enforcement, or other appropriate organizations where required or
            appropriate.
          </p>
          <p>
            whichOne may retain limited report, account, content, and technical metadata when necessary to investigate
            abuse, prevent repeat harm, comply with law, or assist authorized child safety and law enforcement processes.
          </p>
        </Section>

        <Section title="6. Prevention and User Controls">
          <ul className="list-disc space-y-2 pl-6">
            <li>whichOne uses account authentication and app security controls to reduce abusive access.</li>
            <li>Users can block other users and report abuse or safety concerns.</li>
            <li>whichOne may restrict accounts or content that violates these standards.</li>
            <li>whichOne does not knowingly allow children to create adult social discovery accounts.</li>
            <li>Safety-related records may be reviewed to detect repeated abuse and protect users.</li>
          </ul>
        </Section>

        <Section title="7. Google Play Child Safety Standards">
          <p>
            This page is published as whichOne&apos;s public child safety standards for Google Play&apos;s Child Safety
            Standards policy. It is intended to be a globally accessible web resource that identifies the app and
            developer, prohibits CSAE and CSAM, explains user reporting, describes action against CSAM, confirms child
            safety legal compliance, and provides a child safety point of contact.
          </p>
          <p>
            Additional privacy and data handling details are available in the{' '}
            <Link href="/whichone-privacy-policy" className="text-primary hover:underline">
              whichOne Privacy Policy
            </Link>
            .
          </p>
        </Section>
      </div>
    </main>
  );
}
