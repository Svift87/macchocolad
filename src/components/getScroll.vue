<template>
    <!-- <div class="cookies__container"> -->
        <div class="columns">
            <div class="left-column" id="context" :style="matchHeight">
                <p>Some text</p>
            </div>
            <div class="right-column" id="info-box" ref="infoBox"> 
                <img />
                <ul>
                    <li v-for="line in lines" v-text="line" :key="line"></li>
                </ul>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
export default {
    name: 'getScroll',
    data: function () {
        return {
            leftColStyles: { },
            lines: ['one', 'two','three']
        }
    },
    methods: {
        matchHeight() {
            var heightString = this.$refs.infoBox.clientHeight + 'px';
            Vue.set(this.leftColStyles, 'height', heightString); 
        }
    },
    mounted() {
        this.matchHeight();
    }
}
</script>
<style lang="less">
    .columns{width:300px}
    .left-column {width:200px; border:solid 1px black}
    .right-column {border:solid 1px blue; }
</style>