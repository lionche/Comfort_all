function(command_id) {
    this.sendToClient({from:this.actorID, ok: true}, command_id);
  }