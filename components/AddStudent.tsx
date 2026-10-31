// AddStudent.tsx
// Created by Kenzie Monaghan on Oct 27th 2026
// Takes in an onAdd arrow function which has all values needed to create a new student except for an id, since StudentPortal is better to handle selecting an id.
// The onAdd arrow function is used by the "Add Student" button when it is clicked, which will allow this component to provide the values that code in StudentPortal needs to add a new student to the list.
// In the case the "Add Student" button gets pressed but one/both of the "First Name" and "Last Name" inputs are empty, onAdd will not be run.
// Otherwise, the onAdd arrow function is given the values inside of the "First Name", "Last Name", "Grade", and "Average" inputs in that order.
// Successfully adding a student will set "First Name"/"Last Name" inputs to be empty, "Grade" input to 9, and "Average" input to 70.
// The returned component has the 4 inputs to provide info for a new student, and a button to add the student.

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