import styled, { css } from 'styled-components';
import Link from 'next/link';

import { ProductCardProps } from '@/types/productCard';

interface ProductRatingProps extends ProductCardProps {
  ratings: number;
  detailed?: boolean;
}

interface RatingsCountProps {
  detailed?: boolean;
}

const ProductRating = ({
  link,
  ratings,
  handleClick,
  detailed,
}: ProductRatingProps) => {
  return (
    <StarsnRatingContainer>
      <span aria-label="4.8 out of 5 stars">
        <Link href={link!} onClick={handleClick}>
          <i className="star"></i>
          <i className="popover"></i>
        </Link>
        {!detailed && <span>{(Math.random() * 5).toFixed(1)} </span>}
      </span>
      <RatingsCount detailed={detailed} aria-label={ratings.toLocaleString()}>
        <Link href={link!}>
          {detailed
            ? `${ratings.toLocaleString()} customer rating(s)`
            : `(${ratings.toLocaleString()})`}
        </Link>
      </RatingsCount>
    </StarsnRatingContainer>
  );
};

export default ProductRating;

export const StarsnRatingContainer = styled.div`
  padding-top: 4px;
  margin: 0;
  width: 100%;

  a {
    color: #007185;
  }

  i {
    background-repeat: no-repeat;
    display: inline-block;
  }

  .star {
    background-image: url(https://m.media-amazon.com/images/S/sash/ZNt8quAxIfEMMky.png);
    background-position: -2px -3px;
    background-size: 512px 512px;
    vertical-align: bottom;
    height: 18px;
    width: 80px;
    position: relative;
  }

  .popover {
    background-image: url(https://m.media-amazon.com/images/S/sash/f9Cwl2OUDVHGXk8.png);
    margin: 5px 4px 0 0.385em;
    vertical-align: text-top;
    width: 7px;
    height: 5px;
    background-position: -90px -5px;
    background-size: 400px 900px;
    opacity: 0.6;
  }
`;

const smallSizeCss = css`
  font-size: 12px;
  line-height: 16px;
`;

const setSmallFontSize = (props: RatingsCountProps) => {
  return props.detailed ? smallSizeCss : null;
};

export const RatingsCount = styled.span<RatingsCountProps>`
  ${setSmallFontSize}
`;
