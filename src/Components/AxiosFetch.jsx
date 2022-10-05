import React from 'react'

const AxiosFetch = () => {
  return (
    <div>
    <h2>1. Difference between Axios and fetch ?</h2>
    <h3>A) Axios</h3>
    <p>Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. 
    <br/>It can be used intercept HTTP requests and responses and enables client-side protection against XSRF.
    <br/> It also has the ability to cancel requests.</p>
    <h3>B) Fetch</h3>
    <p>The Fetch API provides a fetch() method defined on the window object. 
    <br/>It also provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline (requests and responses). The fetch method has one mandatory argument- the URL of the resource to be fetched. 
    <br/>This method returns a Promise that can be used to retrieve the response of the request. </p>
    <hr/>
    </div>

  );
}

export default AxiosFetch;