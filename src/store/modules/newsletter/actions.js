export function subscribeNewsletterRequest(body) {
  return {
    type: '@newsletters/SUBSCRIBE_NEWSLETTER_REQUEST',
    payload: { body },
  };
}

export function subscribeNewsletterSuccess() {
  return {
    type: '@newsletters/SUBSCRIBE_NEWSLETTER_SUCCESS',
  };
}

export function newsletterOperationFailure() {
  return {
    type: '@newsletter/NEWSLETTER_OPERATIONS_FAILURE',
  };
}

export function resetStatusSuccess() {
  return {
    type: '@newsletters/RESET_STATUS_SUCCESS',
  };
}
