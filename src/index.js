import  ReactDOM  from "react-dom";
import React from "react";
 import App from './App.js'
import './index.css'


import { StateProvider } from "./StateProvider.js";
// import * as serviceWorker from './serviceWorker'
import reducer, { initialState } from "./reducer.js";


ReactDOM.render(
<React.StrictMode>
<StateProvider initialState={initialState} reducer={reducer}>
<App/>
</StateProvider>
</React.StrictMode>,document.getElementById('root'));


