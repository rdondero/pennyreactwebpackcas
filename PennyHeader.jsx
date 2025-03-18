//----------------------------------------------------------------------
// PennyHeader.jsx
// Author: Bob Dondero
//----------------------------------------------------------------------

import React from 'react';

//----------------------------------------------------------------------

function PennyHeader(props) {
   let authenticated = props.a;

   const [username, setUsername] = React.useState('');
   const [datetime, setDatetime] = React.useState(new Date());

   function fetchUserName() {
      function handleResponse() {
         if (this.status !== 200) {
            alert('Error: Failed to fetch data from server');
            return;
         }
         setUsername(this.response);
      }
      function handleError() {
         alert('Error: Failed to fetch data from server');
      }
      let url = '/getusername';
      let request = new XMLHttpRequest();
      request.onload = handleResponse;
      request.onerror = handleError;
      request.open('GET', url);
      request.send();
   }
   if (authenticated)
      React.useEffect(fetchUserName, []);

   function updateHeader() {
      let apInterval = window.setInterval(
         () => {setDatetime(new Date());},
         1000
      );
      return () => {window.clearInterval(apInterval);};
   }
   React.useEffect(updateHeader, []);

   let hours = datetime.getHours();
   let ampm = (hours < 12) ? 'morning' : 'afternoon';

   return (
      <div>
         <hr />
         Good {ampm} {username} and welcome to Penny.com
         <hr />
      </div>
   );
}

export default PennyHeader;
