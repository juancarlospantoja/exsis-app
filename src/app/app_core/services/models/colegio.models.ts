export interface ColegioModel{
    id?: number,
    nombre: string,
    colegio?:{}
}

export interface CursoModel{
    id?:number,
    grado: number,
    salon: string,
    colegio: ColegioModel,
    asignatura?:{}
}

export interface registroModel{
    name: string,
    family_name: string,
    email: string,
    phone: string,
    program: string,
    comment: string
} 