import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
    static propTypes = {
      titleCard: PropTypes.string,
    }
    render() {
      
      return (
        <section className={styles.component}>
          <h3>{this.props.title}</h3>  
        </section>
      );
    }
}
  
export default Card;