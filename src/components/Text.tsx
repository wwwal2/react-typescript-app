import React from 'react';
import { Greet } from '../interfaces/Greet';

export default class Text extends React.PureComponent<Greet> {
  render(): React.ReactNode {
    const { text, name } = this.props;
    return (
      <div>
        <h1>
          {`${text} ${name}`}
        </h1>
      </div>
    );
  }
}
