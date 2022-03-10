// 1. Identificar el contenedor que va a usar VUE
// 2. Crear la APP de Vue en el contenedor del paso 1.
//  3.Crear la estructura del framework Vue
const appVue ={
    // Controlar los componentes del DOM
    // Estado
    data(){
        return{
            lblAlerta:"",
            usuario:{
                correo:null
            }
        }
    },
    // Metodos y funciones que voy a utilizar en mi aplicacion 
    methods:{
        obtenerValoresFormulario(){
            console.log(this.usuario)
        }
    }
}

Vue.createApp(appVue).mount('#app-vue')