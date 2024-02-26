export const navigateToAnchor = (page = "", section = "") => {
  const url = `/${page}#${section}`;
  window.location.href = url;
}