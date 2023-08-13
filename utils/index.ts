export const isUrl = (str: string) => {
  try {
    new URL(str);
    return true;
  } catch (_) {
    return false;
  }
}
