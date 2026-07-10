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

export function styleForSlices(
  slices: Array<{ value: number; color: string }>,
): string {
  const total = slices.reduce((sum, slice) => sum + slice.value, 0);
  if (total <= 0 || slices.length === 0) {
    return "background: color-mix(in srgb, var(--color-primary) 8%, transparent);";
  }

  let current = 0;
  const stops: string[] = [];
  for (const slice of slices) {
    const start = current;
    current += (slice.value / total) * 100;
    stops.push(`${slice.color} ${start}% ${current}%`);
  }

  return `background: conic-gradient(${stops.join(", ")});`;
}
