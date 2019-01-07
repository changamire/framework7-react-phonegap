import React from 'react';
import 'framework7-icons';

import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavRight,
  Link,
  Button,
  Icon,
  Popup,
  Block,
  View
} from 'framework7-react';
import brooklyn from '../../img/brooklyn.jpg';

export default class extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        {/* Popup */}
        <Popup id="aPopup">
          <View>
            <Page>
              <Navbar title="A Popup">
                <NavRight>
                  <Link popupClose>Close</Link>
                </NavRight>
              </Navbar>
            </Page>
          </View>
        </Popup>
        <Navbar>
          <NavLeft>
          </NavLeft>
          <NavTitle>F7-React</NavTitle>
          <NavRight>
            <Link panelOpen="right"><Icon f7="bars"></Icon></Link>
          </NavRight>
        </Navbar>

        <Block>
          <Button raised popupOpen="#aPopup">Open popup</Button>
        </Block>

        <Block>
          <div className="styled-text">Some styled text</div>
        </Block>

        <Block>
          <img alt="brooklyn" src={brooklyn} />
        </Block>

      </Page>
    );
  }
};