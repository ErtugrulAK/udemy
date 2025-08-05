import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyComponent from './MyComponent';


//createRoot(document.getElementById('root')).render(
//  <StrictMode>
//    <MyComponent />
//  </StrictMode>,
//)

import emojipedia from "./emojipedia";

const newEmojipedia = emojipedia.map(function (emojiEntry) {
  return emojiEntry.meaning.substring(0, 100);
});

console.log(newEmojipedia);