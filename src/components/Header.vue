<template>
    <div class="header">
        <div class="container">
            <div class="header__left">
                <div class="header__logo_container">
                    <img src="" alt="" class="header__logo">
                </div>
                <div class="header__select">
                    <select>
                        <option value="1">Ru</option>
                        <option value="2">En</option>
                    </select>
                </div>
            </div>
            <h2>{{ msg }}</h2>
            <div class="header__right">
                <button class="header__btn_map">Где купить</button>
                <ul class="burger">
                    <li class="burger__line"></li>
                    <li class="burger__line"></li>
                    <li class="burger__line"></li>
                </ul>
            </div>
        </div>        
    </div>    
</template>
<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>
<style lang="less">
    .header {
        position: fixed;
        top: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
        .container {
            display: flex;
            align-items: center;
            justify-content: space-between
        }
    }
    .header__left {
        display: flex;
    }
    .header__right {
        display: flex;
    }
    .burger {
        display: flex;
        flex-direction: column;
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background-color: #ffffff;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
    .burger__line {
        background-color: #A3639F;
        list-style: none;
        width: 20px;
        height: 2px;
        margin: 3px 0;
    }
</style>