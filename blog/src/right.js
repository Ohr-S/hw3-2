import React from "react";
import Rectangle from "./rectangle";

function RightColumn() {
  return (
    <div className="right-column">
      <Rectangle title="Soul" description="The name of my dog :)" />
      <Rectangle title="Dance" description="My best hobby" />
    </div>
  );
}
export default RightColumn;