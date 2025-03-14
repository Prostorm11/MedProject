import React from "react";
import Fieldbox from "../../Reusables/Fieldbox";
import "./breastCancer.css";

export default function Breastcancer() {
  const symptoms1 = [
    "radius1",
    "texture1",
    "perimeter1",
    "area1",
    "smoothness1",
    "compactness1",
    "concavity1",
    "concave_points1",
    "symmetry1",
    "fractal_dimension1",
    "radius2",
    "texture2",
    "perimeter2",
    "area2",
    "smoothness2",
  ];
  const symptoms2 = [
    "compactness2",
    "concavity2",
    "concave_points2",
    "symmetry2",
    "fractal_dimension2",
    "radius3",
    "texture3",
    "perimeter3",
    "area3",
    "smoothness3",
    "compactness3",
    "concavity3",
    "concave_points3",
    "symmetry3",
    "fractal_dimension3"
  ];
  return (
    <div className="maincancerboard">
      <div className="column">
        {symptoms1.map((item, index) => (
          <div>
            <p>{item}</p>
            <Fieldbox></Fieldbox>
          </div>
        ))}
      </div>
      <div className="column">
      {symptoms2.map((item, index) => (
          <div>
            <p>{item}</p>
            <Fieldbox></Fieldbox>
          </div>
        ))}
      </div>
    </div>
  );
}
