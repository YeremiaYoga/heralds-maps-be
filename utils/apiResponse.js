exports.success = (message, data = null) => ({
  success: true,
  message,
  data
});

exports.error = (message) => ({
  success: false,
  message
});
