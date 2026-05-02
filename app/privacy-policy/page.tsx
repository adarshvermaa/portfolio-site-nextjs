import type { Metadata } from 'next';
import { RapsyPrivacyPolicyContent } from '@/components/legal/rapsy-privacy-policy-content';

export const metadata: Metadata = {
  title: 'Rapsy Privacy Policy',
  description: 'Privacy Policy for the Rapsy mobile application by Adarsh Kumar Verma.',
  alternates: {
    canonical: '/rapsy-privacy-policy',
  },
};

export default function PrivacyPolicyAliasPage() {
  return <RapsyPrivacyPolicyContent />;
}
