export default function CancellationRefundPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#070715] via-[#0F0B2F] to-[#070715] text-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-8">
          Cancellation & Refund Policy
        </h1>

        <p className="text-gray-300 leading-8 mb-12">
          Effective Date: January 1, 2026
        </p>

        <div className="space-y-10">

          <section>
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              1. Our Fair Meal Promise
            </h2>

            <p className="text-gray-300 leading-8">
              At Tifzy, our commitment is simple:
              if you purchase a meal package, you receive every meal included
              in that package according to our approved meal management policy.
              We believe in complete fairness and transparency for every user.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              2. Meal Cancellation
            </h2>

            <p className="text-gray-300 leading-8">
              Users can cancel individual meals directly from the Tifzy app
              before the daily cutoff time.
            </p>

            <ul className="list-disc pl-6 mt-4 text-gray-300 space-y-2">
              <li>Lunch cancellation must be completed before the lunch cutoff.</li>
              <li>Dinner cancellation must be completed before the dinner cutoff.</li>
              <li>Cancellation requests are subject to approval according to package rules.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              3. Meal Extension Policy
            </h2>

            <p className="text-gray-300 leading-8">
              Approved meal cancellations are not refunded in cash.
              Instead, eligible meals are added after the package maturity date
              as meal extensions according to the Fair Meal Promise.
            </p>

            <p className="text-gray-300 leading-6 mt-4">
              This ensures that users receive every meal they have paid for,
              wherever applicable under our package rules.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              4. Package Cancellation
            </h2>

            <p className="text-gray-300 leading-8">
              Once a meal package has been activated, it generally cannot be
              cancelled because meal planning, kitchen preparation and delivery
              scheduling begin immediately.
            </p>

            <p className="text-gray-300 leading-6 mt-4">
              Exceptional cases may be reviewed at the sole discretion of
              Tifzy's support team.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              5. Refund Policy
            </h2>

            <ul className="list-disc pl-6 text-gray-300 space-y-3">
              <li>No refund for meals already delivered.</li>
              <li>No refund for meals prepared before cancellation.</li>
              <li>No refund for missed meals due to user unavailability.</li>
              <li>No refund for cancellations made after the daily cutoff time.</li>
              <li>Approved package refunds, if any, will be processed according to applicable laws and payment gateway policies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              6. Payment Refund Timeline
            </h2>

            <p className="text-gray-300 leading-8">
              If Tifzy approves a monetary refund in exceptional circumstances,
              the refund will be initiated through the original payment method.
            </p>

            <p className="text-gray-300 leading-6 mt-4">
              Depending on your bank or payment provider, the amount may take
              approximately 5–10 business days to reflect in your account.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              7. Failed Payments
            </h2>

            <p className="text-gray-300 leading-8">
              If a payment fails but the amount is deducted, it is generally
              reversed automatically by the payment gateway or your bank.
              Please allow the standard banking processing time before contacting support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-violet-400 mb-4">
              8. Contact Us
            </h2>

            <p className="text-gray-300 leading-8">
              For cancellation or refund related queries, please contact:
            </p>

            <div className="mt-4 rounded-2xl border border-violet-500/20 bg-white/5 backdrop-blur-md p-6">
              <p>Email: support@tifzy.in</p>
              <p>Phone: +91 XXXXXXXXXX</p>
              <p>Location: Nagpur, Maharashtra, India</p>
            </div>

          </section>

        </div>

      </div>
    </main>
  );
}