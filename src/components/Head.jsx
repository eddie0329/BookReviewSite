import React, { Component } from "react";
import { Helmet } from "react-helmet";

export class Head extends Component {
  render() {
    return (
      <Helmet>
        {" "}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />{" "}
        <meta charSet="utf-8" />{" "}
        <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />{" "}
        <title>EddieSunny</title>{" "}
        <meta name="description" content="description" />{" "}
        <meta name="keyword" content="EddieSunny" />{" "}
        <meta property="og:url" content="https://" />{" "}
        <meta property="og:title" content="title" />{" "}
        <meta property="og:type" content="website" />{" "}
        <meta property="og:description" content="description" />{" "}
        <meta property="og:image" content="" />{" "}
        <meta property="og:image:width" content="600" />{" "}
        <meta property="og:image:height" content="315" />{" "}
      </Helmet>
    );
  }
}

export default Head;
