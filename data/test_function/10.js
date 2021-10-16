function() {
    this.command_id = this.getCommandId();
    this.sendAsync("deleteAllCookies", {}, this.command_id);
  }