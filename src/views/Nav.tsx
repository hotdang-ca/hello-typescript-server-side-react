import React from 'react';

interface Props {
  activeRoute: string;
}

export class Nav extends React.Component<Props> {
  render() {
    const message = ' <- You are here! :)';

    return (
      <ul>
        <li>
          <a href="/">Home</a> { this.props.activeRoute === '/' ? message : '' }
        </li>
        <li>
          <a href="/about">About</a> { this.props.activeRoute === '/about' ? message : '' }
        </li>
      </ul>
    );
  }
}
