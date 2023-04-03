import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting Started with iCEDQ',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       Learn iCEDQ basics and get up to speed quickly.
      </>
    ),
  },
  {
    title: 'Working with iCEDQ',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       Learn how to use and complete tasks in iCEDQ.
      </>
    ),
  },
  {
    title: 'Getting Data into iCEDQ',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Understand your options for loading your data into iCEDQ.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div class="container">
        <div class="column">
          <img src='img/icons/setting-up-feed.svg' alt='' width={40}></img>
          <h2> {title} </h2>
          <p> {description} </p>
          {/* <div className='listContainer_1LpF'>
            <ul>
              <li>
                <a href='#'>Browser extension installation</a>
              </li>
              <li>
                <a href='#'>Browser extension installation</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}
export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
