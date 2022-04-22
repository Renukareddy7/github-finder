// post method
// to create a new resources

//put method
// if we want edit data we can go with put method
// the http put method creates a new resource or replace a representation of the target resource with request payload

// imppppppp inter mandatory

//the difference between put and post is that is idempotent :calling it once or sevaral times successsively has the same effect(that is no side effect),where as succussive identical post request may have additional effect.

//request has body                       yes
//succussful responce has body          no
// safe                               no
// idempotent                    yes
// cacheable            no


// delete method

// the http delete request method delete the specified resourse
//request has body                       may
//succussful responce has body          may
// safe                               no
// idempotent                    yes
// cacheable            no



//http method         GET/POST/PUT/DELETE
//CRUD

//before es6 ajax



//XHR vvvvimp for interview
// XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing.

//XMLHttpRequest is used heavily in AJAX programming.

//window.xmlhttprequest-ai provided by browser

//json.parse()-


//what is axios and how to use it
// Axios is a promise based HTTP client for the browser and Node. js. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations. It can be used in plain JavaScript or with a library such as Vue or React.

// installation for axios
//yarn add axios







import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import  './global.css'

createRoot(document.getElementById('root')).render(<App/>)