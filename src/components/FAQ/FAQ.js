import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faq } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faq.title} imageSource={faq.image}/>
    <h2>{faq.subtitle}</h2>
    <p>{faq.faqinfo}</p>
  </Container>
);

export default FAQ;