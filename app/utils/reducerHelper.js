export default function reducerHandler(resource, types, initialState) {
  if (typeof resource !== 'string' || resource.length === 0) {
    throw new Error('Expected `resource` to be an string and not empty.');
  }

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
                    .set(resource, action.response);
      case failureType:
        return state.set('isFetching', false)
                    .set('error', action.error);
      default:
        return state;
    }
  };
}
