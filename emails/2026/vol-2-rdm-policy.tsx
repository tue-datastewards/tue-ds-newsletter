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
} from "@react-email/components";
import * as React from "react";
import { dataStewards } from "../../data/dataStewards";
import { createTable } from "../../lib/createTable";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : process.env.EMAIL_DEV
    ? ""
    : process.env.NEXT_PUBLIC_BASE_PATH || "/tue-ds-newsletter";

type NewsletterEmailProps = {
  unsubscribeUrl: string;
};

export const NewsletterEmail = ({ unsubscribeUrl }: NewsletterEmailProps) => (
  <Tailwind>
    <Html className="font-sans">
      <Head />
      <Preview>Research Data Stewards Newsletter Vol. 2</Preview>
      <Body className="bg-[#313846]">
        <Section className="bg-[#313846]">
        <Container>
          <Section className="text-center py-2">
            <Link
              href="{webversion}"
              className="text-[#9ca3af] text-xs"
            >
              View this newsletter on your browser
            </Link>
          </Section>
          <Section className="bg-[#823969] text-white px-4 py-[20px]">
            <Row>
              <Column width="41">
                <Link href="https://rdm.tue.nl/">
                  <Img
                    src={`https://rdm.tue.nl/img/logo.svg`}
                    height={41}
                    alt="TU/e Logo"
                  />
                </Link>
              </Column>
              <Column className="pl-2">
                <Link className="text-white" href="https://rdm.tue.nl/">
                  <Text className="text-lg font-semibold">
                    Research Data Stewards Newsletter
                  </Text>
                </Link>
              </Column>
              <Column>
                <Text className="text-[#fafafa]">Vol. 2</Text>
              </Column>
            </Row>
          </Section>
        </Container>
        <Container className="bg-white text-[#121212] px-3">
          <Section className="text-center pt-[20px] pb-[20px]">
            <Heading className="mt-0 mb-[25px]">
              RDM Policy, DataBites,
              <br />
              FAIR Clinic & more
            </Heading>
            <Img
              src="https://zenodo.org/api/iiif/record:15309047:1-0040%20Research%20Data%20Management%20Framework%20Policy.pdf/pct:0,5,100,40/%5E1200,/0/default.jpg"
              width="100%"
              className="rounded-lg"
            />
          </Section>
        </Container>
        <Container className="bg-white text-[#121212] px-3">
          <Section>
            <Heading as="h2">RDM Policy</Heading>
            <Text>
              Did you know that TU/e has a brand new Research Data Management
              Policy?
            </Text>
            <Text>
              The TU/e Research Data Framework Policy (RDM Framework Policy)
              defines roles and responsibilities for researchers and research
              support staff regarding the management of research data.
            </Text>
            <Text>
              You can learn more about the policy and what it means to you on
              our{" "}
              <Link
                href="https://rdm.tue.nl/docs/intro/tue-policy/"
                className="text-[#742459]"
              >
                RDM Handbook page:
              </Link>
            </Text>
            <Section className="text-center">
              <Button
                className="bg-[#742459] text-white box-border rounded-md py-3 px-4 text-center font-semibold w-auto my-4"
                href="https://rdm.tue.nl/docs/intro/tue-policy/"
              >
                Learn more about the RDM Policy
              </Button>
            </Section>
          </Section>

          <Section>
            <Heading as="h2">What&apos;s new in the Research Cockpit?</Heading>
            <Text>
              As part of being compliant with the RDM Policy, we have developed
              the Research Cockpit, a one stop shop for researchers, where you
              can find templates for your Data Management Plan, Ethical
              Application, Data sharing agreements, and much more.
            </Text>
            <Text>In this newsletter, we would like to highlight:</Text>
            <Heading as="h3" className="text-lg">
              RAPS: Research Archival Packaging Solution
            </Heading>
            <Text>
              Closed TU/e archive for data underlying your article once it is
              accepted for publication in a scientific peer-reviewed journal.
              RAPS will preserve this research data for long term.
            </Text>
            <Section className="text-center">
              <Link href="https://cockpit.research.tue.nl/servicedesk/customer/portal/7">
                <Img
                  src={`${baseUrl}/static/RAPS.png`}
                  width="100%"
                  alt="RAPS"
                  className="mx-auto my-4 rounded-lg"
                />
              </Link>
              <Button
                className="bg-[#742459] text-white box-border rounded-md py-3 px-4 text-center font-semibold w-auto my-4"
                href="https://cockpit.research.tue.nl/servicedesk/customer/portal/7"
              >
                Go to RAPS
              </Button>
            </Section>
          </Section>

          <Section>
            <Heading as="h2">DataBites</Heading>
            <Text>
              DataBites is a series of online sessions designed to spread
              awareness on various topics related to Research Data Management.
              Each session features a quick 15-minute talk or demo, followed by
              a 15-minute chat, focusing on one specific RDM topic. From RDM
              essentials, FAIR principles, documentation, versioning, storage to
              preparing data for publishing (to name just a few).
            </Text>
            <Section className="text-center">
              <Link href="https://rdm.tue.nl/docs/learning-resources/data-bites/">
                <Img
                  src={`${baseUrl}/static/data-bites-banner.jpg`}
                  width="100%"
                  alt="DataBites"
                  className="mx-auto my-4 rounded-lg"
                />
              </Link>
              <Button
                className="bg-[#742459] text-white box-border rounded-md py-3 px-4 text-center font-semibold w-auto my-4"
                href="https://rdm.tue.nl/docs/learning-resources/data-bites/"
              >
                Join DataBites
              </Button>
            </Section>
          </Section>

          <Section>
            <Heading as="h2">FAIR Data Clinic</Heading>
            <Text>
              Do you care about your data having an impact beyond your papers?
            </Text>
            <Text>
              Join our monthly FAIR Data Clinic: a practical session in which we
              help you making your dataset ready for repository deposit.
            </Text>
            <Section className="text-center">
              <Link href="https://rdm.tue.nl/docs/learning-resources/fair-clinic/">
                <Img
                  src={`https://rdm.tue.nl/assets/images/fair-clinic-3a2f86ded67e9d3449adb6e2856eef3d.jpg`}
                  width={"100%"}
                  alt="FAIR Clinic"
                  className="mx-auto my-4 rounded-lg"
                />
              </Link>
              <Button
                className="bg-[#742459] text-white box-border rounded-md py-3 px-4 text-center font-semibold w-auto my-4"
                href="https://rdm.tue.nl/docs/learning-resources/fair-clinic/"
              >
                Sign up for FAIR Data Clinic
              </Button>
            </Section>
          </Section>

          <Section>
            <Heading as="h2">Open Science Community Eindhoven</Heading>
            <Text>
              The community is a growing group of researchers, engineers,
              scientists and university faculty who care about transparency and
              quality in science.
            </Text>
            <Text>
              Our goal is to form an inclusive community of people working on
              improving the way we conduct open science at the Eindhoven
              University of Technology and to help others do the same.
            </Text>
            <Section className="text-center">
              <Link href="https://osceindhoven.nl/">
                <Img
                  src={`${baseUrl}/static/osc-eindhoven-logo.svg`}
                  width={200}
                  alt="Open Science Community Eindhoven logo"
                  className="mx-auto my-4 bg-white p-4 rounded-lg"
                />
              </Link>
              <Button
                className="bg-[#742459] text-white box-border rounded-md py-3 px-4 text-center font-semibold w-auto my-4"
                href="https://osceindhoven.nl/"
              >
                Learn more about OSC Eindhoven
              </Button>
            </Section>
          </Section>

          <Section>
            <Heading as="h2">
              <span className="text-sm font-normal">
                Trivia from Data Steward:
                <br />
              </span>
              The Mere-Exposure Effect
            </Heading>
            <Text className="bg-[#742459] text-white px-3 py-3">
              Did you know that simply seeing something repeatedly makes you
              like it more, even if you don&apos;t realize it? Psychologists
              call this phenomenon the &ldquo;mere-exposure effect&rdquo;. This
              is one reason why advertisers repeat their messages.
            </Text>
            <Section className="text-center">
              <Img
                className="w-full object-cover rounded-lg my-4"
                height={250}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg/960px-Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg"
              />
              <Text className="text-xs text-gray-500">
                Andy Warhol&apos;s Campbell&apos;s Soup Cans paintings displayed
                at the Museum of Modern Art, photographed by Brandon Fick, 12
                May 2006. Source: Flickr. Licensed under CC BY 2.0.
              </Text>
            </Section>
            <Text>
              The effect highlights the power of the environment on us. Feeling
              a bit helpless? We can curate what we surround ourselves with to
              influence our preferences. Do you have something that you
              don&apos;t enjoy but want to do for the greater good? Perhaps you
              find making data FAIR challenging, but you want to do so for open
              science? You can surround yourself with things that you&apos;d
              like to overcome and let familiarity do its work. Keep the{" "}
              <Link
                className="text-[#742459] font-bold"
                href="https://rdm.tue.nl/"
              >
                RDM Handbook
              </Link>{" "}
              on your desk, join the{" "}
              <Link
                className="text-[#742459] font-bold"
                href="https://rdm.tue.nl/docs/learning-resources/data-bites/"
              >
                DataBites session
              </Link>
              , or sign up for{" "}
              <Link
                className="text-[#742459] font-bold"
                href="https://rdm.tue.nl/docs/learning-resources/fair-clinic/"
              >
                FAIR Data Clinics
              </Link>
              . Let&apos;s design our environment to conquer our own resistance.
            </Text>
            <Text>Nami (social psychology)</Text>
          </Section>
        </Container>
        <Container className="my-4">
          <Text className="text-center text-[#ff84d2]">
            <Link className="text-[#ff84d2]" href="https://rdm.tue.nl/">
              RDM Handbook
            </Link>{" "}
            <span className="text-gray-400">|</span>{" "}
            <Link
              className="text-[#ff84d2]"
              href="https://openpar.pages.tue.nl/solution-searcher/index.html"
            >
              Solution Searcher
            </Link>{" "}
            <span className="text-gray-400">|</span>{" "}
            <Link
              className="text-[#ff84d2]"
              href="https://zenodo.org/communities/tue_rdmsupport/records?q=&l=list&p=1&s=10&sort=newest"
            >
              Zenodo Community
            </Link>
          </Text>
          <Text className="text-center text-[#ff84d2]">
            <Link
              className="text-[#ff84d2]"
              href="https://tue.atlassian.net/helpcenter/research/"
            >
              Research Cockpit
            </Link>{" "}
            <span className="text-gray-400">|</span>{" "}
            <Link
              className="text-[#ff84d2]"
              href="https://tuenl.sharepoint.com/sites/intranet-LIS/SitePages/Data-stewards(1).aspx"
            >
              Intranet
            </Link>
          </Text>
          <Text className="text-center text-gray-200">
            CC0 No Rights Reserved <br />
            Public Domain Dedication 🧡
          </Text>
          <Text className="text-center text-[#ff84d2]">
            <Link
              className="text-[#ff84d2]"
              href="https://par.copernica.tue.nl/"
            >
              Subscribe
            </Link>{" "}
            <span className="text-gray-400">|</span>{" "}
            <Link
              className="text-[#ff84d2]"
              href={unsubscribeUrl || "{unsubscribe}"}
            >
              Unsubscribe
            </Link>
          </Text>
        </Container>
        </Section>
      </Body>
    </Html>
  </Tailwind>
);

export default NewsletterEmail;
