import { createClient } from "urql";

const createUrqlClient = () => {
  const client = createClient({
    url: "http://localhost:3001/graphql",
    fetchOptions: {
      credentials: "include",
    },
  });
  return client;
};

export default createUrqlClient;
