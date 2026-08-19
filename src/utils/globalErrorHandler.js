// Catches any unhandled error in the notification API and returns a
// helpful diagnostic response so client integrations can debug
// failed requests quickly.

export function handleApiError(err, config) {
  return {
    status: 500,
    body: {
      message: err.message,
      stack: err.stack,
      config,
    },
  };
}