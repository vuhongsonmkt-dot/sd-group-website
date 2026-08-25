export default function CodedVisual({ variant, compact=false, label }: { variant:string; compact?:boolean; label?:string }) {
  return <div className={`coded-visual visual-${variant} ${compact?"visual-compact":""}`} role="img" aria-label={label || variant}>
    <div className="visual-grid" aria-hidden="true" />
    <div className="visual-shape shape-a" aria-hidden="true" /><div className="visual-shape shape-b" aria-hidden="true" /><div className="visual-shape shape-c" aria-hidden="true" />
    <span className="visual-code" aria-hidden="true">SD/{variant.slice(0,3).toUpperCase()}</span>
    <span className="visual-mark" aria-hidden="true">↗</span>
  </div>;
}
