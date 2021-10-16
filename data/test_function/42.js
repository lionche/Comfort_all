function(aRequest) {
    this.command_id = this.getCommandId();
    this.sendAsync("getAppCacheStatus", {}, this.command_id);
  }