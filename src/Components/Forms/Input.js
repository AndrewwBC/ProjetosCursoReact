import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, label, name, onChange, value, error, onBlur }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label}>
        {label}
        <input
          className={styles.input}
          id={name}
          type={type}
          name={name}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
        />
      </label>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
