function() {
    this.command_id = this.getCommandId();
    this.sendResponse(this.marionetteLog.getLogs(), this.command_id);
  }