import { produce } from 'immer';

const INITIAL_STATE = {
  status: {
    loading: false,
    error: false,
    success: false,
  },
};

export default function newsletter(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@newsletters/SUBSCRIBE_NEWSLETTER_REQUEST':
        draft.status.loading = true;
        draft.status.error = false;
        draft.status.success = false;
        break;

      case '@newsletters/SUBSCRIBE_NEWSLETTER_SUCCESS':
        draft.status.loading = false;
        draft.status.success = true;
        break;

      case '@newsletters/NEWSLETTER_OPERATION_FAILURE':
        draft.status.error = true;
        break;

      case '@newsletters/RESET_STATUS_SUCCESS':
        draft.status.success = false;
        break;

      default:
    }
  });
}
