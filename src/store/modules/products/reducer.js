import { produce } from 'immer';

const INITIAL_STATE = {
  products: [],
  status: {
    loading: false,
    error: false,
  },
};

export default function products(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@products/INDEX_PRODUCTS_REQUEST':
        draft.status.loading = true;
        draft.status.error = false;
        break;

      case '@products/INDEX_PRODUCTS_SUCCESS':
        draft.products = action.payload.body;
        draft.status.loading = false;
        break;

      case '@products/PRODUCTS_OPERATION_FAILURE':
        draft.status.error = true;
        break;

      default:
    }
  });
}
