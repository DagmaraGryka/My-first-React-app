import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { inform } from '../../data/dataStore';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <div className={styles.component}>
      <Hero titleText={inform.title} imageSource={inform.image}/>
      <h2 className={styles.subtitle}>{inform.subtitle}</h2>
      <p>{inform.information}</p>
    </div>
  </Container>
);

export default Info;