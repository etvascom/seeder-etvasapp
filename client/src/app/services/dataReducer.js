export const INITIAL_STATE = {
  customer: null,
}
export const ACTION_TYPES = {
  customerStored: 'CUSTOMER_STORED',
}

export const dataReducer = (state = INITIAL_STATE, action) => {
  const { customerStored } = ACTION_TYPES
  switch (action.type) {
    case customerStored:
      return { ...state, customer: action.payload }
    default:
      throw new Error('* Invalid action performed on assets')
  }
}
