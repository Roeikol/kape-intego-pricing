import Head from 'next/head'
import styles from '../styles/home.module.scss'
import { Header } from "@/components/header/Header"
import { Pricing } from '@/components/pricing/Pricing'
import { VirusBulletin } from '@/components/virusBulletin/VirusBulletin'
import { ExpertsSaying } from '@/components/expertsSaying/ExpertsSaying'
import { Services } from '@/components/services/Services'
import { FAQ } from '@/components/faq/Faq'
import { Footer } from '@/components/footer/Footer'
import { useEffect } from 'react'
import { checkIfUUIDCookieExist } from '@/api/cookies'

export default function Home() {

  useEffect(() => {
    checkIfUUIDCookieExist();
  },[])

  return (
    <>
      <Head>
        <title>Intego</title>
        <meta name="description" content="Intego pricing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body}>
        <div className={styles.wrapper}>
          <div className={styles.mainContainer}>
            <Header />
          <div className={styles.pricingContainer}>
            <Pricing />
          </div>
          <div className={styles.virusBullentinContainer}>
            <VirusBulletin />
          </div>
          <div className={styles.virusBullentinContainer}>
            <ExpertsSaying />
          </div>
          <div className={styles.servicesContainer}>
            <Services />
          </div>
          <div className={styles.faqContainer}>
            <FAQ />
          </div>
          <Footer />
          </div>
        </div>
      </div>
      </>
  )
}
