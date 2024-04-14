import React from "react";
import { Link } from "react-router-dom";

function WorkoutSchedule() {
  return (
    <div className="h-screen w-[100%] bg-white">
        <Link to="/tracker">
        <img src="https://i.ibb.co/MPvDmFy/chevron-left.png" class="absolute top-7 left-2" />
        </Link>
      <h1 className="text-center text-2xl py-6 font-bold">Workout Schedule</h1>

      <img
        src="https://i.ibb.co/vksBX03/Screenshot-2024-04-14-003058.png"
        className="w-[100%]"
      />
      <div className="footer fixed w-[100%] bottom-0">
        <img
          src="https://i.ibb.co/1nG9qq6/Group-1.png"
          className="absolute left-[50%] translate-x-[-50%] -top-7"
        />
        <img
          src="https://i.ibb.co/FhCBsxw/Group-5.png"
          className="w-[100%] px-10 py-5 bg-white"
        />
      </div>
    </div>
  );
}

export default WorkoutSchedule;
