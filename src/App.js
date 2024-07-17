import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Router from './routes/Router';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Router/>
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;