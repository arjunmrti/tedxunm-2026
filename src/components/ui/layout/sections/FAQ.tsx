import { faqData } from "../../../../constants/faq";

const FAQ = () => {
  return (
    <section
      aria-labelledby="faq-heading"
      className="py-24 px-4 sm:px-6 bg-[#F7F7F7] border-t border-gray-200"
      id="faq"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-3">
          <span className="text-xs uppercase tracking-widest text-neutral-500 font-semibold font-sans">
            Got Questions?
          </span>
        </div>
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-[#111111] text-center tracking-tight leading-tight mb-4"
          id="faq-heading"
        >
          Frequently
          <br />
          Asked Questions
        </h2>
        <p className="text-neutral-500 text-sm sm:text-base text-center max-w-lg mx-auto mb-12 font-sans">
          Need clarification on attendee guidelines, tickets, or schedule?
          We're here to support your journey.
        </p>

        <div className="flex flex-col gap-3 sm:gap-4">
          {faqData.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              className="group bg-[#EEEEEE] open:bg-white border border-transparent open:border-[#E5E5E5] open:shadow-sm rounded-2xl px-6 py-4 open:p-6 transition-all duration-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-semibold text-sm sm:text-base text-[#111111] font-sans">
                  {item.question}
                </span>

                {/* Plus icon (closed state) */}
                <span className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#E10600] text-lg font-medium leading-none shrink-0 group-open:hidden">
                  +
                </span>

                {/* Close icon (open state) */}
                <span className="w-8 h-8 rounded-full bg-white shadow-xs hidden group-open:flex items-center justify-center text-[#E10600] text-lg font-medium leading-none shrink-0">
                  ×
                </span>
              </summary>

              <div className="mt-3 pt-3 text-sm text-neutral-600 font-sans leading-relaxed border-t border-neutral-100">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center text-xs sm:text-sm text-neutral-500 font-sans">
          Still have unanswered questions? Contact our hospitality committee at{" "}
          <a
            href="mailto:tedxunm@gmail.com"
            className="text-neutral-800 font-medium hover:underline"
          >
            tedxunm@gmail.com
          </a>{" "}
          —{" "}
          <a
            href="mailto:tedxunm@gmail.com"
            className="text-[#E10600] font-semibold hover:underline inline-flex items-center gap-1 ml-1"
          >
            Send Email Inquiry →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;