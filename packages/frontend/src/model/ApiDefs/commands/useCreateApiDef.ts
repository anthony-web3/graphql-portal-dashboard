import { gql, useMutation } from '@apollo/client';

const CREATE_API_DEF = gql`
  mutation CreateApiDef($apiDef: CreateApiDef!, $sources: [ID!]!) {
    createApiDef(apiDef: $apiDef, sources: $sources) {
      _id
      name
    }
  }
`;

export const useCreateApiDef = (options?: any) => {
  const [createApiDef, { error, loading, data }] = useMutation(
    CREATE_API_DEF,
    options || {}
  );

  return { createApiDef, error, loading, data };
};
