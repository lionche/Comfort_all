function(win, newSession) {
    try {
      if (!Services.prefs.getBoolPref("marionette.contentListener") || !newSession) {
        this.curBrowser.loadFrameScript(FRAME_SCRIPT, win);
      }
    }
    catch (e) {
      //there may not always be a content process
      logger.info("could not load listener into content for page: " + win.location.href);
    }
    utils.window = win;
  }