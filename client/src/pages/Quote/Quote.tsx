import { useForm } from 'react-hook-form';
import "./quote.css";

const QuoteForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data: any) => console.log(data);

  // console.log(watch("name")); // watch input value by passing the name of it
  // console.log(watch("email")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="quote-form">

      <input {...register("name")} />
      {errors.name && <span>This field is required</span>}

      <input {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}

      <select {...register("requestedItem")}>
        <option value="basic">Basic</option>
        <option value="deluxe">Deluxe</option>
        <option value="membership">Membership</option>
      </select>

      <textarea {...register("requestBody", { required: true })} />

      <input type="submit" />
    </form>
  );
}
const Quote = () => {
  return (
    <div>
      <QuoteForm />
    </div>
  )
}

export default Quote