/*  
StudentPortal.tsx
Mae Moon
27 Oct 2026
Contains all the other components for the student portal and keeps track of state - the list of students,
and the current search query. Takes in no props since this acts as the main UI and state for our app.
*/
"use client"
import { ChangeEvent, useState } from "react";
import { students as defaultStudents, Student } from "../app/data/students";
import SearchBox from "./SearchBox";
import StudentList from "./StudentList";
import AddStudent from "./AddStudent";
import StatsPanel from "./StatsPanel";

export default function StudentPortal() {
    const [students, setStudents] = useState(defaultStudents);
    const [searchQuery, setSearchQuery] = useState('');

    const addStudent = (firstName: string, lastName: string, grade: number, average: number) => {
        const newStudent:Student = {id: Date.now(), firstName: firstName, lastName: lastName, grade: grade, average: average}
        setStudents([...students, newStudent])
    }

    function removeStudent(id: number) {
        setStudents(students.filter((student) => student.id !== id))
    }

    function clearAllStudents(){
        setStudents([])
    }
    function filteredStudents() {
        if (searchQuery) {
            const trimmedQuery = searchQuery.replaceAll(" ", "").toLowerCase();
            return students.filter((student) => {
                const firstName = student.firstName.replaceAll(" ", "").toLowerCase();
                const lastName = student.lastName.replaceAll(" ", "").toLowerCase();
                const fullName = firstName + lastName
                const fullNameReversed = lastName + firstName
                return fullName.includes(trimmedQuery) || fullNameReversed.includes(trimmedQuery);
            })
        } else {
            return students;
        }
    }
    
    return (
        <div>
            <section id="overview" className="scroll-m-16">
                <h2 className="text-2xl font-semibold">Overview</h2>
                <StatsPanel students={students}/>
            </section>
            <section id="students" className="scroll-m-16">
                <h2 className="text-2xl font-semibold">Students</h2>
                <SearchBox searchQuery={searchQuery} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setSearchQuery(event.target.value)
                }} />
                <button 
                    onClick={clearAllStudents}
                    className="w-20 h-6 mt-2 rounded-lg text-white bg-rose-500 hover:underline hover:bg-rose-700"
                >
                    Clear all
                </button>
                <StudentList students={filteredStudents()} onRemove={removeStudent} />
            </section>
            <section id="addstudent" className="scroll-m-16">
                <h2 className="text-2xl font-semibold">Add student</h2>
                <AddStudent onAdd={addStudent} />
            </section>
        </div>
    )
}