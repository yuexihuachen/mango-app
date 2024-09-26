
type TCategory = {
    _id: string;
    name: string;
    alias: string;
    order: number;
  };

  type AnyParams = {
    [prop: string]: unknown
  }

export const category:Partial<TCategory> = {};

const handler = {
  get: function(target: AnyParams, name: string){
      return target[name]
  },
  set: function(target: AnyParams, prop: string, value: TCategory) {
      target[prop] = value;
      return true;
  }
};

export const proxyCategory = new Proxy(category, handler)
