export const resetarMovendo = tab => {
  const newTab = tab.map(e => {
    e.movendo = false;
    return e;
  });
  return newTab;
};

export const resetarPodeAndar = tab => {
  const newTab = tab.map(e => {
    e.podeMover = false;
    return e;
  });
  return newTab;
};
