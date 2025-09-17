import { useEffect, useState } from "react";



export default function Cadastro(){

  document.title = "Cadastro";
    
    const [cadastros, setCadastros] = useState<Tipo[]>([]);

  useEffect(() => {
    
    const fetchData = async ()=>{
        const response = await fetch(URL_API);
        try {
          const data = await response.json();
          setCadastros(data);
        } catch (error) {
          console.error(error);
        }
    }

    fetchData();

  }, [])
  
  return(
    <main>
      <h1>Cadastros</h1>
        <div>
        <table className="tblCadastro">
          <thead>
            <tr>
              <th>NOME:</th>
              <th>CPF:</th>
              <th>E-MAIL:</th>
              <th>SENHA:</th>
              <th>TIPO DE USUÁRIO:</th>
            </tr>
          </thead> 
            <tbody>
            {cadastros.map((cadastro,index)=>(

                <tr key={index}>
                  <td>{cadastro.nome}</td>
                  <td>{cadastro.cpf}</td>
                  <td>{cadastro.email}</td>
                  <td>{cadastro.senha}</td>
                  <td> <Link to={`/editar/cadastros/${cadastro.nome}`}> <Editar/> </Link> </td>
                </tr>

            ))}
            </tbody>
          <tfoot>
          </tfoot>
        </table>
      </div>

    </main>
  );
}