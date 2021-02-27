import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {
  static propTypes = {
    titleColumn: PropTypes.string,
    icon: PropTypes.node,
    cards: PropTypes.array,
    addCard: PropTypes.func,
    //name: PropTypes.node,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  state = {
    cards: this.props.cards || [],
  }

  addCard(name){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length + 1,
            title: name,
          },
        ],
      }
    ));
  }

    
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
          <span className={styles.icon}>
            <Icon name={this.props.icon}/>
          </span>
        </h3>

        <div className={styles.cards}>
          {this.state.cards.map(({key, ...cardProps}) => (
            <Card key={key} {...cardProps} />
          ))}
        </div>

        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
        </div>
      </section>
    );
  }
}

export default Column;