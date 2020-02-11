# Simple JSON Viewer Component

[![Netlify Status](https://api.netlify.com/api/v1/badges/dc4e978e-b3fd-4d55-be87-d8b8050c4bc7/deploy-status)](https://app.netlify.com/sites/zen-almeida-5e7020/deploys)



## Scripts

Run Dependency Installation

```
npm install
```
Build

```
npm build
```

Run Project

```
npm start
```

## Use Case

```js
import React from 'react';
import JsonViwer from './JsonViwer'

//using mock data for test
const MOCK_DATA = {
    name: "Additya Rajput",
    skills: ['Javascript', 'HTML', 'CSS', 'Typescript', 'React'],
    address: {
        place: "bengaluru",
        pincode: 560095
    },
    github_url: "https://github.com/apsrcreatix"
}

//this wrapper is just an example and not needed
export default function Wrapper(props){
    return <div className="wrapper">
		<JsonViwer json={ MOCK_DATA || props.json } />
         </div>
}
```



## TODO

- [x] To remove the dependency of classnames from component.

## Forked From & Thanks
Demo: https://cakeinpanic.github.io/simple-react-json-viewer/

