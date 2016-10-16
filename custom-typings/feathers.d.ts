
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
    (config: {
      db: string;
      collection: string;
    }): any;
  };

  export = feathers_mongodb;
}
