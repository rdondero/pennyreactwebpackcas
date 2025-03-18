//----------------------------------------------------------------------
// App.jsx
// Author: Bob Dondero
//----------------------------------------------------------------------

import React from 'react';
import PennyHeader from './PennyHeader.jsx';
import PennyFooter from './PennyFooter.jsx';

//----------------------------------------------------------------------

function App() {
   return (
      <div>
         <PennyHeader a={false} />
         Click <a href="/indexprotected">here</a> to begin.
         <PennyFooter a={false} />
      </div>
   );
}

//----------------------------------------------------------------------

export default App;
