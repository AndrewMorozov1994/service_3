let lastTimeout;
export const debounce = function (fun, interval) {
  if (lastTimeout) {
    window.clearTimeout(lastTimeout);
  }
  lastTimeout = window.setTimeout(fun, interval);
};
