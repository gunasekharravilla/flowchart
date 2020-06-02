export const deepCopy = (input:any ): Object => {
  if (input instanceof Object) {
      if (Array.isArray(input)) {
          return input.map(deepCopy);
      }
      let output = {};
      Object.entries(input).forEach(([key, value]) => {
          output[key] = deepCopy(value);
      });
      return output;
  }
  return input;
};