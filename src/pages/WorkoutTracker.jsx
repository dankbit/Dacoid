import React from "react";
import { Switch } from "@material-tailwind/react";
import { Link } from "react-router-dom";

function WorkoutTracker() {
  return (
    <div>
      <div className="h-screen w-[100%] bg-white p-6">
        <div>
            <Link to="/goals">
        <img src="https://i.ibb.co/MPvDmFy/chevron-left.png" class="absolute top-7 left-2" />
            </Link>

          <h1 className="text-center text-2xl py-6 font-bold">
            Workout Tracker
          </h1>
          <img
            src="https://i.ibb.co/sqXVjqw/Screenshot-2024-04-13-233741.png"
            alt=""
          />
        </div>
        <div className="flex flex-col pt-20">
          <div className="flex justify-between">
            <h1 className="text-lg font-bold">Upcoming Workout</h1>
            <Link to="/schedule">
            <p className="text-gray-600 underline">See more</p>
            </Link>
          </div>
          <div className="card flex px-3 justify-between bg-white shadow-md rounded-xl py-4">
            <div className="flex">
              <img
                src="https://i.ibb.co/jMyYKg3/Ellipse-54.png"
                className="rounded-full"
              />
              <div className="flex flex-col pl-4">
                <h1 className="text-lg">Full Body Workout</h1>
                <p className="text-sm text-gray-600">Today 3pm</p>
              </div>
            </div>
            <Switch color="blue" />
          </div>
        </div>
        <div className="flex flex-col pt-4">
          <div className="card flex px-3 justify-between bg-white shadow-md rounded-xl py-4">
            <div className="flex">
              <img
                src="https://i.ibb.co/3RP8wn1/Ellipse-53.png"
                className="rounded-full"
              />
              <div className="flex flex-col pl-4">
                <h1 className="text-lg">Upper Body Workout</h1>
                <p className="text-sm text-gray-600">4 Feb 3pm</p>
              </div>
            </div>
            <Switch color="blue" defaultChecked />
          </div>
        </div>

      <div className="flex justify-between flex-col">
            <h1 className="text-lg font-bold pb-2 pt-10">What do you want to Train</h1>
            <div className="blueCard rounded-xl btn-2 flex py-4 px-5 justify-between">
                <div className="flex flex-col">
                    <p className="text-base">Full Body Workout</p>
                    <p className="text-sm">Arms</p>
                    <p className="text-sm">Biceps</p>
                    <p className="text-sm">Chest</p>
                    <p className="text-sm">Legs</p>
                </div>
                <img src="https://i.ibb.co/wYsJ7Jk/Ellipse-55.png" className="rounded-full" />
            </div>
          </div>
          </div>



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

export default WorkoutTracker;
