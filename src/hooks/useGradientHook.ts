export default function getGradient(chart: any) {
  const {
    ctx,
    chartArea: { top, bottom, left, right },
  } = chart;
  const gradientSegment = ctx.createLinearGradient(0, bottom, 0, top);
  gradientSegment.addColorStop(0, "rgba(57,181,74,1)");
  gradientSegment.addColorStop(1, "rgba(191,215,50,1)");
  return gradientSegment;
}
