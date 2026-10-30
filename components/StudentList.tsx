// StudentList.tsx
// Created by Kenzie Monaghan on Oct 27th 2026
// rough draft, does not take in a list of students and is not responsive

import StudentCard from "@/components/StudentCard";
import AddStudent from "@/components/AddStudent";
import {Student} from "@/app/data/students";

interface StudentListProps {
    students: Student[],
    onAdd: (
        firstName: string, 
        lastName: string, 
        grade: number, 
        average: number
    ) => void
    onRemove: (
        id: number
    ) => void,
};

// {students}: {students: Student[]}
const StudentList = ({students, onAdd, onRemove}: StudentListProps) => {
    return (
        <div className="w-full">
            <AddStudent 
                onAdd={onAdd}
            />
            <ul>
                {students.map((student) => (
                    // might be a better way to pass the student to StudentCard
                    <StudentCard 
                        key={student.id}
                        student={student}
                        onRemove={onRemove}
                    />
                ))}
            </ul>
        </div>
    );
};

export default StudentList;