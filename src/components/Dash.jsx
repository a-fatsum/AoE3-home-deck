export default function Dash() {
  return (
    <>
      <div className=" wrapper bg-orange-900 ">
        <div className="grid grid-cols-4 gap-8">
          <div className="left bg-green-900 grid">
            <div>LEFT-top</div>
            <div>LEFT-bottom</div>
          </div>

          <div className="right bg-blue-900 ">RIGHT</div>
        </div>
      </div>
    </>
  );
}
