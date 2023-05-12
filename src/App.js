import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./App.css";

function App() {
  const schema = z.object({
    amount: z.string().min(1, { message: "Please enter the amount" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (value) => {
    try {
      console.log(value);
    } catch (error) {
      
    }
  };

  // console.log(errors?.amount?.message);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="mb-3">
          <label class="form-label">
            Enter Your Amount
          </label>
          <input
            type="number"
            class="form-control"
            {...register("amount")}
          />
        </div>

        {errors && 
          <label className="error">{errors?.amount?.message}</label>
        }

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
