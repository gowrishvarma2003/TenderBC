import React from 'react';
import styles from './popup.module.css';

const Popup = (props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(props.dkey)
      .then(() => {
        console.log('Copied to clipboard:', props.dkey);
      })
      .catch(err => {
        console.error('Failed to copy:', err);
      });
  };

  return (
    <div className={props.show ? styles.Popup : styles.displaynone}>
      <div className='shadow-lg border-2'>
        {props.show && (
          <section className={styles.popupmain}>
            <h1>{props.dkey}</h1>
            <div><button onClick={handleCopy}>Copy</button></div>
            <div><button onClick={props.handleClose}>Close</button></div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Popup;

