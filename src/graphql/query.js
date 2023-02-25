import { gql } from "@apollo/client";

const GET_USERS = gql`
 query GetUsers($first:Int!){
  users(first:$first){
    data{
      id
      name
      email
      email_verified_at
      __typename
    }
    paginatorInfo{
      count
      currentPage
      firstItem
      hasMorePages
      lastItem
      perPage
      total
      __typename
    }
  }
}`

const GET_USER = gql`
query GetUser($id:ID){
  user(id:$id){
    id
    name
    email
  }
}`


const GET_TRASHED_USERS = gql`
query GetTrashedUsers{
  trashedUsers {
    id
    name
    email
  }
}`

export { GET_USERS, GET_USER, GET_TRASHED_USERS }
