import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container } from "./styles";

interface IFormInput {
  name: string;
  email: string;
}

const schema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
}).required();

const Home = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  return (
    <Container>
      <h1>Lorem Ipsum</h1>
      <p>
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
      </p>
      <label>Receive news by email</label>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <input {...register('name')} placeholder='Name' />
          <span>{errors.name?.message}</span>
        </div>
        <div className="email">
          <input {...register('email')} placeholder='E-mail' />
          <span>{errors.email?.message}</span>
        </div>
        <button type='submit'>register</button>
      </form>
    </Container>
  );
}

export default Home;