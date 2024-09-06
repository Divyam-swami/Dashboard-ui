import { DataTable } from '@/components/DataTable';
import PageTitle from '@/components/pagetitle';
import { ColumnDef } from '@tanstack/react-table';
import React from 'react';

type Payment = {
  name: string;
  email: string;
  lastorder: string;
  method: string;
};

const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'lastorder',
    header: 'Last Order',
  },
  {
    accessorKey: 'method',
    header: 'Method',
  },
];

const data: Payment[] = [
  { name: "Anjali Patel", email: "anjali.patel@example.com", lastorder: "2023-02-15", method: "PayPal" },
  { name: "Rajesh Singh", email: "rajesh.singh@example.com", lastorder: "2023-05-10", method: "Credit Card" },
  { name: "Priya Sharma", email: "priya.sharma@example.com", lastorder: "2023-07-22", method: "Bank Transfer" },
  { name: "Vikram Rao", email: "vikram.rao@example.com", lastorder: "2023-01-30", method: "Debit Card" },
  { name: "Sita Devi", email: "sita.devi@example.com", lastorder: "2023-03-05", method: "PayPal" },
  { name: "Amit Kumar", email: "amit.kumar@example.com", lastorder: "2023-08-12", method: "Credit Card" },
  { name: "Rani Mehta", email: "rani.mehta@example.com", lastorder: "2023-06-18", method: "Bank Transfer" },
  { name: "Sunil Joshi", email: "sunil.joshi@example.com", lastorder: "2023-09-25", method: "Debit Card" },
  { name: "Neha Gupta", email: "neha.gupta@example.com", lastorder: "2023-04-10", method: "PayPal" },
  { name: "Arun Verma", email: "arun.verma@example.com", lastorder: "2023-10-02", method: "Credit Card" },
  { name: "Meera Rao", email: "meera.rao@example.com", lastorder: "2023-11-15", method: "Bank Transfer" },
  { name: "Gaurav Sharma", email: "gaurav.sharma@example.com", lastorder: "2023-12-20", method: "Debit Card" },
  { name: "Kavita Singh", email: "kavita.singh@example.com", lastorder: "2023-01-25", method: "PayPal" },
  { name: "Deepak Kumar", email: "deepak.kumar@example.com", lastorder: "2023-03-30", method: "Credit Card" },
  { name: "Ritika Joshi", email: "ritika.joshi@example.com", lastorder: "2023-06-05", method: "Bank Transfer" },
  { name: "Ramesh Verma", email: "ramesh.verma@example.com", lastorder: "2023-07-15", method: "Debit Card" },
  { name: "Sonal Mehta", email: "sonal.mehta@example.com", lastorder: "2023-08-20", method: "PayPal" },
  { name: "Pankaj Gupta", email: "pankaj.gupta@example.com", lastorder: "2023-09-30", method: "Credit Card" },
  { name: "Nisha Patel", email: "nisha.patel@example.com", lastorder: "2023-10-10", method: "Bank Transfer" },
  { name: "Kiran Sharma", email: "kiran.sharma@example.com", lastorder: "2023-11-05", method: "Debit Card" },
  { name: "Ravi Kumar", email: "ravi.kumar@example.com", lastorder: "2023-12-01", method: "PayPal" },
];

const UserPage = () => {
  return (
    <div className='flex flex-col gap-5 w-full'>
      <PageTitle title='User'/>
      <DataTable columns={columns} data={data}/>
    </div>
  );
};

export default UserPage;
