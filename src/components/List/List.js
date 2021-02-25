import React from 'react';
import PropTypes from 'prop-types';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '..Column/Column.js';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node,
        image: PropTypes.string.isRequired,
        columns: PropTypes.array,
        titleColumn: PropTypes.node.isRequired,
    }
    static defaultProps = {
        children: <p>I can do all the things!!!</p>,
    }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSource={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>

        <div className={styles.columns}>
          <Column titleColumn={'Book'} />
          <Column titleColumn={'Movie'} />
          <Column titleColumn={'Photos'} />
        </div>
        
      </section>
    )
  }
}

export default List;