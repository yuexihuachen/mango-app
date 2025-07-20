import { OptionalParams } from "@/types/index";

// 单个属性分组
export const groupBy = (objArray: any, property: string, val?: string) => {
    return objArray.reduce((acc: object, obj: OptionalParams) => {
        const key = obj[property];
        const value = val?obj[val]: obj;
        return {...acc, [key]: value}
    }, {})
}
// 多个属性分组
export const multipleGroupBy = (objectArray: any, property: string) => {
  return objectArray.reduce((acc: object, obj: OptionalParams) => {
    const key: string = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

export const docCookies = {
  getItem: function (sKey: string) {
    return (
      decodeURIComponent(
        document.cookie.replace(
          new RegExp(
            "(?:(?:^|.*;)\\s*" +
              encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") +
              "\\s*\\=\\s*([^;]*).*$)|^.*$",
          ),
          "$1",
        ),
      ) || null
    );
  },
  hasItem: function (sKey: string) {
    return new RegExp(
      "(?:^|;\\s*)" +
        encodeURIComponent(sKey).replace(/[-.+*]/g, "\\$&") +
        "\\s*\\=",
    ).test(document.cookie);
  }
};