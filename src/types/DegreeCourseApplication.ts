export interface DegreeCourseApplication {
    id?: string;
    applicantUserID: string;
    degreeCourseID: string;
    targetPeriodYear: number;
    targetPeriodShortName: "SoSe" | "WiSe";
    universityShortName?: string;
    degreeCourseShortName?: string;
    degreeCourse?: {
        name: string;
        universityShortName: string;
    };
}

export interface DegreeCourseApplicationCreateDTO {
    degreeCourseID: string;
    targetPeriodYear: number;
    targetPeriodShortName: "SoSe" | "WiSe";
}

export interface DegreeCourseApplicationUpdateDTO {
    targetPeriodYear?: number;
    targetPeriodShortName?: "SoSe" | "WiSe";
}
