export const initializeColorMap = (colorMap: Map<number, number>): void => {
  for (let i: number = 0; i < 7; i++) colorMap.set(i, 0);
  return;
};
export const isGameOver = (colorMap: Map<number, number>): Boolean => {
  for (let i: number = 0; i < 6; i++) {
    let colorCount = colorMap.get(i)!;
    if (colorCount > 1) return false;
  }
  return true;
};
