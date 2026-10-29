export interface Student {
    id: number,
    firstName: string,
    lastName: string,
    grade: number,
    average: number
}

// Required students:
// - at least eight students
// - at least one in each grade (9, 10, 11, 12)
// - at least two in grade 12
// - at least two with an average of 80 or more
export const students: Student[] = [
    {
        id: 1,
        firstName: "Robert",
        lastName: "'); DROP TABLE Students;--",
        grade: 9,
        average: 80
    },
    {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        grade: 9,
        average: 85
    },
    {
        id: 3,
        firstName: "Miku",
        lastName: "Hatsune",
        grade: 10,
        average: 55
    },
    {
        id: 4,
        firstName: "Spamton",
        lastName: "[BIG SHOT]",
        grade: 10,
        average: 35
    },
    {
        id: 5,
        firstName: "Roaring",
        lastName: "Knight",
        grade: 11,
        average: 75
    },
    {
        id: 6,
        firstName: "Freddy",
        lastName: "Fazbear",
        grade: 11,
        average: 99
    },
    {
        id: 7,
        firstName: "Flowery",
        lastName: "Jarona",
        grade: 12,
        average: 50
    },
    {
        id: 8,
        firstName: "Frank",
        lastName: "Frank",
        grade: 12,
        average: 9
    }
]