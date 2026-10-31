/*
StatsPanel.tsx
Mae Moon
30 Oct 2026
Displays the total number of students, the number of honour roll students, and the number of grade 12 students,
with each statistic in a card containing a big number above a small description. Takes in the list of students,
and calculates the statistics based on it. Since students is in state, this will automatically update when it changes.
*/

import { Student } from "@/app/data/students";

// Displays a single statistic, based on an amount and a description
function Statistic({amount, description}: {amount: number, description: string}) {
    return (
        <div className="flex flex-1 flex-col items-center justify-center bg-gray-100 rounded-2xl py-2">
            <p className="font-bold text-3xl">{amount}</p>
            <p>{description}</p>
        </div>
    )
}

export default function StatsPanel({students}: {students: Student[]}) {
    return (
        <div>
            <div className="flex justify-evenly gap-4">
                <Statistic amount={students.length} description={"Total Students"} />
                <Statistic amount={students.filter((student) => student.average >= 80).length} description={"Honour Roll Students"} />
                <Statistic amount={students.filter((student) => student.grade == 12).length} description={"Grade 12 Students"} />
            </div>
        </div>
    )
}