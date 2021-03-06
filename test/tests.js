// Generated by CoffeeScript 1.3.3
(function() {
  var mailstrip, should;

  should = require('chai').should();

  mailstrip = require('../lib');

  describe('strip', function() {
    var sender;
    sender = 'test@test.com';
    it('after From: test@test.com', function() {
      return mailstrip('content\nFrom: test@test.com\nxxx').should.equal('content');
    });
    it('after <xxx@xxx.com>', function() {
      return mailstrip('content\n<test@test.com>\nxxx').should.equal('content');
    });
    it('after On xxx wrote:', function() {
      return mailstrip('content\nOn Fri, May 25, 2012 at 1:33 PM test@test.com wrote:\nxxx').should.equal('content');
    });
    it('after Le xxx a écrit', function() {
      return mailstrip('content\nLe 12 juin 2012 à 17:50, "test" <test@test.com> a écrit :\nxxx').should.equal('content');
    });
    it('after Le xxx a écrit (2)', function() {
      return mailstrip('voila le content\nLe 12 juin 2012 à 17:50, "test" <test@test.com> a écrit :\nxxx').should.equal('voila le content');
    });
    it('after sent from my xxx:', function() {
      return mailstrip('content\nSent from my Iphone\nxxx').should.equal('content');
    });
    it('after Envoye de mon xxx', function() {
      return mailstrip('content\nenvoyé de mon ipad\nxxx').should.equal('content');
    });
    it('after envoyé depuis mon xxx', function() {
      return mailstrip('content\nenvoyé depuis mon iphone\nxxx').should.equal('content');
    });
    it('after reply ABOVE...', function() {
      return mailstrip('content\nreply ABOVE THIS LINE\nxxx').should.equal('content');
    });
    it('after original message', function() {
      return mailstrip('content\n---original message---\nxxx').should.equal('content');
    });
    it('after signature', function() {
      return mailstrip('content\n--\nfoo Lestavel\nxxx').should.equal('content');
    });
    return it('quotation', function() {
      return mailstrip('content\n> xxxxx\n> xxxxx').should.equal('content');
    });
  });

}).call(this);
