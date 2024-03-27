import React, { useState } from "react";
import Lesson from "../pages/Lesson";
import "./Lesson.css";
import { data } from "../../helper/data";

const LessonCard = () => {
  const [lesson, setLesson] = useState(data.length);
  const [lessonData, setLessonData] = useState(
    data.map((item, index) => ({ ...item, key: index }))
  );

  const clear = () => {
    setLessonData([]);
    setLesson(0);
  };

  return (
    <main>
      <div className="container">
        <h2>{lesson} lessons Today</h2>
        <Lesson lessonData={lessonData} />
        <button onClick={clear}>Clear List</button>
      </div>
    </main>
  );
};

export default LessonCard;
