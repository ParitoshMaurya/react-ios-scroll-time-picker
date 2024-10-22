import React, { useState } from 'react';
import { TimePicker } from 'react-ios-scroll-time-picker';

function App() {
   const [value, setValue] = useState('10:00');

   const onChange = (time) => {
      console.log(time, "is the time got@@@");
      setValue(time);
   };

   return (
      <div className="App">
         <TimePicker onChange={onChange} value={value} />
         <button onClick={() => { setValue("11:00") }}>Change</button>
      </div>
   );
}

export default App;
