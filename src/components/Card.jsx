export function Card({ children, className = "", ...props }) {
  return (
    <div 
      className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm ${className}`} 
      {...props}
    >
      {children}
    </div>
  )
}