import React from 'react';
import {Buffer} from 'buffer';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

window.Buffer = Buffer

function Api() {
  return (
    <SwaggerUI url="BackendAPI.yaml" />
  );
}

export default Api;
