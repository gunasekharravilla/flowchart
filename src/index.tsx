import React from 'react';
import ReactDOM from 'react-dom'
import App from './app';
(()=>{
  kintone.events.on('app.record.index.show', (events: any) => {        
   return ReactDOM.render(<App />, document.getElementById("root"));
  });
})()

