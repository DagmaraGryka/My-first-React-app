import React from 'react';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import styles from './SearchResults.scss';
import Container from '../Container/Container';
import Card from '../Card/Card';

class SearchResults extends React.Component {
    static propTypes = {
      title: PropTypes.string,
      cards: PropTypes.array,
      icon: PropTypes.node,
    };
  
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    };

    render () {
      const {title, cards, icon} = this.props;

      return (
        <section className={styles.component}>
          <Container>
            <h3 className={styles.title}> {title}
              <span className={styles.icon}>
                <Icon name={icon} />
              </span>
            </h3>

            <div>
              {cards.map((cardData) => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>

          </Container>
        </section>
      );

    }
    
}

export default SearchResults;