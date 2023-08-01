import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';
import { formatNumber } from 'libphonenumber-js';
import type { initialState } from './ContactForm';

export const ConfirmationEmail = ({
  firstName,
  lastName,
  phoneNumber,
  email,
  company,
  message,
}: initialState) => {
  const previewText = `Hello ${firstName} thanks for getting in touch with me!`;
  const formattedNumber = formatNumber(phoneNumber, 'US', 'NATIONAL');
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans'>
          <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]'>
            <Section className='mt-[32px]'>
              <Img
                src={`https://res.cloudinary.com/dxmqknhgj/image/upload/v1690858066/DD4580EF-6A04-4FAF-B11A-8C32B62075FA_copy_cj4mbx.jpg`}
                width='100'
                height='100'
                alt='ME'
                style={{ clipPath: 'circle(50% at 50% 50%)' }}
                className='my-0 mx-auto border-4 border-blue-500'
              />
            </Section>
            <Heading className='text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
              Thanks for getting in touch!
            </Heading>
            <Text className='text-black text-[14px] leading-[24px]'>
              Hello {firstName},
            </Text>
            <Section>
              <Text>
                Thank for reaching out to me. I appreciate your
                interest and will get back to you as soon as possible.
              </Text>
              <Text>
                If you have any immediate questions, feel free to reply to this
                email or call me at{' '}
                <strong className=''>+1 (626) 733-7708</strong>.
              </Text>
              <Text>Message Sent,</Text>
              <Row>
                <Text>
                  <strong>Name:</strong> {firstName + ' ' + lastName}
                </Text>
              </Row>
              <Row>
                <Text>
                  <strong>Company:</strong> {company}
                </Text>
              </Row>
              <Row>
                <Text>
                  <strong>Phone Number:</strong> {formattedNumber}
                </Text>
              </Row>
              <Row>
                <Text>
                  <strong>Email:</strong> {email}
                </Text>
              </Row>
              <Section className='bg-neutral-200 rounded-md  text-md border-2'>
                <Text className='p-4 text-sm'>{`${message}`}</Text>
              </Section>
              <Hr />
              <Text>
                Best Regards,
                <br />
                <strong>Paul Vachon</strong>
              </Text>
              <Row className=' py-2'>
                <Button>
                  <Link
                    className='text-sm'
                    href='https://paul-vachon.vercel.app/'
                  >
                    Visit my website
                  </Link>
                </Button>
              </Row>
              <Row className=' py-2'>
                <Button>
                  <Link
                    className='text-sm'
                    href='https://www.linkedin.com/in/paul-vachon/'
                  >
                    LinkedIn
                  </Link>
                </Button>
              </Row>
              <Row className=' py-2'>
                <Button>
                  <Link className='text-sm' href='https://github.com/paulrvach'>
                    GitHub
                  </Link>
                </Button>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ConfirmationEmail;
