<template>
    <header>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/news">News</router-link></li>
        </ul>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

ul {
    margin: 50px;
    display: flex;
    li {
        font-size: 20px;
        margin-right: 50px;
    }
}

</style>