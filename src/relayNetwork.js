const {
  Environment,
  Network,
  RecordSource,
  Store,
} = require('relay-runtime');

const fetchQuery = async (operation, variables, cacheConfig, uploadables) => {
  const response = await fetch('http://10.0.2.2:5000/graphql', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  const data = await response.json();
  console.log(data)
  return data
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);
const handlerProvider = null;

const environment = new Environment({
  handlerProvider,
  network,
  store,
});
export default environment