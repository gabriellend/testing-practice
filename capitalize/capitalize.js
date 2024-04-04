export const capitalize = (string) => {
  if (
    typeof string !== "string" ||
    !isNaN(parseFloat(string)) ||
    string === ""
  ) {
    return string;
  }

  string = string.trim();
  return `${string[0].toUpperCase()}${string.slice(1)}`;
};
