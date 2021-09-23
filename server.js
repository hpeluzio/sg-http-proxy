var http = require('http');
var httpProxy = require('http-proxy');

// Reverse proxy
var proxy = httpProxy.createProxyServer();
http
  .createServer(function (req, res) {
    var target,
      domain = req.headers.host,
      host = domain.split(':')[0];

    if (host === 'api.bolaodasorte.online')
      target = { host: 'localhost', port: '3333' };
    else target = { host: 'localhost', port: '3000' };

    proxy.web(req, res, {
      target: target,
    });
  })
  .listen(80);
