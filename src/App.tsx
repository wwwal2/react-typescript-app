import React from 'react';
import Text from './components/Text';

import './style.css';

const text: string = 'TEXT';

export default class App extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div>
        <Text text={text} name="a" />
      </div>
    );
  }
}
