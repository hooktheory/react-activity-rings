//import ActivityRings from "./ActivityRings";
//import type { ActivityRingData, ActivityRingsData, ActivityRingsConfig } from "./ActivityRings";

import ActivityRings from "./main.ts";
import type { ActivityRingData, ActivityRingsData, ActivityRingsConfig } from "./main.js";

import React from "react";
import ReactDOM from "react-dom";
 
const App = () => {
 const activityData: ActivityRingData[] = [ 
   { value: 0.4 }, 
   { value: 0.6 }, 
   { value: 0.2 }
 ]
 
 const activityConfig: ActivityRingsConfig = { 
   width: 150,  
   height: 150
 }
 return (
    <ActivityRings data={activityData} config={activityConfig} />
 )
}

ReactDOM.render(<App/>, document.getElementById("root"));
 


