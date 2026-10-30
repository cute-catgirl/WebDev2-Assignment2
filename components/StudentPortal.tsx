/*  
StudentPortal.tsx
Mae Moon
27 Oct 2026
*/
"use client"
import { ChangeEvent, useState } from "react";
import { students as defaultStudents, Student } from "../app/data/students";
import SearchBox from "./SearchBox";
import StudentList from "./StudentList";

export default function StudentPortal() {
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
    const [students, setStudents] = useState(defaultStudents);
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <section id="overview">
                <h2 className="text-2xl font-semibold">Overview</h2>
                {/* <StatsPanel students={students}/> */}
            </section>
            <section id="students">
                <h2 className="text-2xl font-semibold">Students</h2>
                <SearchBox searchQuery={searchQuery} onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    setSearchQuery(event.target.value)
                }} />
                <StudentList students={filteredStudents()} />
            </section>
            <section id="addstudent">
                <h2 className="text-2xl font-semibold">Add student</h2>
                {/* <AddStudent onAdd={addStudent} onRemove={removeStudent} /> */}
            </section>
        </div>
    )
}