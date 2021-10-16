function(aRequest) {
    this.command_id = this.getCommandId();
    this.sendAsync("getElementLocation", {id: aRequest.parameters.id},
                   this.command_id);
  }