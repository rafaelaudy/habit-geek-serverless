const schema = `
  type Query {
    state: String
  }

  type Mutation {
    signUp: String
    login: String
    changePassword: String
    sendEmailWithNewPasswordLink: String
  }
`;

export { schema };
