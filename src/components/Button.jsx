export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        m-2 px-6 py-3 uppercase tracking-wider font-semibold
        text-amber-200
        bg-gradient-to-b from-[#3b2a1a] via-[#2a1c12] to-[#1a110b]
        border border-amber-700
        rounded-sm
        shadow-[inset_0_1px_0_rgba(255,215,128,0.3),0_4px_10px_rgba(0,0,0,0.8)]
        hover:text-amber-100
        hover:border-amber-500
        hover:shadow-[inset_0_1px_0_rgba(255,230,160,0.5),0_0_12px_rgba(255,180,60,0.4)]
        active:translate-y-[1px]
        active:shadow-[inset_0_2px_6px_rgba(0,0,0,0.8)]
        transition-all duration-150 ease-out
        focus:outline-none focus:ring-2 focus:ring-amber-600
        
      "
    >
      {label}
    </button>
  );
}
