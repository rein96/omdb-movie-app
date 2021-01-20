export const fallBackErrorImage = 'https://bitsofco.de/content/images/2018/12/broken-1.png'

export const isMobile = () => {

  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    return true;
  }else{
    return false;
  }
}

export const userAgentUtils = () => {
  let userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
      return "Android";
  }
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  else if (/iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return "iOS";
  }

  else if(/Prerender/.test(userAgent)) {
      return "Crawler"
  }

  else {
    return "Web"
  }
}