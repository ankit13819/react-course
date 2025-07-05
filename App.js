import React from 'react';
import ReactDOM from 'react-dom/client'

const element = React.createElement("div", {}, [React.createElement("h1", { key: "title" }, "React Course Notes🚀"), React.createElement("h2", { key: "subtitle" }, "This is react component")]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(element)