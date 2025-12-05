// src/types.ts

// 作品データの型定義
export interface WorkLinks {
    label?: string;
    url?: string;
    type: LinkType;
    note?: string;
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
    links: WorkLinks[];
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
    note?: string;
    url?: string;
    type?: LinkType;
}

// 1. リンクの種類の型定義
export type LinkType = 'github' | 'youtube' | 'notion' | 'other';