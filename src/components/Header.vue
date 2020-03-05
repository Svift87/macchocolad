<template>
    <div class="header">
        <div class="container">
            <div class="header__left">
                <div class="header__logo_container">
                    <img src="../img/logo.png" alt="" class="header__logo">
                </div>
                <div class="header__select">
                    <select>
                        <option value="1">Ru</option>
                        <option value="2">En</option>
                    </select>
                </div>
            </div>
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