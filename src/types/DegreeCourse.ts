export interface DegreeCourse {
    id: string;
    universityName: string;
    universityShortName: string;
    departmentName: string;
    departmentShortName: string;
    name: string;
    shortName: string;
}

export interface DegreeCourseApplication {
    id: string;
    applicantUserID: string;
    degreeCourseID: string;
    targetPeriodYear: number;
    targetPeriodShortName: string;
}
