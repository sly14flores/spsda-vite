import Section1 from '../section-1';
import Section2 from '../section-2';
import HeaderEffect from '@/layouts/root/HeaderEffect';
import GradientBackground from '@/components/gradient-background';
export default function Career2PageView() {
  return <GradientBackground>
      {
      /* FIND YOUR JOB SECTION */
    }
      <HeaderEffect>
        <Section1 />
      </HeaderEffect>

      {
      /* AVAILABLE JOB SECTION */
    }
      <Section2 />
    </GradientBackground>;
}