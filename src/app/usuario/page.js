import db from "@/lib/db";
export default async () => {
   
        const alunos = await db.query("select 'teste' as name, 'teste2' as project");

 return (<>
    <h1>Lista de alunos</h1>
    <div>
      {
         alunos.rows.map( 
            a => (
               <div key={a.id}>
                  {a.name} faz parte do projeto {a.project}
               </div>
            ) 
         )
      }
   </div>
 </>);
}