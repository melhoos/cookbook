import React from 'react';
import './styles/app.scss';
import Menu from './components/menu/menu';
import ContentWrapper from './components/componentWrapper';
import {PageProvider} from './providers/pageProvider';

function App() {
  return (
    <PageProvider>
      <div className="App">
        <Menu/>
        <ContentWrapper/>
      </div>
    </PageProvider>
  );
}

export default App;
