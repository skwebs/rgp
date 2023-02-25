import React from 'react'

const DeleteUser = () => {
    return (
        <div></div>
    )
}

export default DeleteUser


// import { useQuery, useMutation } from 'react-query';
// import axios from 'axios';

// function useCRUD() {
//   // Fetch data
//   const { data, isLoading, error } = useQuery('items', async () => {
//     const response = await axios.get('/api/items');
//     return response.data;
//   });

//   // Create data
//   const [createItem] = useMutation(async item => {
//     const response = await axios.post('/api/items', item);
//     return response.data;
//   }, {
//     onSuccess: (data, variables, cache) => {
//       cache.setQueryData('items', (prevData) => [...prevData, data]);
//     }
//   });

//   // Update data
//   const [updateItem] = useMutation(async item => {
//     const response = await axios.put(`/api/items/${item.id}`, item);
//     return response.data;
//   }, {
//     onSuccess: (data, variables, cache) => {
//       cache.setQueryData('items', (prevData) => {
//         return prevData.map(i => i.id === data.id ? data : i);
//       });
//     }
//   });

//   // Delete data
//   const [deleteItem] = useMutation(async id => {
//     await axios.delete(`/api/items/${id}`);
//   }, {
//     onSuccess: (data, variables, cache) => {
//       cache.setQueryData('items', (prevData) => {
//         return prevData.filter(i => i.id !== variables);
//       });
//     }
//   });

//   return { data, isLoading, error, createItem, updateItem, deleteItem };
// }

// function App() {
//   const { data, createItem, updateItem, deleteItem } = useCRUD();

//   return (
//     <div>
//       <button onClick={() => createItem({ name: 'New Item' })}>Create</button>
//       <button onClick={() => updateItem({ id: 1, name: 'Updated Item' })}>Update</button>
//       <button onClick={() => deleteItem(1)}>Delete</button>
//       {data.map(item => (
//         <p key={item.id}>{item.name}</p>
//       ))}
//     </div>
//   );
// }


// import { useQuery, useMutation } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';

// const ITEMS_QUERY = gql`
//   query Items {
//     items {
//       id
//       name
//     }
//   }
// `;

// const CREATE_ITEM_MUTATION = gql`
//   mutation CreateItem($name: String!) {
//     createItem(name: $name) {
//       id
//       name
//     }
//   }
// `;

// const UPDATE_ITEM_MUTATION = gql`
//   mutation UpdateItem($id: ID!, $name: String!) {
//     updateItem(id: $id, name: $name) {
//       id
//       name
//     }
//   }
// `;

// const DELETE_ITEM_MUTATION = gql`
//   mutation DeleteItem($id: ID!) {
//     deleteItem(id: $id) {
//       id
//     }
//   }
// `;

// function App() {
//   const { data, loading, error } = useQuery(ITEMS_QUERY);
//   const [createItem] = useMutation(CREATE_ITEM_MUTATION);
//   const [updateItem] = useMutation(UPDATE_ITEM_MUTATION);
//   const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, {
//     update: (cache, { data: { deleteItem } }) => {
//       const { items } = cache.readQuery({ query: ITEMS_QUERY });
//       cache.writeQuery({
//         query: ITEMS_QUERY,
//         data: { items: items.filter(i => i.id !== deleteItem.id) },
//       });
//     },
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error.message}</p>;

//   return (
//     <div>
//       <button onClick={() => createItem({ variables: { name: 'New Item' } })}>Create</button>
//       <button onClick={() => updateItem({ variables: { id: 1, name: 'Updated Item' } })}>Update</button>
//       <button onClick={() => deleteItem({ variables: { id: 1 } })}>Delete</button>
//       {data.items.map(item => (
//         <p key={item.id}>{item.name}</p>
//       ))}
//     </div>
//   );
// }
