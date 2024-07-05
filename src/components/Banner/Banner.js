import React from 'react';
import * as styles from './Banner.module.css';
import { toOptimizedImage } from '../../helpers/general';

const Banner = (props) => {
  const {
    maxWidth,
    name,
    subtitle,
    color,
    bgImage,
    height,
    bgColor = 'var(--standard-light-grey)',
    hideSubtitleOnMobile = true,
  } = props;

  const customStyling = {
    backgroundColor: bgColor,
    backgroundImage: bgImage !== undefined ? `url(${toOptimizedImage(bgImage)})` : 'none',
    height: height,
    color: color,
  };

  return (
    <div className={styles.root} style={customStyling}>
      <div className={styles.content} style={{ maxWidth: maxWidth }}>
        <h6>{name}</h6>
        {subtitle && (
          <span
            className={`${styles.subtitle} ${
              hideSubtitleOnMobile === true ? styles.hideSubtitleOnMobile : ''
            }`}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default Banner;
