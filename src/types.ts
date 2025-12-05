// src/types.ts

// 作品データの型定義
export interface WorkLinks {
    github?: string;
    youtube?: string;
}

export interface WorkDetails {
    overview: string;
    devPeriod: string;
    teamSize: string;
    techStack: string;
    role: string;
    techPoints: string[];
    commitment: string[];
}

export interface Work {
    id: string;
    title: string;
    summary: string;
    images: string[];
    video: string | null;
    links: WorkLinks;
    details: WorkDetails;
}

// スキルデータの型定義
export interface Skill {
    name: string;
    icon: string;
}

// 経験データの型定義
export interface Experience {
    date: string;
    title: string;
    desc: string;
}