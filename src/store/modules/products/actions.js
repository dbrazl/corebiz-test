export function indexProductsRequest() {
  return {
    type: '@products/INDEX_PRODUCTS_REQUEST',
  };
}

export function indexProductsSuccess(body) {
  return {
    type: '@products/INDEX_PRODUCTS_SUCCESS',
    payload: { body },
  };
}

export function productsOperationFailure() {
  return {
    type: '@products/PRODUCTS_OPERATION_FAILURE',
  };
}
