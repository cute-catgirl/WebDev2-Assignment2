/*  
StudentPortal.tsx
Mae Moon
27 Oct 2026
*/
"use client"
import { ChangeEvent, useState } from "react";
import { students as defaultStudents } from "../data/students";
import SearchBox from "./SearchBox";

export default function StudentPortal() {
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
                {/* <StudentList students={students} /> */}
            </section>
            <section id="addstudent">
                <h2 className="text-2xl font-semibold">Add student</h2>
                {/* <AddStudent onAdd={addStudent} onRemove={removeStudent} /> */}
            </section>
        </div>
    )
}