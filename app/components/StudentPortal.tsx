/*  
StudentPortal.tsx
Mae Moon
27 Oct 2026
*/
import { useState } from "react";
import { students as defaultStudents } from "../data/students";

export default function StudentPortal() {
    const [students, setStudents] = useState(defaultStudents);
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <div>
            <section id="overview">
                <h2>Overview</h2>
                {/* <StatsPanel students={students}/> */}
            </section>
            <section id="students">
                <h2>Students</h2>
                {/* <StudentList students={students} /> */}
            </section>
            <section id="addstudent">
                <h2>Add student</h2>
                {/* <AddStudent onAdd={addStudent} onRemove={removeStudent} /> */}
            </section>
        </div>
    )
}