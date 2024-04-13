import { Rating } from "./Rating";

export function Header() {
  return (
    <header className="mb-16 flex md:flex-col md:items-center md:text-center">
      <div className="w-[50%] md:flex md:w-full md:flex-col md:items-center">
        <h1 className="mb-8 w-[13ch] text-5xl font-bold text-magenta-very-dark md:mb-4 md:text-[2rem]">
          10,000+ of our users love our products.
        </h1>
        <p className="w-[47ch] font-medium text-magenta-dark-grayish md:mb-8 md:w-[32ch] md:text-[.9375rem]">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <Rating />
    </header>
  );
}
