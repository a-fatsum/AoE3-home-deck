export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        m-2 px-6 py-2.5
        uppercase tracking-widest font-semibold text-sm
        text-[#e6d3a3]

        bg-gradient-to-b from-[#3a2a1a] to-[#1c120a]
        border border-[#8f6b2a]
        rounded-[2px]

        shadow
        shadow-[inset_0_1px_0_rgba(255,220,160,0.25),0_3px_6px_rgba(0,0,0,0.8)]

        hover:bg-gradient-to-b hover:from-[#4a3520] hover:to-[#23160c]
        hover:border-[#c9a24d]
        hover:text-[#f3e6c2]

        active:translate-y-[1px]
        active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)]

        transition-all duration-150 ease-out

        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-[#c9a24d]
        focus-visible:ring-offset-2
        focus-visible:ring-offset-[#1a120b]
      "
    >
      {label}
    </button>
  );
}
