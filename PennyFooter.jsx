//----------------------------------------------------------------------
// PennyFooter.jsx
// Author: Bob Dondero
//----------------------------------------------------------------------

import React from 'react';

//----------------------------------------------------------------------

function PennyFooter(props) {
   let authenticated = props.a;

   const [datetime, setDatetime] = React.useState(new Date());

   function updateFooter() {
      let dtInterval = window.setInterval(
         () => {setDatetime(new Date());},
         1000
      );
      return () => {window.clearInterval(dtInterval);};
   }

   React.useEffect(updateFooter, []);

   return (
       <div>
          <hr />
          {'Date and time: ' + datetime.toLocaleString()}
          <br />
          {authenticated &&
             <div>
                <a href="/logoutapp">Log out of the app</a>
                <br />
                <a href="/logoutcas">Log out of the app and CAS</a>
                <hr />
             </div>
          }
          {'Created by '}
          <a href="https://www.cs.princeton.edu/~rdondero">
          Bob Dondero</a>
       </div>
   );
}

export default PennyFooter;
