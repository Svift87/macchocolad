<template>
    <div class="score">
        <div class="container">
            <h2 class="news__title">
                {{title}}
            </h2>
            <div class="score__item__scroll">
                <div class="score__item_container">
                    <div class="score__item" v-for="score in scores" :key="score.id">
                        <div class="score__item__img_block">
                            <img :src="score.img" :alt="score.name" class="score__item__img">
                        </div>                
                        <h3 class="score__item__name">{{score.name}}</h3>
                    </div>
                </div>
            </div>
            <div class="score__rage_container">
                <input type="range" class="score__rage">
            </div>
        </div>               
    </div>
</template>

<script>
export default {
    name: 'buy',
    data: () => ({
        title: 'Вкусные рецепты с MacChocolate',
        scores: [
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            },
            {
                img: require('@/img/Rectangle 28.png'),
                name: 'Анаш'
            }
            
        ]
    }),
    mounted: function () {
        let widthScroll = document.querySelector('.score__item_container').scrollWidth - document.querySelector('.score__item__scroll').offsetWidth
        let pxProcent = (document.querySelector('.score__item_container').scrollWidth - document.querySelector('.score__item__scroll').offsetWidth) / 100
        let val = document.querySelector('.score__rage').value

        document.querySelector('.score__rage').value = 0

        document.querySelector('.score__rage').addEventListener('input', function() {
            val = document.querySelector('.score__rage').value
            document.querySelector('.score__rage').style.background = '-webkit-linear-gradient(left ,#fff 0%,#fff '+val+'%,#692F11 '+val+'%, #692F11 100%)'
            document.querySelector('.score__item_container').style.transform = 'translateX(-'+ val * pxProcent +'px)'            
        })
    },
    methods: {

    }
}
</script>