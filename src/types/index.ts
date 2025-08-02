// types/index.ts

export interface Transaction{
    type: 'donation' | 'expense';
    description: string;
    amount: number;
    category: string;
    date: string;
}

export interface FormField {
    name: string;
    type: 'text' | 'number' | 'select';
    label: string;
    placeholder?: string;
    options?: Array<{ value: string; label: string }>;
}

export interface CardProps {
    title: string;
    icon: string;
    type: 'donation' | 'expense';
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    buttonText: string;
    fields: FormField[];
    formData: Record<string, string>;
    setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}

export interface SummaryProps {
    totalDonations:number;
    totalExpenses: number;
    netAmount: number;
}

export interface TransactionsProps {
    transactions: Transaction[]
}