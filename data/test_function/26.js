function(aRequest) {
    this.command_id = this.getCommandId();
    this.marionetteLog.log(aRequest.parameters.value, aRequest.parameters.level);
    this.sendOk(this.command_id);
  }