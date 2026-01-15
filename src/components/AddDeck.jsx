import Button from "./Button";

export default function AddDeck({
  onSubmit,
  handleClose,
  deckName,
  setDeckName,
  mode = "create",
}) {
  function handleSubmit() {
    if (!deckName.trim()) return;

    onSubmit(deckName);
    setDeckName("");
    handleClose();
  }

  return (
    <div className="w-80 font-['Cinzel'] p-4 rounded-md border-2 border-[#c9a14a] bg-gradient-to-b from-[#2a1d12] to-[#1a120b]">
      <input
        type="text"
        placeholder={
          mode === "rename" ? "Enter new deck name..." : "Enter deck name..."
        }
        value={deckName}
        onChange={(e) => setDeckName(e.target.value)}
        className="w-full px-3 py-2 rounded text-[#f5e6c8] bg-[#2a1d12] border border-[#b89645]"
      />

      <Button
        label={mode === "rename" ? "Rename Deck" : "Create Deck"}
        onClick={handleSubmit}
      />
    </div>
  );
}
