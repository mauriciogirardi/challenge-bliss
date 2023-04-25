export function urlParams(param: string) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
