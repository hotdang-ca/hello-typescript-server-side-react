import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Home } from './views/HomePage';
import { Nav } from './views/Nav';
import { Wrapper } from './views/Wrapper';

import { renderReactView } from './utils';

const app = express();

app.get('/', (req: any, res: any) => {
  res.send(renderReactView(
    <Wrapper>
      <Nav activeRoute='/' />
      <Home
        backgroundColor="red"
        currentDate={new Date()}
        profilePhotoUrl="/"
      />
    </Wrapper>
  ));
});

app.get('/about', (req, res) => {
  res.send(renderReactView(
    <Wrapper>
      <Nav activeRoute={'/about'} />
      <Home
        backgroundColor={'blue'}
        currentDate={new Date()}
        profilePhotoUrl="/"
      />
    </Wrapper>
  ));
});

const PORT: number = 3000;

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
