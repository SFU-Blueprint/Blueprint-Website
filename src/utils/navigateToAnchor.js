export const navigateToAnchor = (section = "") => {
  const url = `${section}`;
  window.location.href = url;
}