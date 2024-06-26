import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      title
      department
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      title
      department
      email
      photo
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      title
      department
      email
    }
  }
`;

export const QUERY_TITLES_AND_DEPARTMENTS = gql`
  query info {
    profiles {
      title
      department
    }
  }
`;



