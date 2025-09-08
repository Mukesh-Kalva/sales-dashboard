"use client";

type Props = {
  title: string;
  value: string | number;
};

export default function RevenueCard({ title, value }: Props) {
  return (
    <div className="rounded-2xl shadow-md bg-white p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold mt-2">{value}</p>
    </div>
  );
}
