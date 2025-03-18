//----------------------------------------------------------------------
// mainprotected.js
// Author: Bob Dondero
//----------------------------------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import AppProtected from './AppProtected.jsx';

//----------------------------------------------------------------------

let domRoot = document.getElementById('root');
let reactRoot = createRoot(domRoot);

reactRoot.render(
   <React.StrictMode>
      <AppProtected />
   </React.StrictMode>
);
