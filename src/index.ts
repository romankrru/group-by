const groupBy = <T>(
  arr: Array<T>,
  cb: (elem: T) => string | number
): Record<string, Array<T>> => {
  const map: Record<string, Array<T>> = {};

  arr.forEach((el) => {
    const key = cb(el);

    if (key in map) {
      map[key].push(el);
    } else {
      map[key] = [el];
    }
  });

  return map;
};

export default groupBy;
