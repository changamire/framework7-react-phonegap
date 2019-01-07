
import React from 'react';

import {
  App,
  Panel,
  View,
  Statusbar
} from 'framework7-react';

import routes from '../routes';

// Framework7 parameters here
const f7params = {
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'auto', // Automatic theme detection
  // App routes
  routes,
};

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <App params={f7params}>
        {/* Statusbar */}
        <Statusbar />

        {/* Right Panel */}
        <Panel right reveal themeDark>
          <View url="/panel-right/" />
        </Panel>

        {/* Main View */}
        <View id="main-view" url="/" main className="ios-edges" />

      </App>
    );
  }
};
