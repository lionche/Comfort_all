function(aRequest) {
    this.command_id = this.getCommandId();
    if (this.context == "chrome") {
       this.sendError("Command 'multiAction' is not available in chrome context", 500, null, this.command_id);
    }
    else {
      this.sendAsync("multiAction",
                     {
                       value: aRequest.parameters.value,
                       maxlen: aRequest.parameters.max_length
                     },
                     this.command_id);
   }
 }