const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    title: String
    department: String
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!, title: String!, department: String!): Auth
    updateTitle(id: ID!, title: String!): Profile
    updateDepartment(id: ID!, department: String!): Profile
    login(email: String!, password: String!): Auth
    removeProfile: Profile
  }
`;

module.exports = typeDefs;
