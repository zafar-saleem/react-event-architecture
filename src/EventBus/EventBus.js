export const EventBus = () => {
  let eventsList = {};

  return () => {
    const listen = (eventName, callback) => {
      if (!eventsList[eventName]) {
        eventsList[eventName] = [];
      }

      eventsList[eventName].push(callback);
    };

    const dispatch = (eventName, dataObject) => {
      if (!eventsList[eventName] || eventsList[eventName].length < 1) {
        return;
      }

      eventsList[eventName].forEach((listener) => {
        listener(dataObject || {});
      });
    };

    const destroy = (eventName) => {
    	delete eventsList[eventName];
    };

    return {
      dispatch,
      listen,
      destroy,
    };
  };
};
