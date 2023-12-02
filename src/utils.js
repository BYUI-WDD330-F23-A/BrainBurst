export function createElement(type, props = {}, children = []) {
  const element = document.createElement(type);
  // props: {properties, attributions}
  Object.entries(props).forEach(([key, value]) => {
    if (key.indexOf("-") > -1) {
      element.setAttribute(key, value); // data attributes
    } else {
      element[key] = value;
    }
  });

  children.forEach((child) => {
    element.appendChild(child);
  });

  return element;
}
