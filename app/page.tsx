'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
  SearchBox,
} from './styles';

export default function Home() {
  const dispatch = useAppDispatch();
  const { status, value } = useAppSelector(selectProductState);
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState(value);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchText(value.toLowerCase());
  };

  useEffect(() => {
    if (!value) dispatch(fetchAssetsAsync());
    if (value) setProducts(value);
  }, [value, dispatch]);

  useEffect(() => {
    if (searchText) {
      const filteredProducts = value!.filter(product =>
        product.name.toLowerCase().includes(searchText)
      );
      setProducts(filteredProducts);
    } else {
      setProducts(value);
    }
  }, [searchText]);

  return (
    <>
      <Container>
        <ListContainer>
          {status !== LoadingState.IDLE && !products ? (
            <Loader />
          ) : (
            <>
              <CountContainer>
                <SearchBox
                  type="search"
                  name="Search for products"
                  id="productSearch"
                  value={searchText}
                  placeholder="Search for a product"
                  onChange={onSearch}
                />
                <CountSubContainer>
                  <TextWrapper>
                    1 - 12 of over 200 results for
                    <ProductTitle> Our Products</ProductTitle>
                  </TextWrapper>
                </CountSubContainer>
              </CountContainer>
              <ProductsGrid>
                {products?.map(product => (
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
