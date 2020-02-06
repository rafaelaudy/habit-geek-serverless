const schema = `
  type AuthPayload {
    token: String
    user: User
  }

  type User {
    name: String!
    email: String!
  }

  type Query {
    state: String
  }

  type Mutation {
    signUp(email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    changePassword(email: String!, oldPassword: String!, newPassword: String!): Boolean
    sendEmailWithNewPasswordLink(email: String!): Boolean
  }
`;

export { schema };
