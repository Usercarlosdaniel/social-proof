import Colton from "../../public/images/image-colton.jpg";
import Irene from "../../public/images/image-irene.jpg";
import Anne from "../../public/images/image-anne.jpg";

export function Review() {
  return (
    <div className="flex gap-4 md:flex-col md:items-center">
      <blockquote className="h-full max-w-[25rem] rounded-lg bg-magenta-very-dark p-8 text-white">
        <div className="mb-4 flex gap-8">
          <img src={Colton} alt="" className="size-12 rounded-full" />
          <div>
            <p className="font-bold ">Colton Smith </p>
            <p className="font-medium text-pink-soft">Verified Buyer</p>
          </div>
        </div>
        <p>
          " We needed the same printed design as the one we had ordered a week
          prior. Not only did they find the original order, but we also received
          it in time. Excellent! "
        </p>
      </blockquote>
      <blockquote className="h-full max-w-[25rem] translate-y-4 rounded-lg bg-magenta-very-dark p-8 text-white">
        <div className="mb-4 flex gap-8">
          <img src={Irene} alt="" className="size-12 rounded-full" />
          <div>
            <p className="font-bold ">Irene Roberts </p>
            <p className="font-medium text-pink-soft">Verified Buyer</p>
          </div>
        </div>
        <p>
          " Customer service is always excellent and very quick turn around.
          Completely delighted with the simplicity of the purchase and the speed
          of delivery. "
        </p>
      </blockquote>
      <blockquote className="h-full max-w-[25rem] translate-y-8 rounded-lg bg-magenta-very-dark p-8 text-white">
        <div className="mb-4 flex gap-8">
          <img src={Anne} alt="" className="size-12 rounded-full" />
          <div>
            <p className="font-bold ">Anne Wallace </p>
            <p className="font-medium text-pink-soft">Verified Buyer</p>
          </div>
        </div>
        <p>
          " Put an order with this company and can only praise them for the very
          high standard. Will definitely use them again and recommend them to
          everyone! "
        </p>
      </blockquote>
    </div>
  );
}
