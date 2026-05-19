import type { Metadata } from 'next';
import { WhichOneChildSafetyStandardsContent } from '@/components/legal/whichone-child-safety-standards-content';

export const metadata: Metadata = {
  title: 'whichOne Child Safety Standards',
  description:
    'Published child safety standards for whichOne, including CSAE and CSAM prohibition, reporting, enforcement, and child safety contact information.',
  alternates: {
    canonical: '/whichone-child-safety-standards',
  },
};

export default function WhichOneChildSafetyStandardsPage() {
  return <WhichOneChildSafetyStandardsContent />;
}
