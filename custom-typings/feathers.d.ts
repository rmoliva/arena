
// AMD
declare module 'feathers'{
  let feathers: {
    (): {
      configure: Function;
      use: Function;
      listen: Function;
    };
    rest: Function;
    socketio: Function
  };

  export = feathers;
}

declare module 'feathers-mongodb'{
  let feathers_mongodb: {
    (config: any): any;
  };

  export = feathers_mongodb;
}

declare module 'feathers-rest'{
  let feathers_rest: {
    (): any;
  };

  export = feathers_rest;
}

declare module 'feathers-socketio'{
  let feathers_socketio: {
    (): any;
  };
  export = feathers_socketio;
}

declare module 'feathers-errors'{
  let feathers_errors: {
    handler: () => any;
  };

  export = feathers_errors;
}
