import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className='row'>
          <div className='col padding-top--lg'>
            <h1 className='hero__title text--left'>
              DataOps Platform for
              Testing and Monitoring
            </h1>
            <p className='hero__subtitle sub-heading text--left'>Identify data issues in your Data Warehouse, Big Data
              and Data Migration Projects.</p>
            <div className='text--left'>
              <a href="/docs/" class="button button--secondary button--lg margin-right--md ctaButton_1XfG">Get Started</a>
              <a href="https://icedq.com" class="button button--secondary button--lg margin-right--md ctaButton_1XfG learn-more">Learn More</a>
            </div>
          </div>
          <div className='col text--center'>
            <img src='/img/Data report-icedq.png' alt='DataOps-Platform-for-Testing-and-Monitoring-iCEDQ.png'></img>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`
      DataOps Platform | ETL Testing and Monitoring | ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
