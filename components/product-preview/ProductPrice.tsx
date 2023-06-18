import Link from 'next/link';
import styled from 'styled-components';

import { CurrencyEnum } from '@/types/assets';
import { ProductCardProps } from '@/types/productCard';

interface Props extends ProductCardProps {
  price: number | null;
  currency: CurrencyEnum | null;
  checkout?: boolean;
}

const ProductPrice = ({
  price = 0,
  currency,
  link = '',
  handleClick,
  checkout,
}: Props) => {
  const displayPrice = price!.toLocaleString('en-US').split('.');
  return (
    <PriceContainer style={{ marginTop: checkout ? 0 : 10 }}>
      <PriceSubContainer href={link} role="button" onClick={handleClick}>
        <span className="symbol">{currency}</span>
        {displayPrice[0] ?? 0}
        <span className="fraction">{displayPrice[1] ?? '00'}</span>
      </PriceSubContainer>
    </PriceContainer>
  );
};

export default ProductPrice;

export const PriceContainer = styled.div`
  width: 100%;
`;

export const PriceSubContainer = styled(Link)`
  display: block;
  user-select: none;
  font-size: 28px;
  font-weight: 600;

  .symbol,
  .fraction {
    top: -0.75em;
    font-size: 13px;
    position: relative;
  }

  .dash {
    font-size: 21px;
    padding: 0 4px;
  }
`;
