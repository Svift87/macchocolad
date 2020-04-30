<template>
    <div>
        <div class="prelast">
            <div class="container">
                <div class="prelast__card_container" v-for="(info, index) in information" :key="info.id" >
                    <h2 class="prelast__title">{{info.title}}</h2>
                    <p class="prelast__text">{{info.cardText}}</p>
                    <div class="arrow-prelast" @click="popapActive(index)"><i class="fas fa-angle-right"></i></div>
                    <img :src="info.img" alt="" class="prelast__img">
                </div>
            </div>
        </div>
        <transition
            name="showAnimat"                         
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >
            <div class="new_popap" v-if="popapShow">
                <div class="new_popap__bg" @click="popapShow = !popapShow"></div>    
                <div class="new_popap__container">
                    <div class="new_closed" @click="popapShow = !popapShow">
                        <i class="fas fa-times"></i>
                    </div>
                    <h2 class="new_popap__head">{{headPopap}}</h2>
                    <div class="new_popap__info">
                        <img :src="imgPopap" alt="">
                        <p class="new_popap__text">{{textPopap}}</p>
                    </div>           
                    <div class="new_popap__line"></div>
                    <div class="new_popap__btn_container">
                        <button class="new_popap__btn new_popap__btn--left" @click="leftRecipes"><i class="fas fa-angle-left"></i><span>{{prePopap}}</span></button>
                        <button class="new_popap__btn new_popap__btn--right" @click="rightRecipes"><span>{{lastPopap}}</span><i class="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "PagePrelast",
    data: () => ({
        information: [
            {
                title: 'О бренде',
                cardText: 'История MacChocolate началась с 2006 года',
                img: require('@/img/image3.png'),
                imgPopap: require('@/img/Rectangle4.png'),
                textPopap: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
            },
            {
                title: 'О компании',
                cardText: 'Мировой лидер по производству растворимых напитков',
                img: require('@/img/image 7.png'),
                imgPopap: require('@/img/Rectangle2.png'),
                textPopap: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
            }
        ],
        popapShow: false,
        headPopap: '',
        textPopap: '',
        imgPopap: '',
        prePopap: '',
        lastPopap: '',
        indexInformation: 0
    }),
    mounted: function () {
        
    },
    methods: {   
        popapActive(i) {
            this.indexInformation = i
            this.popapShow = true
            if (this.indexInformation <= 0) {
                this.prePopap = this.information[this.information.length - 1].title
            } else {
                this.prePopap = this.information[this.indexInformation - 1].title
            }

            if (this.indexInformation >= this.information.length - 1) {
                this.lastPopap = this.information[0].title
            } else {
                this.lastPopap = this.information[this.indexInformation + 1].title
            }            

            this.headPopap = this.information[this.indexInformation].title
            this.textPopap = this.information[this.indexInformation].textPopap
            setTimeout(() => {                
                this.imgPopap = this.information[this.indexInformation].imgPopap
            }, 0);
        },
        leftRecipes() {
            if (this.indexInformation <= 0) {
                this.indexInformation = this.information.length - 1
            } else {
                this.indexInformation = this.indexInformation - 1
            }

            if (this.indexInformation <= 0) {
                this.prePopap = this.information[this.information.length - 1].title
            } else {
                this.prePopap = this.information[this.indexInformation - 1].title
            }

            if (this.indexInformation >= this.information.length - 1) {
                this.lastPopap = this.information[0].title
            } else {
                this.lastPopap = this.information[this.indexInformation + 1].title
            } 

            this.headPopap = this.information[this.indexInformation].title
            this.textPopap = this.information[this.indexInformation].textPopap
            setTimeout(() => {   
                this.imgPopap = this.information[this.indexInformation].imgPopap;
            }, 0);
        },
        rightRecipes() {
            if (this.indexInformation >= this.information.length - 1) {
                this.indexInformation = 0
            } else {
                this.indexInformation = this.indexInformation + 1
            }

            if (this.indexInformation <= 0) {
                this.prePopap = this.information[this.information.length - 1].title
            } else {
                this.prePopap = this.information[this.indexInformation - 1].title
            }

            if (this.indexInformation >= this.information.length - 1) {
                this.lastPopap = this.information[0].title
            } else {
                this.lastPopap = this.information[this.indexInformation + 1].title
            } 

            this.headPopap = this.information[this.indexInformation].title
            this.textPopap = this.information[this.indexInformation].textPopap
            setTimeout(() => {
                this.imgPopap = this.information[this.indexInformation].imgPopap;
            }, 0);
        }
    },
}
</script>
