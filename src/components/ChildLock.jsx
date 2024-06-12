import { useState } from "react";

function ChildLock({ isChildLockOn }) {
  const [isOn, setIsOn] = useState(isChildLockOn);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div style={{ display: "flex" }}>
      <span style={{ fontSize: "25px", tabSize: "5px" }}>
        Child Lock {"        "}
      </span>
      <span
        className={`circular-switch ${isOn ? "on" : "off"}`}
        onClick={toggleSwitch}
      >
        <span className="knob" />
      </span>
    </div>
  );
}

export default ChildLock;
