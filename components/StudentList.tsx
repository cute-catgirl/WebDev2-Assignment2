// StudentList.tsx
// Created by Kenzie Monaghan on Oct 27th 2026
// rough draft, does not take in a list of students and is not responsive

import StudentCard from "@/components/StudentCard";
import {Student} from "@/app/data/students";

const StudentList = () => {
    // placeholders for testing
    const studentA:Student = {
        id: 1,
        firstName: "John",
        lastName: "Doe",
        grade: 5,
        average: 82
    };
    const studentB:Student = {
        id: 2,
        firstName: "Jane",
        lastName: "Doe",
        grade: 8,
        average: 74
    };
    const studentList: Student[] = [studentA, studentB];

    return (
        <ul className="w-full">
            {studentList.map((student) => (
                // might be a better way to pass the student to StudentCard
                <StudentCard 
                    key={student.id}
                    id={student.id}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    grade={student.grade}
                    average={student.average}
                />
            ))}
        </ul>
    );
};

export default StudentList;