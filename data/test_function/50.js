function() {
    this.command_id = this.getCommandId();
    if (this.context == "chrome"){
      var curWindow = this.getCurrentWindow();
      var title = curWindow.document.documentElement.getAttribute('title');
      this.sendResponse(title, this.command_id);
    }
    else {
      this.sendAsync("getTitle", {}, this.command_id);
    }
  }