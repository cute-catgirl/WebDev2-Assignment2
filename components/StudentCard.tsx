// StudentCard.tsx
// Created by Kenzie Monaghan on Oct 27th 2026
// rough draft, completely lacks responsiveness, functionality is the only thing complete

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
    const visabilityToggle = detailsShown ? "" :"hidden";

    const handleDetailVisability = () => {
        setDetailsShown(!detailsShown);
    };

    const handleClick = () => {
        onRemove(student.id);
    };

    return (
        <li className="w-full">
            <h1>{student.firstName}, {student.lastName}</h1>
            <p>Grade: {student.grade}</p>
            <div className={visabilityToggle}>
                <p>Average: {student.average}</p>
                <p className={(student.average < 80) ? "hidden" : ""}>[Honour roll badge]</p>
            </div>
            <div className="flex flex-row justify-between">
                <button 
                    onClick={handleDetailVisability}
                    className="bg-gray-200"
                >
                    {detailVisabilityLabel}
                </button>
                <button 
                    onClick={handleClick}
                    className="bg-gray-200"
                >
                    Remove
                </button>
            </div>
        </li>
    );
};

export default StudentCard;