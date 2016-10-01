export default swagger = (opts) => store => next => {
  var waitQueue = []
  var ready = false

  var callApi = (swagger) => {
    if (typeof swagger === 'function')
      swagger(client)
    else
      console.error("Swagger api call is not a function")
  }

  var client = new Swagger({
    ...opts,
    success: () => {
      ready = true
      while (waitQueue.length) {
        var action = waitQueue.shift()
        callApi(action.swagger)
        next(action)
      }
    }
  });
  return action => {
    if (action.swagger) {
      // Add async api calls to queue if not ready
      if (ready == false)
        waitQueue.push(action)
      else {
        // Call payload and pass the swagger client
        callApi(action.swagger)
        return next(action)
      }
    } else 
      return next(action)
  }
}
