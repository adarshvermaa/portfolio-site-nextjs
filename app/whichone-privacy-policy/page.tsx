import type { Metadata } from 'next';
import { WhichOnePrivacyPolicyContent } from '@/components/legal/whichone-privacy-policy-content';

export const metadata: Metadata = {
  title: 'whichOne Privacy Policy',
  description: 'Privacy Policy for the whichOne mobile application by Adarsh Kumar Verma.',
  alternates: {
    canonical: '/whichone-privacy-policy',
  },
};

export default function WhichOnePrivacyPolicyPage() {
  return <WhichOnePrivacyPolicyContent />;
}
