<template>
    <div class="blog-header">
        <div class="header-menu">
            <router-link class="header-link" to="/">
                Home
            </router-link>
            <router-link class="header-link" to="/about">
                About
            </router-link>
            <a class="header-link" target="_blank" href="https://github.com/chienbg2000/chienbg2000.github.io">
                Link tải mã nguồn
            </a>
        </div>
    </div>
</template>

<style>
.blog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
}

.header-menu {
    display: flex;
    align-items: center; /* Để căn giữa theo chiều dọc */
    margin: 0 auto; /* Để căn giữa theo chiều ngang */
}

.header-link {
    margin-left: 20px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
}

.header-link:hover {
    text-decoration: underline;
}
</style>

<script>
export default {
    name: 'BlogHeader'
}
</script>
