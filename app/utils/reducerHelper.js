export default function reducerHandler(types, initialState) {
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected `types` to be an array of three elements.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected `types` to be strings.');
  }

  const [requestType, successType, failureType] = types;

  return (state = initialState, action) => {
    switch (action.type) {
      case requestType:
        return state.set('isFetching', true);
      case successType:
        return state.set('isFetching', false)
                    .set('data', action.response);
      case failureType:
        return state.set('isFetching', false)
                    .set('error', action.error);
      default:
        return state;
    }
  };
}
