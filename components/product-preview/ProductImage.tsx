import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { ProductCardProps } from '@/types/productCard';

interface ProductImageProps extends ProductCardProps {
  imgUrl: string;
  name: string;
}

const ProductImage = ({
  imgUrl,
  name,
  link,
  handleClick,
}: ProductImageProps) => {
  return (
    <ImageContainer onClick={handleClick}>
      <span>
        <Link href={link || '/'} onClick={handleClick}>
          <div>
            <Image
              src={imgUrl}
              alt={name}
              height={200}
              width={300}
              priority={true}
            />
          </div>
        </Link>
      </span>
    </ImageContainer>
  );
};

export default ProductImage;

export const ImageContainer = styled.div`
  margin-bottom: 8px;
  padding: 0 2px;
  overflow: hidden;
  text-align: center;
  position: relative;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    opacity: 0.03;
    pointer-events: none;
  }

  a {
    text-decoration: none;
    color: #007185;
    outline: 0;
    text-align: center;

    div {
      margin-bottom: 0;
      padding-top: 95%;
      position: relative;

      img {
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        vertical-align: top;
        border: 0;
        text-align: center;
      }
    }
  }
`;
