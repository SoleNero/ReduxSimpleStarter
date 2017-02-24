import React from 'react'; 
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


const API_KEY = 'AIzaSyArUQoC6GWq4k9Tq2S7udFScUhlFE6UqfU';

const App = () => {
  return (
    <div>
  <SearchBar/>
  </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container')); 
