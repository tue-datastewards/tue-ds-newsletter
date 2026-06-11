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
  : "";

type NewsletterEmailProps = {
  unsubscribeUrl: string;
};

export const NewsletterEmail = ({ unsubscribeUrl }: NewsletterEmailProps) => (
  <Tailwind>
    <Html className="font-sans">
      <Head />
      <Preview>Research Data Stewards Newsletter Vol. 2</Preview>
      <Body className="bg-gray-100">
        <Container>
          <Section className="bg-fuchsia-800 text-sm px-4 py-[20px]">
            <Row>
              <Column>
                <Link href="https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management">
                  <Img
                    src={`https://github.com/nsunami/tue-ds-newsletter/blob/7d2db72f3a20ed92ab69104ce3f669cfa6d6a2e7/emails/static/TUe-logo-descriptor-line-white.png?raw=true`}
                    width={150}
                    height={41}
                    alt="TU/e Logo"
                  />
                </Link>
              </Column>

              <Column className="text-right">
                <Link
                  className="text-white [text-decoration:none]"
                  href="https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management"
                >
                  Web
                </Link>
              </Column>
              <Column className="text-right pl-4">
                <Link
                  className="text-white [text-decoration:none] line-clamp-1"
                  href="https://tuenl.sharepoint.com/sites/intranet-LIS/SitePages/Data-stewards(1).aspx"
                >
                  Intranet
                </Link>
              </Column>
            </Row>
          </Section>
        </Container>
        <Container className="bg-fuchsia-800 text-white px-3">
          <Section>
            <Heading className="text-center">
              Research Data Stewards Newsletter
            </Heading>
          </Section>
          <Section className="text-center">
            <Heading>RDM Policy, DataBites, FAIR Clinic & more</Heading>
            <Img
              src="https://zenodo.org/api/iiif/record:15309047:1-0040%20Research%20Data%20Management%20Framework%20Policy.pdf/pct:0,5,100,40/%5E1200,/0/default.jpg"
              width="100%"
            />
          </Section>

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
              You can read the policy and the one-pager of{" "}
              <i>What does this policy mean to me</i> on this page:
            </Text>
            <Section className="text-center">
              <Button
                className="bg-white box-border rounded-md py-3 px-4 text-center font-semibold w-auto my-4"
                href="https://tuenl.sharepoint.com/sites/intranet-LIS/SitePages/RDM-Policy.aspx"
              >
                Read the RDM Policy
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
              <Button
                className="bg-white box-border rounded-md py-3 px-4 text-center font-semibold w-auto my-4"
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
              <Button
                className="bg-white box-border rounded-md py-3 px-4 text-center font-semibold w-auto my-4"
                href="https://rdm.tue.nl/docs/learning-resources/data-bites/"
              >
                Join DataBites
              </Button>
            </Section>
          </Section>

          <Section>
            <Heading as="h2">FAIR clinic</Heading>
            <Text>Do you care about the quality of your research output?</Text>
            <Text>
              Do you want your research to have a higher impact and get more
              recognition?
            </Text>
            <Text>
              Join our monthly FAIR Data Clinic: a practical working session
              where we look at one of your research output and identify simple,
              concrete steps to make it more Findable, Accessible, Interoperable
              and Reusable.
            </Text>
            <Section className="text-center">
              <Button
                className="bg-white box-border rounded-md py-3 px-4 text-center font-semibold w-auto my-4"
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
              <Button
                className="bg-white box-border rounded-md py-3 px-4 text-center font-semibold w-auto my-4"
                href="https://osceindhoven.nl"
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
            <Row>
              <Column className="w-1/2 align-top">
                <Text>
                  Did you know that simply seeing something repeatedly makes you
                  like it more, even if you don&apos;t realize it? Psychologists
                  call this phenomenon the &ldquo;mere-exposure effect&rdquo;.
                  This is one reason why advertisers repeat their messages.
                </Text>
                <Text>
                  The effect highlights the power of the environment on us.
                  Feeling a bit helpless? We can curate what we surround
                  ourselves with to influence our preferences. Do you have
                  something that you don&apos;t enjoy but want to do for the
                  greater good? Perhaps you find making data FAIR challenging,
                  but you want to do so for open science? You can surround
                  yourself with things that you&apos;d like to overcome and let
                  familiarity do its work. Keep the RDM Handbook on your desk,
                  join the DataBites session, or sign up for FAIR Data Clinics.
                  Let&apos;s design our environment to conquer our own
                  resistance.
                </Text>
                <Text>Nami (social psychology)</Text>
              </Column>
              <Column className="w-1/2 text-center align-top">
                <Img
                  className="w-full object-cover rounded-lg my-4"
                  height={250}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg/960px-Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg"
                />
                <Text className="text-xs text-gray-300">
                  Andy Warhol&apos;s Campbell&apos;s Soup Cans paintings
                  displayed at the Museum of Modern Art, photographed by Brandon
                  Fick, 12 May 2006. Source: Flickr. Licensed under CC BY 2.0.
                </Text>
              </Column>
            </Row>
          </Section>
        </Container>
        <Container className="my-4">
          <Text className="text-center text-gray-700">
            <Link href="https://tue.atlassian.net/helpcenter/research/">
              Research Cockpit
            </Link>{" "}
            |{" "}
            <Link href="https://openpar.pages.tue.nl/solution-searcher/index.html">
              Solution Searcher
            </Link>{" "}
            |{" "}
            <Link href="https://www.tue.nl/en/our-university/library/library-for-researchers-and-phds/research-data-management">
              RDM TU/e Public Website
            </Link>{" "}
            |{" "}
            <Link href="https://tuenl.sharepoint.com/sites/intranet-LIS/SitePages/Data-stewards(1).aspx">
              Intranet
            </Link>{" "}
            | <Link href="https://par.copernica.tue.nl/">Subscribe</Link>
          </Text>
          <Section className="text-center">
            <Link href="https://zenodo.org/communities/tue_rdmsupport/records?q=&l=list&p=1&s=10&sort=newest">
              <Img
                className="mx-auto"
                src="https://about.zenodo.org/static/img/logos/zenodo-black-200.png"
              />
            </Link>
          </Section>
          <Text className="text-center">
            CC0 No Rights Reserved <br />
            Public Domain Dedication 🧡
          </Text>
          <Text className="text-center">
            <Link href={unsubscribeUrl || "{unsubscribe}"}>Unsubscribe</Link>
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default NewsletterEmail;
