import { useState } from 'react';
import OtpInput from 'react-otp-input'; // MUI

import Button from '@mui/material/Button';
import Container from '@mui/material/Container'; // MUI ICON COMPONENT

import ChevronLeftRounded from '@mui/icons-material/ChevronLeftRounded'; // CUSTOM COMPONENTS

import { Paragraph, Span } from '@/components/typography';
import GradientBackground from '@/components/gradient-background'; // STYLED COMPONENTS

import { MainContent, OtpInputField } from './styles';
export default function VerifyCodePageView() {
  const [otp, setOtp] = useState('5');
  return <GradientBackground>
      <Container>
        <MainContent>
          <div className="img-wrapper">
            <img src="/static/pages/email.svg" alt="email" width="100%" />
          </div>

          <h6 className="title">Check your email!</h6>

          <p className="description">
            Please check your email inbox for a 5-digit verification code we have sent to your
            registered email address. Enter the code in the field below to confirm your email and
            complete the verification process.
          </p>

          <div className="form-wrapper">
            <OtpInput value={otp} numInputs={5} onChange={setOtp} placeholder="-----" renderInput={props => <OtpInputField {...props} />} containerStyle={{
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem'
          }} />

            <Button size="large" fullWidth>
              Verify
            </Button>
          </div>

          <Paragraph mt={4} mb={1} fontSize={16}>
            Don’t have a code?{' '}
            <Span className="resend" onClick={() => {}}>
              Resend code
            </Span>
          </Paragraph>

          <Button variant="text" disableRipple startIcon={<ChevronLeftRounded />}>
            Return to sign in
          </Button>
        </MainContent>
      </Container>
    </GradientBackground>;
}