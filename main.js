var app = new Vue(
    {
        el:'#root',
        data: {
            arrayMail: [],
        },
        created(){
            //ciclare axios. api stampa una mail alla volta.
            for(i = 0; i < 10; i++){
                //richiamare axios
                axios.get( 'https://flynn.boolean.careers/exercises/api/random/mail')
                    .then( (response ) =>{
                        console.log(response);
                        this.arrayMail.push(response.data.response);
                    } )
            }
        },
        methods:{

        }
    }
);