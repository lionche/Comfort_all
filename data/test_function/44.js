function(aRequest) {
    this.command_id = this.getCommandId();
    this.sendAsync("takeScreenshot",
                   {id: aRequest.parameters.id,
                    highlights: aRequest.parameters.highlights},
                   this.command_id);
  }