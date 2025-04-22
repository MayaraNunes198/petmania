import db from './db';

export async function getUsuario(){
  const result = await db.query('SELECT * FROM usuario');
  return result.rows;
}
  
