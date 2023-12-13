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


export function shuffle(theArray) {
  // Takes an array, shuffles the contents randomly, returns a new array.

  let currentIndex = theArray.length
  let randomIndex;

  while (currentIndex > 0) {

    // Pick a remaining element at random.
    randomIndex = Math.floor(Math.random() * currentIndex);
    // (currentIndex initially starts out of bounds on 0-indexed arrays)
    currentIndex--;

    // Swap it with the current element
    [theArray[currentIndex], theArray[randomIndex]] =
    [theArray[randomIndex], theArray[currentIndex]];
  }

  // Return the new array.
  return theArray;

}

// Wrapper functions for managing localStorage.
export function getLocalStorage(key) {
  return localStorage.getItem(key);
}

export function clearLocalStorage(key){
  localStorage.setItem(key, '');
  return true; 
}

export function setLocalStorage(key, value) {
  localStorage.setItem(key, value);
  return true;
}