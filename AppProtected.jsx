//----------------------------------------------------------------------
// AppProtected.jsx
// Author: Bob Dondero
//----------------------------------------------------------------------

import React from 'react';
import PennyHeader from './PennyHeader.jsx';
import PennySearch from './PennySearch.jsx';
import PennyFooter from './PennyFooter.jsx';

//----------------------------------------------------------------------

function AppProtected() {
   return (
      <div>
         <PennyHeader a={true}/>
         <PennySearch />
         <PennyFooter a={true} />
      </div>
   );
}

//----------------------------------------------------------------------

export default AppProtected;
