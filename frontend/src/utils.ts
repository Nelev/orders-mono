export const getTHCLevelColor = (thcLevel: number) => {
  if (thcLevel > 20) {
    return "#FFAA33";
  } else if (thcLevel > 10) {
    return "#FDDA0D";
  } else {
    return "#93C572";
  }
};
