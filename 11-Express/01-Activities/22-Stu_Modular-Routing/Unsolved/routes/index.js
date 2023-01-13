const express = require('express');
const app = express();

//If this is central command, we need to connect other modules into it
const feedback = require('./feedbackrouter');
const tips = require('./tipsRouter');

//Middleware acts in between request being received and response being sent 
//Using middleware, we can divert requests to appropriate module with path 

app.use('./feedback', feedback);
app.use('./tips', tips);