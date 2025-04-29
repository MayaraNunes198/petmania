import db from "@/lib/db";

export default async ({params}) => {
    const {id} = await params;
    const aluno = await db.query(
        "select * from usuario where id = "+id
    );
    return (
        <>
            <h1>Página do aluno: 
                {aluno.rows[0].nome}
            </h1>
            <p>O aluno faz parte do projeto 
                {aluno.rows[0].cargo}
            </p>
        </>
    )
}