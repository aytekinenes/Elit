export function getDeviceType() {
  const ua = navigator.userAgent;

  if (/Smart-TV|SMART-TV|Tizen|Web0S|SmartTV|AppleTV/i.test(ua)) {
    return "TV";
  }
  if (/iPhone|Android.*Mobile|Mobile|iPad|iPod/i.test(ua)) {
    return "Mobil";
  }
  if (/Tablet|Nexus 7|Nexus 10|Android(?!.*Mobile)/i.test(ua)) {
    return "Tablet";
  }
  return "Masaüstü (PC)";
}
