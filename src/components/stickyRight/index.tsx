import React, { useState, CSSProperties, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './stickyRight.scss';
import useGlobalModel from '@/model/useGlobalModel';

interface StickyRightProps {
  className?: React.HTMLAttributes<HTMLDivElement>;
  style?: React.HTMLAttributes<HTMLDivElement>;
  onResize?: (position: CSSProperties) => void;
  [props: string]: any;
}

// 固定在内容右侧
const StickyRight: React.FC<StickyRightProps> = ({
  style,
  className,
  onResize,
  ...props
}) => {
  const { stickyRightStyle, setStickyRightStyle } = useGlobalModel((modal) => [
    modal.stickyRightStyle,
    modal.setStickyRightStyle,
  ]);

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  const resize = () => {
    const bodyWidth = document.body.clientWidth;
    const MAX_VIEW_WIDTH = 1100;
    const CONTENT_WIDTH = 800;
    const style =
      bodyWidth > MAX_VIEW_WIDTH
        ? { left: `${(bodyWidth - MAX_VIEW_WIDTH) / 2 + CONTENT_WIDTH + 20}px` }
        : { right: '12px' };
    setStickyRightStyle(style);
    if (onResize) onResize(style);
    // throttle(() => {});
  };

  return ReactDOM.createPortal(
    <div
      className={`${styles['sticky-right']} ${className || ''}`}
      style={{ ...stickyRightStyle, ...style }}
      {...props}
    >
      {props.children}
    </div>,
    document.body
  );
};

export default StickyRight;
