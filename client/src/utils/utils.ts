import { AnyParams } from "@/types/index";


export const groupBy = (objArray: any, property: string) => {
    return objArray.reduce((acc: object, obj: AnyParams) => {
        const key = obj[property];
        return {...acc, [key]: obj}
    }, {})
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