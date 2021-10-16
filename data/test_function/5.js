function(aRequest) {
    this.command_id = this.getCommandId();
    this.logRequest("setTestName", aRequest);
    this.testName = aRequest.parameters.value;
    this.sendAsync("setTestName",
                   { value: aRequest.parameters.value },
                   this.command_id);
  }