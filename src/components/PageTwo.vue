<template>
    <div class="product">
        <div class="product_container container">
            <div class="product__left">
                <p class="product__title">{{ title }}</p>
                <p class="product__descriptoin">{{ descriptoin }}</p>
                <p class="product__sub-title">{{ subTitle }}</p>
                <ul class="product__item">
                    <li class="product__list" v-for="(item, index) in items" :key="item.id">
                        <img :src="item.img" alt="">
                        <span class="number">{{index + 1}}.</span> 
                        <span>{{item.text}}</span>
                    </li>
                </ul>
                <button class="product__btn">Вкусные рецепты с MacChocolate</button>
            </div>
            <div class="arrow-block">
                <div class="arrow-slide arrow-slide_left" @click="arrowLeft">
                    <i class="fas fa-angle-left"></i>
                </div>
                <div class="arrow-slide arrow-slide_right" @click="arrowRight">
                    <i class="fas fa-angle-right"></i>
                </div>
            </div>
            <div class="product__right">
                <div class="product__big-photo">
                    <transition
                        name="showAnimat"                         
                        enter-active-class="animated fadeIn"
                        leave-active-class="animated fadeOut"
                    >
                        <img :src="newBigSrc" alt="" key="sucess1" v-if="show">
                        <img :src="bigSrc" alt="" key="sucess2" v-else>
                    </transition>
                    <p class="title">{{ bigPhotoTitle }}</p>
                    <p class="title_description">{{ bigPhotoDescription }}</p>
                </div>
                <div class="product__photo_container">
                    <div 
                        class="product__smal-photo" 
                        v-for="(photo, index) in photos" 
                        :key="photo.id" 
                        @click="activSlide($event, photo, index)" 
                        ref="oneSlide"
                    >
                        <img :src="photo.img" alt="">
                    </div>
                </div>
            </div>
            <div class="product__footer">
                <div class="product__arrow">
                    <img src="../img/Union.png" alt="">
                </div>
            </div>
            
        </div>        
    </div>
</template>

<script>
export default {
    name: "PageTwo",
    data: () => ({
        title: 'О MacChocolate',
        descriptoin: 'MacChocolate® — это растворимый напиток, приготовленный по особому рецепту из лучших сортов какао с добавлением сливок и сахара.',
        subTitle: 'Способ приготовления',
        bigSrc: '',
        newBigSrc: '',
        bigPhotoTitle: '',
        bigPhotoDescription: '',
        slideIndex: 0,
        show: true,
        items: [
            {
                text: 'Высыпать содержимое пакетика в чашку',
                img: require('@/img/Group1.png')
            },
            {
                text: 'Добавить 170 мл горячей воды и размешать',
                img: require('@/img/Group2.png')
            }
        ],
        photos: [
            {
                img: require('@/img/image3.png'),
                textTop: 'Горячий шоколад',
                textTitle: 'Сливочный'
            },
            {
                img: require('@/img/image2.png'),
                textTop: 'Горячий шоколад',
                textTitle: 'Сырой'
            },
            {
                img: require('@/img/image1.png'),
                textTop: 'Горячий шоколад',
                textTitle: 'Сухой'
            },
            {
                img: require('@/img/image4.png'),
                textTop: 'Горячий шоколад',
                textTitle: 'Ну такой'
            },
        ]
        
    }),
    mounted: function() {
        this.$refs.oneSlide[0].classList.add('active')
        this.newBigSrc = this.photos[0].img
        this.bigPhotoTitle = this.photos[0].textTop
        this.bigPhotoDescription = this.photos[0].textTitle
    },
    methods: {
        activSlide: function(a, b, c) {            
            for (let i = 0; i < this.$refs.oneSlide.length; i++) {
                this.$refs.oneSlide[i].classList.remove('active')
            }
            a.srcElement.parentElement.classList.add('active')
            this.show = false
            this.newBigSrc = this.bigSrc
            this.slideIndex = c
            this.newBigSrc = b.img
            this.bigPhotoTitle = b.textTop
            this.bigPhotoDescription = b.textTitle
            setTimeout(() => {
                this.show = true
            }, 0);
        },
        arrowLeft: function() {
            let sl = this.slideIndex;
            if (this.slideIndex == 0) {
                sl = this.photos.length - 1
            } else {
                sl = this.slideIndex - 1
            }
            for (let i = 0; i < this.$refs.oneSlide.length; i++) {
                this.$refs.oneSlide[i].classList.remove('active')
            }
            this.show = false
            this.newBigSrc = this.bigSrc
            this.$refs.oneSlide[sl].classList.add('active')
            this.slideIndex = sl
            this.newBigSrc = this.photos[sl].img
            this.bigPhotoTitle = this.photos[sl].textTop
            this.bigPhotoDescription = this.photos[sl].textTitle
            setTimeout(() => {
                this.show = true
            }, 0);
        },
        arrowRight: function() {
            let sl = this.slideIndex;
            if (this.slideIndex == this.photos.length - 1) {
                sl = 0
            } else {
                sl = this.slideIndex + 1
            }
            for (let i = 0; i < this.$refs.oneSlide.length; i++) {
                this.$refs.oneSlide[i].classList.remove('active')
            }
            this.show = false
            this.newBigSrc = this.bigSrc
            this.$refs.oneSlide[sl].classList.add('active')
            this.slideIndex = sl
            this.newBigSrc = this.photos[sl].img
            this.bigPhotoTitle = this.photos[sl].textTop
            this.bigPhotoDescription = this.photos[sl].textTitle
            setTimeout(() => {
                this.show = true
            }, 0);
        }
    }
}
</script>