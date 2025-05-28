import manifest from "../../manifest/manifest.json" with { type: "json" };

const bundle = () => {
  return async (c, next) => {
    const manifestFile = manifest;
    c.set('manifest', manifestFile.entries);
    await next();
  };
};

export {
  bundle
};
