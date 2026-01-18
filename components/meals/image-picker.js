'use client';

import { useRef } from 'react';
import classes from './image-picker.module.css';

const ImagePicker = ({ label, name }) => {
  const imageInput = useRef();

  function handlePickImageClick() {
    imageInput.current.click();
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <input
          id={name}
          className={classes.input}
          type={'file'}
          accept={'image/png, image/jpg'}
          name={name}
          ref={imageInput}
        />
        <button
          className={classes.button}
          onClick={handlePickImageClick}
          type={'button'}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
