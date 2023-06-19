import Image from 'next/image';
import { CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
}

const PrimeLogo = ({ ...props }: Props) => {
  return (
    <>
      <Image
        src="https://m.media-amazon.com/images/G/01/perc/prime-logo.svg"
        width={42}
        height={12}
        alt="Prime"
        {...props}
      />
    </>
  );
};

export default PrimeLogo;
