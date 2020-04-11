export const apiErrors = {
  ACCOUNT_CANNOT_BE_DELETED_ACTIVE_SUBSCRIPTIONS:
    'The account has active subscriptions, cannot be deleted',
  ACCOUNT_NOT_VERIFIED: "The related account isn't verified",
  ASSET_ADDON_LIMIT_EXCEEDED: 'Asset addon group limit exceeded',
  ASSET_LABEL_CONTAINS_DIGIT: 'The label contains a digit',
  ASSET_LABEL_SIMILAR_TO_VALUE: 'The label is too similar to the asset value',
  ASSET_LIMIT_EXCEEDED: 'Asset limit exceeded',
  ALL_VOUCHERS_USED: 'The customer has already used all issued vouchers',
  ALREADY_REQUESTED: 'Action already request',
  DUPLICATE_ASSET: 'The asset is a duplicate',
  INVALID_ACCOUNT: 'The account is invalid',
  INVALID_INPUT: 'Invalid input',
  INVALID_INPUT_OR_BAD_DATA: 'Invalid input or bad data',
  WARNING_TYPE_NOT_ALLOWED: 'The account does not allow this type of warning',
  PAYMENT_REQUEST_PARAMS_INVALID:
    'Invalid request params supplied to payment API',
  SUBSCRIPTION_BASE_ALREADY_EXISTS:
    'Your already have an active base subscription',
  SUBSCRIPTION_IS_CANCELLED_DUE_TO_FAILED_PAYMENTS:
    'The subscription is in cancelled due to failed payments',
  SUBSCRIPTION_IS_CANCELLED_NO_ADDONS_POSSIBLE:
    'The subscription is in cancelled, addons are not available',
  SUBSCRIPTION_IS_IN_TRIAL_PERIOD_NO_ADDONS_POSSIBLE:
    'The subscription is in trial mode, addons are not available',
  SUBSCRIPTION_IS_NOT_ACTIVE: 'Your subscription is not active',
  SUBSCRIPTION_TRIAL_PERIOD_OVERREACHED: 'The trial period is overreached',
  USERNAME_ALREADY_TAKEN: 'The username is already taken',
  VOUCHER_INVALID: 'The given voucher is invalid',
  TWO_FACTOR_REQUIRED: 'Two factor authentication required',
  USER_NOT_AUTHENTICATED: 'User not authenticated',
  RESELLER_ACCOUNT_ILLEGAL_ACCESS:
    'Account exists but belongs to another reseller',
  RESET_VERIFIED_FORBIDDEN: 'Not allowed to reset a verified customer',
  USER_NOT_ALLOWED: 'User not allowed access',
  RESOURCE_DOES_NOT_EXIST: 'Resource does not exist',
  ASSET_ADDON_INCONSISTENT:
    'Asset addon database inconsistency, check if duplicate types',
  ASSET_TYPE_INCONSISTENT:
    'Asset types inconsistent, do you have types not allowed in subscription model?',
  INTERNAL_ERROR: 'Internal error',
  CONNECTION_FAILURE: 'Connection failure, please try later',
  PARSE_FAILURE: 'Parsing failure',
  TEMPORARY_ERROR: 'Temporary error',
  UNAUTHORIZED: 'You are not authorized to access this resource'
}
