import Image from 'next/image';
import styled from 'styled-components';

interface Props {
  img?: string;
  name?: string;
  price?: number;
}

const ProductImage = ({ img, name }: Props) => {
  return (
    <ImageContainer>
      <ImageWrapper>
        <Image
          src={img!}
          alt={name!}
          height={200}
          width={300}
          priority={true}
        />
      </ImageWrapper>
    </ImageContainer>
  );
};

export default ProductImage;

const ImageContainer = styled.div`
  width: 30%;
  min-width: 320px;
  /* box-shadow: 0 4px 10px -3px #ddd;
  border: 1px solid #ddd; */
  cursor: pointer;
  border-radius: 7px;
  overflow: hidden;
  max-height: 450px;
`;

const ImageWrapper = styled.div`
  margin-bottom: 8px;
  padding: 0;
  text-align: center;
  img {
    width: 100%;
  }
`;
