export const reverseString = (string) => {
  if (
    typeof string !== "string" ||
    !isNaN(parseFloat(string)) ||
    string === ""
  ) {
    return string;
  }

  string = string.trim();
  if (string === "") return " ";

  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
};
