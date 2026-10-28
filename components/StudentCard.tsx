// StudentCard.tsx
// Created by Kenzie Monaghan on Oct 27th 2026
// rough draft, completely lacks responsiveness, functionality is the only thing complete

import {Student} from "@/app/data/students";

const StudentCard = (student: Student) => {
    // boolean for testing toggle
    let isDetailsHidden:boolean = true;
    isDetailsHidden = false;

    // handler for show detail toggle

    return (
        <li className="w-full">
            <h1>{student.firstName} {student.lastName}</h1>
            <p>Grade: {student.grade}</p>
            <div className={isDetailsHidden ? "hidden" : ""}>
                <p>Average: {student.average}</p>
                <p className={(student.average < 80) ? "hidden" : ""}>[Honour roll badge]</p>
            </div>
            <div className="flex flex-row justify-between">
                <button className="bg-gray-200">
                    {isDetailsHidden ? "Show details" : "Hide details"}
                </button>
                <button className="bg-gray-200">
                    Remove
                </button>
            </div>
        </li>
    );
};

export default StudentCard;