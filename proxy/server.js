const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

const clientBundles = './public/services';
const serverBundles = './templates/services';
const serviceConfig = require('./service-config.json');
const services = require('./loader.js')(clientBundles, serverBundles, serviceConfig);

const React = require('react');
const ReactDom = require('react-dom/server');
const Layout = require('./templates/layout');
const App = require('./templates/app');
const Scripts = require('./templates/scripts');

if (typeof (window) === 'undefined') global.window = {};

const renderComponents = (components, props = {}) => Object.keys(components).map((item) => {
  const component = React.createElement(components[item], props);
  return ReactDom.renderToString(component);
});

app.get('/restaurants/:id', (req, res) => {
  const components = renderComponents(services, { id: req.params.id });
  res.end(Layout(
    'Muncheez Sidebar',
    App(...components),
    Scripts(Object.keys(services)),
  ));
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
