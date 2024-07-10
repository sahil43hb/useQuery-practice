const useCounter = (value, incr) => {
  let isLoading = false;
  let result = null;
  let message = "";
  isLoading = true
  if (value == null) {
    message = "Value not empty";
  } else if (incr == null) {
    message = "Increament not empty";
  } else {
    result = value + incr;
    message = "cal Successfully";
  }
  isLoading = false
  return [isLoading, result, message];
};

export default useCounter;
