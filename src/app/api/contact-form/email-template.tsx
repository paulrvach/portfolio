import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailTempleteProps {
  name?: string;
  email?: string;
  message?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

export const EmailTemplete = ({
  name,
  email,
  message,
}: EmailTempleteProps) => {
  const previewText = `Read ${name}'s review`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>

      <Body style={main}>
        <Section style={main}>
          <Container style={container}>
            
            <Section>
              <Img
                src={"https://res.cloudinary.com/dxmqknhgj/image/upload/v1695067576/DD4580EF-6A04-4FAF-B11A-8C32B62075FA_qidgxh_smv4lc.jpg"}
                width="96"
                height="96"
                alt={name}
                style={userImage}
              />
            </Section>
            <Section style={{ paddingBottom: '20px' }}>
              <Row>
                <Text style={heading}>Hi, {name} thanks for sending me this message.</Text>
                <Text style={review}>{message}</Text>
                <Text style={paragraph}>
                  I've been forwared this message and will be responding to your email at {email} shortly.
                </Text>
                
                <Text style={{ ...paragraph, paddingBottom: '16px' }}>
                  Alternativly send me a message on LinkedIn.
                </Text>
              </Row>
            </Section>

            <Hr style={hr} />

            <Section>
              <Row>
                <Text style={{ ...paragraph, fontWeight: '700' }}>
                  Socials
                </Text>
                <Text>
                  <Link href="https://www.linkedin.com/in/paul-vachon/" style={link}>
                    LinkedIn
                  </Link>
                </Text>
                <Text>
                  <Link
                    href="https://github.com/paulrvach"
                    style={link}
                  >
                    Github
                  </Link>
                </Text>
                <Text>
                  <Link href="https://paulvachon.dev" style={link}>
                    Website
                  </Link>
                </Text>
                <Hr style={hr} />
                <Text style={footer}>
                  Airbnb, Inc., 888 Brannan St, San Francisco, CA 94103
                </Text>
                <Link href="https://airbnb.com" style={reportLink}>
                  Report unsafe behavior
                </Link>
              </Row>
            </Section>
          </Container>
        </Section>
      </Body>
    </Html>
  );
};

export default EmailTemplete;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const userImage = {
  margin: '0 auto',
  marginBottom: '16px',
  borderRadius: '50%',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};

const review = {
  ...paragraph,
  padding: '24px',
  backgroundColor: '#f2f3f3',
  borderRadius: '4px',
};

const button = {
  backgroundColor: '#ff5a5f',
  borderRadius: '3px',
  color: '#fff',
  fontSize: '18px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  width: '100%',
};

const link = {
  ...paragraph,
  color: '#ff5a5f',
  display: 'block',
};

const reportLink = {
  fontSize: '14px',
  color: '#9ca299',
  textDecoration: 'underline',
};

const hr = {
  borderColor: '#cccccc',
  margin: '20px 0',
};

const footer = {
  color: '#9ca299',
  fontSize: '14px',
  marginBottom: '10px',
};
