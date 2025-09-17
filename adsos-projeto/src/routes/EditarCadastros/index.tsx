import { useEffect } from "react";
const URL_API = import.meta.env.VITE_URL_API_CADASTROS;

export default function EditarCadastros() {

  useEffect(() => {
    document.title = "Editar Cadastros";
  }, []);

  const navigate = useNavigate();

 
  const { id } = useParams<{ id: string }>();


  const { register, handleSubmit, setValue } = useForm<TipoCadastro>();

  useEffect(() => {

    const fetchData = async () => {
      const response = await fetch(`${URL_API}/${id}`);
      try {
        const data: TipoCadastro = await response.json();
        setValue("nome", data.nome);
        setValue("cpf", data.cpf);
        setValue("email", data.email);
        setValue("senha", data.senha);
        setValue("tipo", data.tipo);

      } catch (error) {
        console.error(error);
      }
    }

    fetchData();

  }, [id, setValue]);


  const onSubmit:SubmitHandler<TipoCadastro> = dados =>{

    const atualizaProduto = async ()=>{
      await fetch(`${URL_API}/${id}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(dados)
      });
    }

    atualizaProduto();
    alert("Seu cadastro foi atualizado!");
    navigate("/cadastros");
  }


  return (
    <main>
      <h1>Editar Cadastros</h1>


      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-md space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow">
          <h2 className="text-lg font-semibold">Cadastrando Usuário</h2>
             <input type="hidden" {...register("id")}/>
         
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
            <input
              id="nome"
              type="text"
              {...register("nome",{required:true, maxLength:220})}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Ex.: Fulano"
            />
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300">
              Editar
            </button>
          </div>
        </form>
      </div>


    </main>
  );
}
