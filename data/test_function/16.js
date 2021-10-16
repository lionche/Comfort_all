function(script, frame) {
    frame.window.messageManager.loadFrameScript(script, true, true);
    Services.prefs.setBoolPref("marionette.contentListener", true);
  }