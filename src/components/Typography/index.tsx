import React from 'react';

type Variant = 'headline' | 'title1' | 'title2' | 'title3' | 'body' | 'caption';

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
  className?: string;
}

const variants = {
  headline: { fontSize: '30px', fontWeight: '500', lineHeight: '40px', fontFamily: 'Montserrat' },
  title1: { fontSize: '20px', fontWeight: '500', lineHeight: '30px', fontFamily: 'Montserrat' },
  title2: { fontSize: '16px', fontWeight: '500', lineHeight: '26px', fontFamily: 'Montserrat' },
  title3: { fontSize: '14px', fontWeight: '500', lineHeight: '24px', fontFamily: 'Montserrat' },
  title4: { fontSize: '16px', fontWeight: '500', lineHeight: '26px', fontFamily: 'Open Sans' },
  body: { fontSize: '14px', lineHeight: '24px', fontFamily: 'Open Sans' },
  caption: { fontSize: '12px', lineHeight: '24px', fontFamily: 'Open Sans' },
};

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  color = 'black',
  fontWeight = 'normal',
  fontStyle = 'normal',
  textAlign = 'left',
  margin,
  width,
  className, // Include className in the destructured props
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
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default Typography;
