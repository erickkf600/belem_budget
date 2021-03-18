export let formBuilderClient = {
    nomeCliente: {value: '', required: true},
    cidadeCliente: {value: '', required: true},
    telefoneCliente: {value: '', required: false},
    valid: false

}


export const nextStep = (next, setSubmit) =>{ 
    setSubmit(true)
    if(formBuilderClient.valid === true || formBuilderClient.valid === undefined){
        next(formBuilderClient)
    }
    
}
 
