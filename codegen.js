module.exports = {
  overwrite: true,
  generates: {
    './src/shared/generated.ts': {
      schema: [
        {
          'http://localhost:8090/v1/graphql': {
            headers: { 'x-hasura-admin-secret': 'helloworld' },
          },
        },
      ],
      documents: ['./src/**/*.graphql', './src/**/*.ts'],
      plugins: ['typescript', 'typescript-operations'],
      config: {
        preResolveTypes: true,
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        enumsAsTypes: true,
        constEnums: true,
        namingConvention: {
          transformUnderscore: true,
        },
      },
    },
  },
};
