import { useState } from 'react';

export default function PaymentDemo() {
  const [paid, setPaid] = useState(false);
  return (
    <div className="bg-white/80 rounded-xl shadow-lg p-6 flex flex-col gap-2 items-center">
      <h3 className="font-semibold text-lg mb-2">Fee Payment Demo</h3>
      <div className="text-sm mb-2">Amount Due: ₹10,000</div>
      <button
        className={`px-4 py-2 rounded ${paid ? 'bg-green-600 text-white' : 'bg-blue-600 text-white'}`}
        onClick={() => setPaid(true)}
        disabled={paid}
      >
        {paid ? 'Paid' : 'Pay Now'}
      </button>
      {paid && <div className="text-green-600 mt-2">Payment successful! (mock)</div>}
    </div>
  );
}
