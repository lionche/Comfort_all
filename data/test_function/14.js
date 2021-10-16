function() {
    if (this.browser &&
        this.browser.removeTab &&
        this.tab != null && (appName != "B2G")) {
      this.browser.removeTab(this.tab);
      this.tab = null;
    }
  }