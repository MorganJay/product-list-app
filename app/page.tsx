'use client';

import { useEffect } from 'react';

import Loader from '@/components/Loader';
import ProductPreview from '@/components/product-preview/ProductPreview';

import { LoadingState } from '@/types/assets';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  fetchAssetsAsync,
  selectProductState,
} from '@/redux/features/products/productSlice';

import {
  Container,
  ProductTitle,
  ProductsGrid,
  ListContainer,
  CountContainer,
  CountSubContainer,
  TextWrapper,
} from './styles';

export default function Home() {
  const dispatch = useAppDispatch();
  const { status, value } = useAppSelector(selectProductState);

  // TODO: Add state and button for viewing all products

  useEffect(() => {
    if (!value) dispatch(fetchAssetsAsync());
  }, [value, dispatch]);

  return (
    <>
      <Container>
        <ListContainer>
          {status !== LoadingState.IDLE && !value ? (
            <Loader />
          ) : (
            <>
              <CountContainer>
                <CountSubContainer>
                  <TextWrapper>
                    1 - 12 of over 200 results for
                    <ProductTitle> Our Products</ProductTitle>
                  </TextWrapper>
                </CountSubContainer>
              </CountContainer>
              <ProductsGrid>
                {value?.map(product => (
                  <ProductPreview key={product.productId} product={product} />
                ))}
              </ProductsGrid>
            </>
          )}
        </ListContainer>
      </Container>
    </>
  );
}
