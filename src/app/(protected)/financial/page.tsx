'use client'
import { useState , useEffect } from 'react';
import { Card } from '@/components/financial/Card';
import { Summary } from '@/components/financial/Summary';
import { Transactions } from '@/components/financial/Transactions';
import { FloatingShapes } from '@/components/financial/FloatingShapes'
import { Transaction, FormField, SummaryProps } from '@/types';

const DonationDashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [donationForm, setDonationForm] = useState<Record<string, string>>({
        source_name: '',
        amount: '',
        category: '',
  });
  const [expenseForm, setExpenseForm] = useState<Record<string, string>>({
        description: '',
        amount: '',
        category: ''
  });
  const [donationButtonText, setDonationButtonText] = useState<string>('Record Donation');
  const [expenseButtonText, setExpenseButtonText] = useState<string>('Record Expense');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [summary, setSummary] = useState<SummaryProps | null >(null);


    useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(fetchData, 5000);

    async function fetchData() {
        try {
        const [summaryRes, transactionsRes] = await Promise.all([
            fetch('/api/summary'),
            fetch('/api/transaction'),
        ]);

        if (!summaryRes.ok || !transactionsRes.ok) {
            throw new Error('One or more request failed');
        }

        const summaryData = await summaryRes.json();
        const transactionData: Transaction[] = await transactionsRes.json();

        setSummary({
            totalDonations: summaryData.total_donations,
            totalExpenses: summaryData.total_expenses,
            netAmount: summaryData.net_amount,
        });
        setTransactions(transactionData);
        } catch (err) {  // renamed 'err' to '_err' to silence unused warning
        console.error('Error loading data:', err);
        setError('Failed to load data.');
        } finally {
        setLoading(false);
        }
    }

    fetchData();

    return () => clearInterval(interval);
    }, []);


    if (loading) return <div>Loading dashboard...</div>;
    if (error) return <div>{error}</div>;
    if (!summary) return <div>No summary data available.</div>;

  
    const handleDonationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setDonationButtonText('Processing...')

        try {
            const res = await fetch('/api/donation', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(donationForm),
            });

            const data = await res.json();

            if(res.ok){
                setDonationButtonText('✓ Added!');
                setTimeout(() => {

                    setDonationButtonText('Record Donation')
                }, 1000);

                
                donationForm.amount = ''
                donationForm.source_name = ''
                donationForm.category = ''


            } else {
                alert(data.error || 'Donation not recorded')
            }
        } catch(err) {
            alert(err)
            
        } 
    }


    const handleExpenseSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setExpenseButtonText('Processing...');

        try {
            const res = await fetch('/api/expense', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization' :`Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(expenseForm)
            })

            const data = await res.json();

            if(res.ok){
                setExpenseButtonText('✓ Added!')
                setTimeout(() => {
                    setExpenseButtonText('Recorded Expense')
                }, 1000);
                expenseForm.description = ''
                expenseForm.amount = ''
                expenseForm.category = ''
            } else {
                alert(data.error || 'Expense not recorded') 
            }
        } catch(err) {
            alert(err)
        }
    }









  // Form field configurations
  const donationFields: FormField[] = [
    {
      name: 'source_name',
      type: 'text',
      label: 'Donor Name',
      placeholder: 'Enter donor name'
    },
    {
      name: 'amount',
      type: 'number',
      label: 'Amount ($)',
      placeholder: '0.00'
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      options: [
        { value: 'General', label: 'General Fund' },
        { value: 'Education', label: 'Education' },
        { value: 'Healthcare', label: 'Healthcare' },
        { value: 'Environment', label: 'Environment' },
        { value: 'Community', label: 'Community' }
      ]
    }
  ];

  const expenseFields: FormField[] = [
    {
      name: 'description',
      type: 'text',
      label: 'Description',
      placeholder: 'Enter expense description'
    },
    {
      name: 'amount',
      type: 'number',
      label: 'Amount ($)',
      placeholder: '0.00'
    },
    {
      name: 'category',
      type: 'select',
      label: 'Category',
      options: [
        { value: 'Office', label: 'Office Supplies' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Travel', label: 'Travel' },
        { value: 'Equipment', label: 'Equipment' },
        { value: 'Utilities', label: 'Utilities' },
        { value: 'Other', label: 'Other' }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-25 bg-gradient-to-br from-red-600 to-red-800 p-5">

        {/* FLoating */}
      <FloatingShapes />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 text-white">
          <h1 className="text-5xl font-bold mb-3 drop-shadow-lg">Financial Dashboard</h1>
          <p className="text-xl opacity-90">Track your donations and manage expenses effortlessly</p>
        </div>

        {/* Summary Component */}
        <Summary 
            {...summary}
        />

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <Card
            title="Add Donation"
            icon="💝"
            type="donation"
            onSubmit={handleDonationSubmit}
            buttonText={donationButtonText}
            fields={donationFields}
            formData={donationForm}
            setFormData={setDonationForm}
          />

          <Card
            title="Add Expense"
            icon="💳"
            type="expense"
            onSubmit={handleExpenseSubmit}
            buttonText={expenseButtonText}
            fields={expenseFields}
            formData={expenseForm}
            setFormData={setExpenseForm}
          />
        </div>

        {/* Transactions Component */}
        <Transactions transactions={transactions} />
      </div>
    </div>
  );
};

export default DonationDashboard;