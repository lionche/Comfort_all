function() {
    this.command_id = this.getCommandId();
    this.sendAsync("goBack", {}, this.command_id);
  }