export const isGameOver = (colorIndex: number[]): Boolean => {
  const colorMap: Map<number, number> = new Map();
  for (let key of colorIndex) {
    let prevCount = colorMap.get(key);
    if (!prevCount) colorMap.set(key, 1);
    else colorMap.set(key, prevCount + 1);
  }
  for (let i: number = 0; i < 6; i++) {
    let colorCount = colorMap.get(i);
    if (!colorCount) continue;
    if (colorCount > 1) return false;
  }
  return true;
};
export const initializeColorIdxArray = (sqSize:number): number[] => {
  return Array.from({ length: sqSize*sqSize}, () => Math.floor(Math.random() * 6));
};
