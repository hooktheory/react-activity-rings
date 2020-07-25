
[![npm version](https://badge.fury.io/js/react-activity-rings.svg)](https://badge.fury.io/js/react-native-activity-rings)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)


A library that provides customizable ring visualization of data and legends for chart representation.
<p align="center">
    <img src="./docs/screenshot.png?raw=true" />
</p>

<p align="center">
    <img src="./docs/screenshot-graph.png?raw=true" />
</p>


---  

## Installation

```
yarn add react-activity-rings  
```

## Example

```typescript
import ActivityRings, {ActivityRingsConfig, ActivityRingsData} from "react-activity-rings"

const BasicExample = () => {

 const activityData: ActivityRingsData = [ 
   { value: 0.8 }, 
   { value: 0.6 }, 
   { value: 0.2 }
 ]

 const activityConfig: ActivityRingsConfig = { 
   width: 150,  
   height: 150
 }

 return (
  <div>
    <ActivityRings data={activityData} config={activityConfig} /> 
  </div>
  )
}
```


## Activity Data

Define an array of objects with the data for each ring:

```typescript
const activityData: ActivityRingsData = [
  {
    value: 0.8, // ring will use color from theme
  },
  {
    label: "ACTIVITY",
    value: 0.6,
    color: "#cb5f18",
  },
  {
    label: "RINGS",
    value: 0.2,
    color: "#86040f",
    backgroundColor: "#cccccc"
  }
];
```

| Property         | Type   | Description                                                                                                                                           |
| ---------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| value            | Number | The value used as percentage to render for each ring. value of 1 represents 100% so this means 0.2 represents 20%. Values > 1 will not be considered. |
| label?           | string | Label will be used when enabling legend flag alongside the percentage value. |
| color?           | string | Hex representation of the color code for the ring. Only compatible with hex values (for now).                                                         |
| backgroundColor? | string | Hex representation of the background color code for the ring. Only compatible with hex values (for now). The background color will get 30% opacity.   |


## Configuration

Config options for the ring pie:

```javascript
const activityConfig = {
  width: 150,
  height: 150,
  radius: 32,
  ringSize: 14,
}
```

| Property | Type   | Description                                |
| -------- | ------ | ------------------------------------------ |
| width    | Number | The width of the activity ring component.  |
| height   | Number | The height of the activity ring component. |
| radius?  | Number | Defines the radius of the complete pie.    |
| ringSize?| Number | Defines the size of each ring in px.       |

## Legend
Legend is disabled by default.

Enable legend on the right side of the rings, this is ideal for chart representation.
Notice that legend will use the *label* value you defined for every ring inside the data object. 

You can optionally provide a Title for the legends
```typescript
<ActivityRings legend={true} legendTitle={"Awesome"} data={activityData} config={activityConfig} />
```

## Themes

By default this component comes with `Dark` theme and will work best of course with dark backgrounds. The library also provides a theme for light backgrounds and yes it's pretty obviously named `Light` theme.

```typescript
<ActivityRings data={activityData} config={activityConfig} />
```

*Please notice that dark is the default theme so you don't actually need to specify it.*

```typescript
<ActivityRings theme={"light"} data={activityData} config={activityConfig} />
```


## Not yet supported

1. Visualize more than 100 percentage on a ring like the Apple Watch does.
