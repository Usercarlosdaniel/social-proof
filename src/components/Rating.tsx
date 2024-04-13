import star from "../../public/images/icon-star.svg";

export function Rating() {
  return (
    <div className="flex w-[50%] flex-col gap-4 self-center md:w-[25rem] md:items-center">
      <div className="mr-auto flex items-center justify-center gap-6 rounded-lg bg-magenta-light-grayish px-8 py-4 md:m-0 md:w-full md:flex-col md:gap-2">
        <div className="flex gap-1">
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
        </div>
        <p className="font-bold text-magenta-very-dark ">
          Rated 5 Stars in Reviews
        </p>
      </div>
      <div className="mx-auto flex items-center justify-center gap-6 rounded-lg bg-magenta-light-grayish px-8 py-4 md:m-0 md:w-full md:flex-col md:gap-2">
        <div className="flex gap-1">
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
        </div>
        <p className="font-bold text-magenta-very-dark ">
          Rated 5 Stars in Report Guru
        </p>
      </div>
      <div className="ml-auto flex items-center justify-center gap-6 rounded-lg bg-magenta-light-grayish px-8 py-4 md:m-0 md:w-full md:flex-col md:gap-2">
        <div className="flex gap-1">
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
          <img src={star} alt="star icons" className="size-4" />
        </div>
        <p className="font-bold text-magenta-very-dark ">
          Rated 5 Stars in BestTech
        </p>
      </div>
    </div>
  );
}
