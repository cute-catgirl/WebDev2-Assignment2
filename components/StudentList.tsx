// StudentList.tsx
// Created by Kenzie Monaghan on Oct 27th 2026
// Takes in a list of students that use the Student interface, and an onRemove arrow function.
// The list of students is used to create a StudentCard for each student, giving it all the data that is stored for that student.
// The arrow function onRemove is passed down to each StudentCard so their "Remove Student" button can use it.
// The returned commponent ends up being a simple column of StudentCard elements

import StudentCard from "@/components/StudentCard";
import {Student} from "@/app/data/students";

interface StudentListProps {
    students: Student[],
    onRemove: (
        id: number
    ) => void,
};

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