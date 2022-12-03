export interface RawAbsence {
    id: number;
    startDate: string;
    endDate: string;
    name: string;
}

export interface Absence {
    id: number;
    startDate: Date;
    endDate: Date;
    name: string;
}

export type NewAbsence = Omit<Absence, 'id'>;
