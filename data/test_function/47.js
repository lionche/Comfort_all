function(win) {
    switch (appName) {
      case "Firefox":
        if (this.window.location.href.indexOf("chrome://b2g") == -1) {
          this.browser = win.gBrowser;
        }
        else {
          // this is Mulet
          appName = "B2G";
        }
        break;
      case "Fennec":
        this.browser = win.BrowserApp;
        break;
    }
  }