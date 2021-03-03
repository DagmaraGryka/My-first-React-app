import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { inform } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={inform.title} imageSource={inform.image}/>
    <h2>{inform.subtitle}</h2>
    <p>{inform.information}</p>
  </Container>
);

export default Info;