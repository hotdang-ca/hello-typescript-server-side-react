import React from 'react';

export class Wrapper extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>App</title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}
