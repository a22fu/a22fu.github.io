import React from 'react';
import {Header, About, Lilypad, Mainnav, Experience, Projects, Contacts} from './components';

import './styles/main.css';

const App = () => {
  return (
    
    <div className='w-[calc(100vw-(100vw-100%))]'>
      <Mainnav/>
      <Header/>
      <About/>
      <Experience/>
      <Projects/>
      <Contacts/>
    </div>
    
  );
};

export default App;