import { FormEvent, ChangeEvent, useState } from "react";
import { enviarEmail } from "../../../api/api.ts";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";



interface FormData {
  nome: string;
  telefone: string;
  email: string;
}

export const Formulario = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    telefone: "",
    email: "",
  });



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await enviarEmail(formData);
    } catch (error) {
      console.error("Something is wrong", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="flex flex-col">
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        id="nome"
        name="nome"
        onChange={handleChange}
        className="mb-5 h-[50px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="email">E-mail:</label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={handleChange}
        className="mb-5 h-[50px] md:w-[600px] rounded text-black px-2"
      />

      <label htmlFor="telefone">Telefone:</label>
      <input
        type="text"
        id="telefone"
        name="telefone"
        onChange={handleChange}
        className="mb-5 h-[50px] md:w-[600px] rounded text-black px-2"
      />

      <Button
        type="submit"
        variant="contained"
        id="styleButton"
        endIcon={<SendIcon />}
        className="bg-[#ff32e1] shadow-[0px_0px_20px_#000] hover:bg-blue-600 hover:shadow-[0px_0px_20px_#fff] transition-all duration-200"
      >
        Enviar
      </Button>
    </form>
  );
};
