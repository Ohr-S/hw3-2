import React from "react";
import Rectangle from "./rectangle";

function LeftColumn() {
  return (
    <div className="left-column">
      <Links />
      <Rectangle title="This is my life" description="If you want to know more about me, call me" />
      <Rectangle title="Peace" description="I believe in peace" />
      <Rectangle title="Heart" description="Love, Love and Love" />
    </div>
  );
}