// AddStudent.tsx
// Created by Kenzie Monaghan on Oct 27th 2026
// exists as a place holder for now

"use client";
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
        <div className="flex flex-col items-center w-full p-3 text-base text-black bg-blue-100">
            <div className="flex flex-row flex-wrap">
                <div className="flex flex-col mx-1">
                    <label>First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={handleFirstNameChange}
                        placeholder=""
                        className="w-30 px-1 text-sm border-2 rounded-lg bg-white border-slate-300 focus:border-blue-300 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col mx-1">
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={handleLastNameChange}
                        placeholder=""
                        className="w-30 px-1 text-sm border-2 rounded-lg bg-white border-slate-300 focus:border-blue-300 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col mx-1">
                    <label>Grade</label>
                    <input
                        type="number"
                        value={grade}
                        onChange={handleGradeChange}
                        placeholder=""
                        className="w-15 px-1 text-sm border-2 rounded-lg bg-white border-slate-300 focus:border-blue-300 focus:outline-none"
                    />
                </div>
                <div className="flex flex-col mx-1">
                    <label>Average</label>
                    <input
                        type="number"   
                        value={average}
                        onChange={handleAverageChange}
                        placeholder=""
                        className="w-15 px-1 text-sm border-2 rounded-lg bg-white border-slate-300 focus:border-blue-300 focus:outline-none"
                    />
                </div>
            </div>
            <button
                onClick={handleClick}
                className="w-30 h-8 mt-5 text-base rounded-lg text-white bg-blue-400 hover:underline hover:bg-blue-600 transition cursor-pointer"
            >
                Add Student
            </button>
        </div>
    );
};

export default AddStudent;