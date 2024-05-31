import "./App.css";
import Section from "./components/Section";
import { useState } from "react";
import Info from "./components/Info";
import { currentDate } from "./utils/date";

function App() {
  const [bioEditMode, setBioEditMode] = useState(false);
  const [eduEditMode, setEduEditMode] = useState(false);
  return (
    <div>
      <Section
        name="General Information"
        toggleEditMode={() => setBioEditMode(!bioEditMode)}
      >
        <Info name="Name" value={"Foo Bar"} editMode={bioEditMode} />
        <Info
          name="Email ID"
          value={"foo@bar.com"}
          type="email"
          editMode={bioEditMode}
        />
        <Info
          name="Phone No."
          value={9999999999}
          type="tel"
          editMode={bioEditMode}
        />
      </Section>
      <Section
        name="Education"
        toggleEditMode={() => setEduEditMode(!eduEditMode)}
      >
        <Info name="School" value={"Foo Bar Baz"} editMode={eduEditMode} />
        <Info name="Course" value={"BSc. Quz"} editMode={eduEditMode} />
        <Info
          name="Date"
          value={currentDate()}
          type="date"
          editMode={eduEditMode}
        />
      </Section>
    </div>
  );
}

export default App;
