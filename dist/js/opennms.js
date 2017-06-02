var onmsHost = "demo.opennms.org",
        onmsPort = 443,
        onmsUsername = 'demo',
        onmsPassword = 'demo',
        end = Date.now(),
        start = end - (8 * 60 * 60 * 1000), // 8 hours ago
        resolution = 5;


function getBaseHref() {
  return "https://" + onmsHost + ":" + onmsPort;
}
