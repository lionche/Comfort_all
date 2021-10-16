function() {
    this.command_id = this.getCommandId();
    if (this.context == "chrome") {
      this.sendResponse(this.getCurrentWindow().location.href, this.command_id);
    }
    else {
      this.sendAsync("getCurrentUrl", {}, this.command_id);
    }
  }