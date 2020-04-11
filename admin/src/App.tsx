import React from 'react';
import './styles/app.scss';
import CustomNavbar from './components/navbar/navbar';
import ContentWrapper from './components/componentWrapper';
import {PageProvider} from './providers/pageProvider';

function App() {
  return (
    <PageProvider>
      <div className="App">
        <CustomNavbar/>
        <ContentWrapper/>
      </div>
    </PageProvider>
  );
}

export default App;
