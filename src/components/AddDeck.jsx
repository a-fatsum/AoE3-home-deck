export default function AddDeck({ createNewDeck, handleClose, setDeckName }) {
  return (
    <div
      className="
        w-80 p-4
        rounded-md
        border-2 border-[#c9a14a]
        bg-gradient-to-b from-[#2a1d12] to-[#1a120b]
        shadow-[inset_0_0_0_2px_#3b2a17,0_8px_24px_rgba(0,0,0,0.8)]
      "
    >
      <input
        type="text"
        placeholder="Enter Deck Name..."
        className="
          w-full
          px-3 py-2
          rounded
          font-serif text-base
          text-[#f5e6c8]

          bg-gradient-to-b from-[#3b2a17] to-[#2a1d12]
          border border-[#b89645]

          placeholder-[#cbb68a]/70

          shadow-[inset_0_1px_2px_rgba(0,0,0,0.8),0_0_6px_rgba(201,161,74,0.2)]

          outline-none
          transition-all duration-200

          focus:border-[#e6c76a]
          focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.9),0_0_10px_rgba(230,199,106,0.6)]
        "
      />
      <button
        onClick={(e) => {
          setDeckName(e.target.previousSibling.value), handleClose();
        }}
        className="mt-2 w-full bg-gradient-to-b from-[#c9a24d] to-[#a8853a] text-[#1a120b] font-bold py-2 px-4 rounded hover:from-[#e6c76a] hover:to-[#d4b05c] transition duration-200"
      >
        Create Deck
      </button>
    </div>
  );
}
