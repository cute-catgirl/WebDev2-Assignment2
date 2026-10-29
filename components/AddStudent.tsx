// AddStudent.tsx
// Created by Kenzie Monaghan on Oct 27th 2026
// exists as a place holder for now

"use client";
import { Average } from "next/font/google";
import {useState} from "react";

interface AddStudentProps {
    onAdd: (
        firstName: string, 
        lastName: string, 
        grade: number, 
        average: number
    ) => void;
};

const AddStudent = ({ onAdd }: AddStudentProps) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [grade, setGrade] = useState("9");
    const [average, setAverage] = useState("70");

    const handleFirstNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setLastName(event.target.value);
    };
    const handleGradeChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setGrade(event.target.value);
    };
    const handleAverageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        
        setAverage(event.target.value);
    };
    
    const handleClick = () => {
        if (firstName === "" || lastName === "") {
            return;
        }
        onAdd(
            firstName, 
            lastName, 
            Number(grade), 
            Number(average)
        );
        setFirstName("");
        setLastName("");
        setGrade("9");
        setAverage("70");
    };

    return (
        <div>
            <p>Add A student</p>
            
            <input
                type="text"
                value={firstName}
                onChange={handleFirstNameChange}
                placeholder="first name"
                className="w-40"
            />
            <input
                type="text"
                value={lastName}
                onChange={handleLastNameChange}
                placeholder="last name"
                className="w-40"
            />
            <input
                type="number"
                value={grade}
                onChange={handleGradeChange}
                placeholder="grade"
                className="w-10"
            />
            <input
                type="number"
                value={average}
                onChange={handleAverageChange}
                placeholder="average"
                className="w-15"
            />
            <button
                onClick={handleClick}
                className="w-40"
            >
                Add Student
            </button>
        </div>
    );
};

export default AddStudent;