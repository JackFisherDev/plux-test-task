import Head from 'next/head';

import Layout from '../layouts/Layout';

import AboutSection from '../components/AboutSection';
import FoundersSection from '../components/FoundersSection';
import PartnerSection from '../components/PartnerSection';
import JoinUsSection from '../components/JoinUsSection';
import Footer from '../components/Footer';

export default function Index() {
  return (
    <>
      <Head>
        <title>Plux Agency | About us</title>
      </Head>

      <Layout>
        <AboutSection />
        <FoundersSection />
        <PartnerSection />
        <JoinUsSection />
        <Footer />
      </Layout>
    </>
  );
}
