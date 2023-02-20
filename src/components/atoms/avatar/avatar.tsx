import { styled } from '@mui/material';
import React, { useMemo } from 'react';

type Props = {
  text: string;
  size?: number;
};

const COLORS = [
  '#1abc9c',
  '#2ecc71',
  '#3498db',
  '#9b59b6',
  '#34495e',
  '#16a085',
  '#27ae60',
  '#2980b9',
  '#8e44ad',
  '#2c3e50',
  '#f1c40f',
  '#e67e22',
  '#e74c3c',
  '#95a5a6',
  '#f39c12',
  '#d35400',
  '#c0392b',
  '#bdc3c7',
  '#7f8c8d',
];

const Container = styled('div')<{ $colorIdx: number; $size: number }>`
  background-color: ${({ $colorIdx }) => COLORS[$colorIdx]};
  width: ${({ $size }) => `${$size}px`};
  height: ${({ $size }) => `${$size}px`};
  line-height: ${({ $size }) => `${$size}px`};
  font-size: ${({ $size }) => `${$size / 2}px`};
  font-weight: bold;
  color: white;
  text-align: center;
  border-radius: 50%;
`;

export const Avatar = ({ text, size = 24, ...others }: Props) => {
  const initials = useMemo(() => {
    if (!text) return '==';

    const hasSpace = text.includes(' ');

    if (!hasSpace) {
      return text.charAt(0).toLocaleUpperCase();
    }

    return text
      .split(' ')
      .map((word) => word.charAt(0).toLocaleUpperCase())
      .join('')
      .substring(0, 2);
  }, [text]);

  const colorIdx = Math.abs(initials.charCodeAt(0) - 65) % COLORS.length;

  return (
    <Container $colorIdx={colorIdx} $size={size} {...others}>
      {initials}
    </Container>
  );
};
