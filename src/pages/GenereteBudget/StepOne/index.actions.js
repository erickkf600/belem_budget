
export var submit = false 
export const formBuilderClient = {
    nomeCliente:'',
    cidadeCliente: '',
    telefoneCliente: '',

}


export const nextStep = () =>{ 
    if(!formBuilderClient){
        setSubmit = true
        alert('erro')
    }
    console.log(submit)
}
