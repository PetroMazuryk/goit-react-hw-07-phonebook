import PropTypes from 'prop-types';

import { createRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './PhoneTitle.module.css';

export const PhoneTitle = () => {
  const itemRef = createRef(null);

  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}
      classNames={styles}
      nodeRef={itemRef}
    >
      <h1 className={styles.title} ref={itemRef}>
        Phonebook 7
      </h1>
    </CSSTransition>
  );
};

PhoneTitle.propTypes = {
  name: PropTypes.string,
};
