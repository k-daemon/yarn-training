'use strict';
const axios = require('axios');
axios.get('https://google.com').then(res => {
  console.log(res.data);
});
