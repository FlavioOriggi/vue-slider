const app = new Vue(
    {
        el: '#app',
        data: {
            contatore: 0,
            photos: [
                'img/01.jpg',
                'img/02.jpg',
                'img/03.jpg',
                'img/04.jpg'
            ]
        },
        methods: {
            nextPhoto(){                
                (this.contatore == this.photos.length - 1) ? this.contatore = 0 : this.contatore++;
            },
            prevPhoto(){
                if(this.contatore == 0){
                    this.contatore = this.photos.length - 1;                    
                } else {
                    this.contatore--;
                }
            },
            cambiaPhoto(indice){
                this.contatore = indice;
            }
        }

    }
);