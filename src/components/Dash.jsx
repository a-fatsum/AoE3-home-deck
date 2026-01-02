import CivSelector from "./CivSelector";
import Card from "./Card";
import SelectedDeckWindow from "./SelectedDeckWindow";

//
export default function Dash({
  handleCivSelection,
  OttomansData,
  selectedCiv,
  civilizations,
}) {
  return (
    <>
      <div className=" wrapper h-screen w-screen bg-orange-900 ">
        <div className="grid grid-cols-4 gap-8">
          <div className="left bg-green-900 grid">
            LEFT
            <div className="TOP-LEFT">{/*  */}</div>
            <div className="BOTTOM-LEFT">
              <CivSelector
                handleCivSelection={handleCivSelection}
                civilizations={civilizations}
              />
            </div>
          </div>

          <div className="RIGHT bg-blue-900 ">
            <div className="TOP ">
              <SelectedDeckWindow OttomansData={OttomansData} />
            </div>

            <div className="bottom">XXXXXXX</div>
          </div>
        </div>
      </div>
    </>
  );
}
