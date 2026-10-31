// StudentCard.tsx
// Created by Kenzie Monaghan on Oct 27th 2026
// Takes a student that uses the Student interface, and and an onRemove arrow function.
// The student's info is used to fill in the details of the card, allowing it to constantly display a full name a grade.
// In the case a user presses the "Show details" button on the card, the student's average will be displayed, along with an honour roll badge if their average is at or above 80.
// The onRemove arrow function is used by the "Remove Student" button so that when it is clicked, the arrow function can be given the student's id which will be used by code in StudentPortal to remove the student from the list of students.
// The returned compnent is a single card filled with a student's info, a button to show/hide more details, and a button to remove this student.

"use client"
import { useState } from "react";
import {Student} from "@/app/data/students";

interface StudentCardProps {
    student: Student,
    onRemove: (
        id: number
    ) => void
};

// {student}: {student: Student}
const StudentCard = ({student, onRemove}: StudentCardProps) => {
    
    const [detailsShown, setDetailsShown] = useState(false);
    
    const detailVisabilityLabel = detailsShown ? "Hide details" : "Show details";
    const detailVisabilityToggle = detailsShown ? "" :"hidden";
    const honourRollVisabilityToggle = (student.average < 80) ? "hidden" : "";

    const handleDetailVisability = () => {
        setDetailsShown(!detailsShown);
    };

    const handleClick = () => {
        onRemove(student.id);
    };

    return (
        <li className=" w-full p-3 my-2 text-base text-black bg-blue-50">
            <div className="flex items-center justify-between flex-wrap mb-2">
                <h1 className="me-3 text-lg">
                    {student.firstName}, {student.lastName}
                </h1>
                <p className="text-sm">
                    Grade {student.grade}
                </p>
            </div>
            <div className={detailVisabilityToggle}>
                <p className="text-sm">
                    Average: {student.average}%
                </p>
                <div className={honourRollVisabilityToggle}>
                    <p>
                        [Honour roll badge]
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-between mt-2">
                <button 
                    onClick={handleDetailVisability}
                    className="w-32 h-8 rounded-lg bg-gray-200 hover:underline hover:bg-gray-300 transition cursor-pointer"
                >
                    {detailVisabilityLabel}
                </button>
                <button 
                    onClick={handleClick}
                    className="w-35 h-8 rounded-lg text-white bg-rose-500 hover:underline hover:bg-rose-700"
                >
                    Remove Student
                </button>
            </div>
        </li>
    );
};

export default StudentCard;