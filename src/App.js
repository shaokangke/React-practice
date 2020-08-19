import React from 'react';
import store from './store';
import A from './pages/A';
import B from './pages/B';
import C from './pages/C';

import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div style={{display: 'flex',
                justifyContent: 'space-around',
                width: '5%',
                margin: '46px auto'}}>
        <A />
        <B />
        <C />


      </div>
    </Provider>
  )
}

export default App;
