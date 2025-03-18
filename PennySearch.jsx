//----------------------------------------------------------------------
// PennySearch.jsx
// Author: Bob Dondero
//----------------------------------------------------------------------

import React from 'react';

//----------------------------------------------------------------------

function PennySearch() {

   const [books, setBooks] = React.useState([]);

   function fetchBooks(author) {
      function handleResponse() {
         if (this.status !== 200) {
            alert('Error: Failed to fetch data from server');
            return;
         }
         let books = JSON.parse(this.response);
         setBooks(books);
      }

      function handleError() {
         alert('Error: Failed to fetch data from server');
      }

      let encodedAuthor = encodeURIComponent(author);
      let url = '/searchresults?author=' + encodedAuthor;
      let request = new XMLHttpRequest();
      request.onload = handleResponse;
      request.onerror = handleError;
      request.open('GET', url);
      request.send();
      return () => {request.abort();}
   }

   let timer = null;
   function debouncedFetchBooks(author) {
      clearTimeout(timer);
      timer = setTimeout(()=>{fetchBooks(author);}, 500);
   }

   return (
      <div>
         <h1>Author Search</h1>
         Please enter an author name:&nbsp;
         <input
             type='text'
             onInput={ (event) => {
                debouncedFetchBooks(event.target.value);
             }}
             autoFocus
         />
         <hr />
         {books.map((book) => (
            <div key={book.isbn}>
               {book.isbn}:&nbsp;
               <strong>{book.author}</strong>:&nbsp;
               {book.title}
               <br />
            </div>
         ))}
      </div>
   );
}

export default PennySearch;
