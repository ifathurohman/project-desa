export type SDGStatus =
    | "Sangat Baik"
    | "Baik"
    | "Cukup"
    | "Perlu Perhatian"
    | "Sangat Perlu Perhatian";

export interface SDGGoal {
    id: number;
    title: string;
    icon: any;
    logo: string;
    color: string;
    score: number;
    status: SDGStatus;
    description: string;
    achievements: string[];
    challenges: string[];
}

export interface Target {
    kdind: string;
    deskripsi: string;
    yearable: number[];
    nilaiawal: string;
    volume: string;
    satuan: string;
    prakiraanbiaya: string;
    sumber: string;
    polapelaksanaan: string;
}

export interface Recommendation {
    no: string;
    name: string;
    score: string;
    recommendation: string;
    bnba: string;
    unit: string;
}

export interface SDGApiResponse {
    target?: Target[];
    header?: string[];
    recom?: Recommendation[];
}