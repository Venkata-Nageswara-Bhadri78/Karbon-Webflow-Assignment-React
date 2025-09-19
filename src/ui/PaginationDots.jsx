import React, { useState } from "react";

const PaginationDots = ({ total = 5 }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex gap-2 p-3 items-center">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => setActive(i)}
          className={`w-2 h-2 rounded-full transition ${
            active === i ? "bg-[#034D82] scale-110" : "bg-[#E2ECF4]"
          }`}
        />
      ))}
    </div>
  );
};

export default PaginationDots;
