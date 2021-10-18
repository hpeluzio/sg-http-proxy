var http = require('http');
var httpProxy = require('http-proxy');

// Reverse proxy
var proxy = httpProxy.createProxyServer();
http
  .createServer(function (req, res) {
    var target = undefined,
      domain = req.headers.host,
      host = domain.split(':')[0];

    console.log('host: ', host);

    if (host === 'api.bolaodasorte.online')
      target = { host: 'localhost', port: '3333' };
    if (host === 'paymentmethods.bolaodasorte.online')
      target = { host: 'localhost', port: '4444' };
    if (host === 'createcardtoken.bolaodasorte.online')
      target = { host: 'localhost', port: '4445' };
    if (host === 'mptoken.bolaodasorte.online')
      target = { host: 'localhost', port: '4446' };
    if (host === 'mpcardtoken.bolaodasorte.online')
      target = { host: 'localhost', port: '4447' };
    if (host === 'www.bolaodasorte.online')
      target = { host: 'localhost', port: '3000' };
    if (host === 'bolaodasorte.online')
      target = { host: 'localhost', port: '3000' };

    if (target !== undefined) {
      proxy.web(req, res, {
        target: target,
      });
    }
  })
  .listen(80);
