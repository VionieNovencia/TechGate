import React from 'react';

type Variant = 'headline' | 'title1' | 'title2' | 'body' | 'caption';

interface TypographyProps {
  children: React.ReactNode;
  variant?: Variant;
}

const variants = {
  headline: { fontSize: '30px', fontWeight: '500', lineHeight: '30px', fontFamily: 'Montserrat' },
  title1: { fontSize: '16px', fontWeight: '500', lineHeight: '26px', fontFamily: 'Montserrat' },
  title2: { fontSize: '16px', fontWeight: '500', lineHeight: '26px', fontFamily: 'Open Sans' },
  body: { fontSize: '14px', lineHeight: '24px', fontFamily: 'Open Sans' },
  caption: { fontSize: '12px', lineHeight: '24px', fontFamily: 'Open Sans' },
};

interface TypographyProps {
  children: React.ReactNode;
  variant?: Variant;
  color?: string;
  fontWeight?: string | number;
  fontStyle?: 'normal' | 'italic' | 'oblique';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  lineHeight?: string;
  margin?: string;
  width?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  color = 'black',
  fontWeight = 'normal',
  fontStyle = 'normal',
  textAlign = 'left',
  margin,
  width,
}) => {
  const style = {
    color,
    fontWeight,
    fontStyle,
    textAlign,
    margin,
    ...variants[variant],
    width,
  };

  return (
    <div style={style}>
      {children}
    </div>
  );
};

export default Typography;