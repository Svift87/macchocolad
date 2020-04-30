<template>
    <div>
        <div class="recipes">
            <div class="container">
                <h2 class="recipes__title">
                    {{title}}
                </h2>
            </div>        
            <div class="recipes__cart_container" ref="cartContainer">
                <div 
                    class="recipes__cart" 
                    v-for="(recip, index) in recipes" 
                    :key="recip.id"
                    ref="recipesCart"
                    @click="popapInfoCard(recip.imges, recip.title, recip.text, index)"
                >
                    <img :src="recip.imges" alt="" class="recipes__cart__background">
                    <p class="recipes__cart__data">{{recip.data}}</p>
                    <h3 class="recipes__cart__header">{{recip.title}}</h3>
                </div> 
            </div>
            <div class="arrow-block arrow-block--recipes">
                <div class="arrow-slide arrow-slide_left" ref="left">
                    <i class="fas fa-angle-left"></i>
                </div>
                <div class="arrow-slide arrow-slide_right" ref="right">
                    <i class="fas fa-angle-right"></i>
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
                        <button class="new_popap__btn new_popap__btn--left" @click="leftRecipes"><i class="fas fa-angle-left"></i><span>Предыдущая новость</span></button>
                        <button class="new_popap__btn new_popap__btn--right" @click="rightRecipes"><span>Следующая новость</span><i class="fas fa-angle-right"></i></button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    name: "PageRecipes",
    data: () => ({
        title: 'Вкусные рецепты с MacChocolate',
        recipes: [
            {
                imges: require('@/img/Rectangle 5.png'),
                title: 'Какао с корицей и маршмеллоу1',
                data: '21 января',
                text: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
            },
            {
                imges: require('@/img/Rectangle 5(1).png'),
                title: 'Какао с корицей и маршмеллоу2',
                data: '21 января',
                text: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
            },
            {
                imges: require('@/img/Rectangle 5.png'),
                title: 'Какао с корицей и маршмеллоу3',
                data: '21 января',
                text: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
            },
            {
                imges: require('@/img/Rectangle 5(1).png'),
                title: 'Какао с корицей и маршмеллоу44',
                data: '21 января',
                text: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
            },
            {
                imges: require('@/img/Rectangle 5.png'),
                title: 'Какао с корицей и маршмеллоу5',
                data: '21 января',
                text: 'При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф. Ощущение мономерности ритмического движения возникает, как правило, в условиях темповой стабильности, тем не менее электрод имеет лирический громкостнoй прогрессийный период, и этот процесс может повторяться многократно. Аллегро имитирует однокомпонентный псевдомицелий, благодаря широким мелодическим скачкам. При прочих равных условиях отмучивание перемещает однокомпонентный гипнотический рифф.'
            },
        ],
        popapShow: false,
        textPopap: '',
        headPopap: '',
        imgPopap: '',
        indexRecipes: 0
    }),
    mounted: function () {
        this.$refs.cartContainer.style.cssText = 'padding-left:' + (window.innerWidth - document.querySelector('.container').offsetWidth) / 2 + 'px;transform: translateX(0px)'

        let transformSize = 0

        this.$refs.right.addEventListener('click', function() {
            let widthCart = document.querySelector('.recipes__cart').offsetWidth
            if (document.querySelector('.recipes__cart_container').offsetWidth > transformSize * -1 + widthCart*2.1) {
                transformSize -= widthCart
            }
            
            document.querySelector('.recipes__cart_container').style.transform = 'translateX('+ transformSize +'px)'
        })

        this.$refs.left.addEventListener('click', function() {
            let widthCart = document.querySelector('.recipes__cart').offsetWidth
            if (transformSize <= -10) {
                transformSize += widthCart
            }            
            document.querySelector('.recipes__cart_container').style.transform = 'translateX('+ transformSize +'px)'
        })
    },
    methods: {   
        popapInfoCard(a, b, c, i) {
            this.indexRecipes = i
            this.popapShow = true
            this.headPopap = b
            this.textPopap = c
            setTimeout(() => {                
                document.querySelector('.new_popap__info img').setAttribute('src', a);
            }, 0);
        },
        leftRecipes() {
            if (this.indexRecipes <= 0) {
                this.indexRecipes = this.recipes.length - 1
            } else {
                this.indexRecipes = this.indexRecipes - 1
            }
            this.headPopap = this.recipes[this.indexRecipes].title
            this.textPopap = this.recipes[this.indexRecipes].text
            setTimeout(() => {   
                document.querySelector('.new_popap__info img').setAttribute('src', this.recipes[this.indexRecipes].imges);
            }, 0);
        },
        rightRecipes() {
            if (this.indexRecipes >= this.recipes.length - 1) {
                this.indexRecipes = 0
            } else {
                this.indexRecipes = this.indexRecipes + 1
            }
            this.headPopap = this.recipes[this.indexRecipes].title
            this.textPopap = this.recipes[this.indexRecipes].text
            setTimeout(() => {   
                document.querySelector('.new_popap__info img').setAttribute('src', this.recipes[this.indexRecipes].imges);
            }, 0);
        }
    },
}
</script>