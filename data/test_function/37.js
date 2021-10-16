function(aStatus) {
    this.server._connectionClosed(this);
    this.sessionTearDown();
  }