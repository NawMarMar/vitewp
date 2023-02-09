<template>
    <header>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">About</router-link></li>
        </ul>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

ul {
    padding: 50px 0;
    display: flex;
    li {
        font-size: 20px;
        margin-right: 50px;
    }
}

</style>