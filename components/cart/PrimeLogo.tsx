import Image from 'next/image';

interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {}

const PrimeLogo = ({ ...props }: Props) => {
  return (
    <Image
      src="https://m.media-amazon.com/images/G/01/perc/prime-logo.svg"
      width={42}
      height={12}
      alt="Prime"
      {...props}
    />
  );
};

export default PrimeLogo;
