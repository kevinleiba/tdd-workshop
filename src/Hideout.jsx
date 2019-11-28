import React, { useState } from "react";

import { toMaj, addExclamation } from "./utils";

export default function Hideout({ btnMessage, hiddenMessage }) {
  const [canDisplay, setCanDisplay] = useState(false);

  const formattedMessage = toMaj(addExclamation(hiddenMessage));
  return (
    <div>
      <button
        onClick={() => {
          setCanDisplay(true);
        }}
      >
        {btnMessage}
      </button>
      {canDisplay && formattedMessage}
    </div>
  );
}
