// Bu dosya, uygulama genelinde kullanılacak tipleri ve arayüzleri tanımlar.

export interface Patient {
    id: string;
    name: string;
    age: number;
    gender: 'male' | 'female' | 'other';
    medicalHistory: string[];
}

export interface Setting {
    theme: 'light' | 'dark';
    notificationsEnabled: boolean;
}

export interface MetroCardProps {
    title: string;
    content: string;
    onClick?: () => void;
}

export interface GridProps {
    children: React.ReactNode;
}