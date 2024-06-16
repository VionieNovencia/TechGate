import React from "react";
import { cx } from '@linaria/core';

import styles from "./styles";

const BaseButton = ({
  onClick,
  children,
  className='',
  disabled= false
}:{
  onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void,
  children: React.ReactNode,
  className?: string,
  disabled?: boolean,
}) => (
  <button
    type="button"
    className={cx(
      styles.container,
      className,
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
);

export default BaseButton;
