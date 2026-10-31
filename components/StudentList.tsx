// StudentList.tsx
// Created by Kenzie Monaghan on Oct 27th 2026
// 

import StudentCard from "@/components/StudentCard";
import {Student} from "@/app/data/students";

interface StudentListProps {
    students: Student[],
    onRemove: (
        id: number
    ) => void,
};

// {students}: {students: Student[]}
const StudentList = ({students, onRemove}: StudentListProps) => {
    return (
        <div className="w-full">
            <ul>
                {students.map((student) => (
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