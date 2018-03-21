import React, { Component } from 'react';
import Routes from '../routes';

export default function Html(props) {
 const { component } = props;

  return (
    <html lang="en">
      <head>
        <title>Big Time Isomorphic Render App</title>
      </head>
      <body>
        <div id="content" dangerouslySetInnerHTML={{ __html: component }} />
        <script type="text/javascript" src="/client.js" />
      </body>
    </html>
  );
}
