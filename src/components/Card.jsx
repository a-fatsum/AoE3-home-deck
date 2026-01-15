// --------------------------------------------------------------------------------- Keep old code for reference later

// import { useState } from "react";
// export default function Card({
//   name,
//   description,
//   image,
//   addOrRemoveCardFromDeck,
//   age,
// }) {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative w-32 bg-[#2b1d12] border-2 border-[#c9a24d] rounded-md shadow-lg
//                  overflow-visible hover:scale-[1.03] hover:shadow-2xl transition-all duration-200
//                  font-['Cinzel'] cursor-pointer"
//       onClick={() => addOrRemoveCardFromDeck({ name, image, description, age })}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Image Frame */}
//       <div className="h-24 bg-[#1a120b] border-b-2 border-[#c9a24d] flex items-center justify-center p-1">
//         {image ? (
//           <img
//             src={`src/${image}`}
//             alt={name}
//             className="h-full w-full object-contain image-pixelated"
//           />
//         ) : (
//           <span className="text-[#c9a24d] text-sm tracking-wide">
//             No Illustration
//           </span>
//         )}
//       </div>

//       {/* Text Content */}
//       <div className="px-1 py-2 bg-gradient-to-b from-[#3a2617] to-[#24160d]">
//         <h5 className="text-[#f5e6b8] text-xs tracking-wide">{name}</h5>
//       </div>

//       {/* Tooltip Description */}
//       {isHovered && description && (
//         <div
//           className="absolute top-0 left-full ml-2 w-40 p-2
//                      bg-[#3b2a17] border border-[#c9a24d] rounded-md
//                      text-[#e3d3a1] text-xs leading-snug shadow-lg
//                      font-['Cinzel']"
//         >
//           {description}
//         </div>
//       )}
//     </div>
//   );
// }

// --------------------------------------------------------------------------------- Keep old code for reference later

// I had a hardtime making the pop-up appear on top - z-9999 wasn't working ------------- Review the code below-- ChatGPT Helped me use createPortal from react-dom

import { useState } from "react";
import { createPortal } from "react-dom";

export default function Card({
  name,
  description,
  image,
  addOrRemoveCardFromDeck,
  age,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: rect.right + 8, y: rect.top });
    setIsHovered(true);
  };

  return (
    <div
      className="relative w-32 bg-[#2b1d12] border-2 border-[#c9a24d] rounded-md shadow-lg  
                 hover:scale-[1.03] hover:shadow-2xl transition-all duration-200 font-['Cinzel'] cursor-pointer"
      onClick={() => addOrRemoveCardFromDeck({ name, image, description, age })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image and name */}
      <div className="h-24 bg-[#1a120b] border-b-2 border-[#c9a24d] flex items-center justify-center p-1">
        {image ? (
          <img
            src={`src/${image}`}
            alt={name}
            className="h-full w-full object-contain image-pixelated"
          />
        ) : (
          <span className="text-[#c9a24d] text-sm tracking-wide">
            No Illustration
          </span>
        )}
      </div>
      <div className="px-1 py-2 bg-gradient-to-b from-[#3a2617] to-[#24160d]">
        <h5 className="text-[#f5e6b8] text-xs tracking-wide">{name}</h5>
      </div>

      {/* Tooltip Portal */}
      {isHovered &&
        description &&
        createPortal(
          <div
            style={{ position: "fixed", top: coords.y, left: coords.x }}
            className="w-40 p-2 bg-[#3b2a17] border border-[#c9a24d] rounded-md
                       text-[#e3d3a1] text-xs leading-snug shadow-lg font-['Cinzel']"
          >
            {description}
          </div>,
          document.body
        )}
    </div>
  );
}
