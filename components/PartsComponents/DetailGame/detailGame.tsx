// Import Library
import React from "react";

// type DetailGameProps = {
//   data: {
//     gameName: string;
//     coverGames: string;
//     category: {
//       name: string;
//     };
//   };
// };

export default function DetailGameItem({ data }: any) {
  // API Image
  const API_IMAGE = process.env.NEXT_PUBLIC_API_IMAGE;
  // console.log(data);
  return (
    <div className="col-xl-9 col-lg-8 col-md-7 ps-md-25">
      <div className="col-xl-3 col-lg-4 col-md-5 pb-30 pb-md-0 pe-md-25 text-md-start">
        <div className="row align-items-center">
          <div className="col-md-12 col-4">
            <img src={`${API_IMAGE}/cover-games/${data.coverGames}`} width="280" height="380" className="img-fluid" alt="cover-game" />
          </div>
          {/* Mobile: Game title */}
          <div className="col-md-12 col-8 d-md-none d-block">
            <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{data.gameName}</h2>
            {/* <p className="text-sm color-palette-2 text-start mb-0">Category: {data.category.name}</p> */}
          </div>
          {/* Desktop: Game title */}
          <div className="pb-50 pt-10 d-md-block d-none">
            <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">{data.gameName}</h2>
            {/* <p className="text-lg color-palette-2 mb-0">Category: {data.category.name}</p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
