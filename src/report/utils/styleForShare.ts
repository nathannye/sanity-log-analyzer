export function styleForShare(
  filled: number,
  empty: number,
  filledColor: string,
  emptyColor: string,
): string {
  const total = filled + empty;
  if (total <= 0) return `background: ${emptyColor};`;
  const filledPercent = (filled / total) * 100;
  return `background: conic-gradient(${filledColor} 0 ${filledPercent}%, ${emptyColor} ${filledPercent}% 100%);`;
}
