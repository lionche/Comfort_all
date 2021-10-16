function(aPrefix, aTransport, aServer) {
  this.uuidGen = Cc["@mozilla.org/uuid-generator;1"]
                   .getService(Ci.nsIUUIDGenerator);

  this.prefix = aPrefix;
  this.server = aServer;
  this.conn = aTransport;
  this.conn.hooks = this;

  // marionette uses a protocol based on the debugger server, which requires
  // passing back "actor ids" with responses. unlike the debugger server,
  // we don't have multiple actors, so just use a dummy value of "0" here
  this.actorID = "0";

  this.globalMessageManager = Cc["@mozilla.org/globalmessagemanager;1"]
                             .getService(Ci.nsIMessageBroadcaster);
  this.messageManager = this.globalMessageManager;
  this.browsers = {}; //holds list of BrowserObjs
  this.curBrowser = null; // points to current browser
  this.context = "content";
  this.scriptTimeout = null;
  this.searchTimeout = null;
  this.pageTimeout = null;
  this.timer = null;
  this.inactivityTimer = null;
  this.heartbeatCallback = function () {}; // called by simpletest methods
  this.marionetteLog = new MarionetteLogObj();
  this.command_id = null;
  this.mainFrame = null; //topmost chrome frame
  this.curFrame = null; // chrome iframe that currently has focus
  this.mainContentFrameId = null;
  this.importedScripts = FileUtils.getFile('TmpD', ['marionetteChromeScripts']);
  this.importedScriptHashes = {"chrome" : [], "content": []};
  this.currentFrameElement = null;
  this.testName = null;
  this.mozBrowserClose = null;
}