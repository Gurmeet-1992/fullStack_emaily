var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: 'bugbrtsii' }, function(err, tunnel) {
  console.log('LT running')
});