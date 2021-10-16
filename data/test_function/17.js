function() {
    this.command_id = this.getCommandId();
    this.sendAsync("goForward", {}, this.command_id);
  }