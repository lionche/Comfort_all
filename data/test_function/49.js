function(aPacket) {
    // Dispatch the request
    if (this.requestTypes && this.requestTypes[aPacket.name]) {
      try {
        this.requestTypes[aPacket.name].bind(this)(aPacket);
      } catch(e) {
        this.conn.send({ error: ("error occurred while processing '" +
                                 aPacket.name),
                        message: e.message });
      }
    } else {
      this.conn.send({ error: "unrecognizedPacketType",
                       message: ('Marionette does not ' +
                                 'recognize the packet type "' +
                                 aPacket.name + '"') });
    }
  }