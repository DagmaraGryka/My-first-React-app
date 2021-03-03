import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faq } from '../../data/dataStore';
import styles from './FAQ.scss';


const FAQ = () => (    
 
  <Container >
    <div className={styles.component}>
      <Hero titleText={faq.title} imageSource={faq.image}/>
      <h2 className={styles.subtitle}>{faq.subtitle}</h2>
      <p>{faq.faqinfo}</p>
    </div>  
  </Container>
);

export default FAQ;