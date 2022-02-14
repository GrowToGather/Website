import React from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

function Api() {
  return (
    <SwaggerUI url="https://raw.githubusercontent.com/GrowToGather/Website/main/BackendAPI.yaml" />
  );
}

export default Api;
