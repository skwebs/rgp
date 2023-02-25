

import { gql } from "@apollo/client";


const CREATE_USER = gql`
mutation CreateUser($name:String!, $email:String!, $password:String!){
  createUser(name:$name, email:$email, password:$password){
    id name email
  }
}`

const UPDATE_USER = gql`
 mutation UpdateUser($id:ID!, $name:String, $email:String){
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
      email
    }
  }`

const UPSERT_USER = gql`
mutation UpsertUser($id:ID!, $name:String!, $email:String!, $password:String!){
  upsertUser(id: $id, name: $name, email: $email, password:$password) {
    id
    name
    email
  }
}`

const TRASH_USER = gql`
mutation TrashUser($id: ID!) {
  trashUser(id: $id) {
    id
    name
    email
  }
}`

const RESTORE_USER = gql`
mutation RestoreUser($id: ID!) {
  restoreUser(id: $id) {
    id
    name
    email
  }
}`

const DELETE_USER_FOREVER = gql`
mutation DeleteUserForever($id: ID!) {
  deleteUserForever(id: $id) {
    id
    name
    email
  }
}`



export { CREATE_USER, UPDATE_USER, UPSERT_USER, TRASH_USER, RESTORE_USER }
