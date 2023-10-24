<template>
   <div class="blog-page">
     <ul class="blog-list">
       <li v-for="post in posts" :key="post.slug" class="blog-post">
         <div class="post-image">
           <img :src="post.image" alt="Post Image" />
         </div>
         <div class="post-content">
           <h2 class="post-title">{{ post.title }}</h2>
           <p class="post-excerpt">{{ post.excerpt }}</p>
           <p class="post-date">{{ post.date }}</p>
           <button class="read-more-button" @click="redirectToPost(post.slug)">Read More</button>
         </div>
       </li>
     </ul>
     <div class="pagination">
       <button class="pagination-button" @click="loadPage(page - 1)" :disabled="page === 1">Previous</button>
       <span class="page-number">{{ page }}</span>
       <button class="pagination-button" @click="loadPage(page + 1)" :disabled="page === totalPages">Next</button>
     </div>
   </div>
 </template>
 
 <script>
 import axios from "axios";

 export default {
   name: "BlogPage",
   data() {
     return {
       posts: [],
       page: 1,
       totalPages: 1
     };
   },
   created() {
     this.loadPage(this.page);
   },
   methods: {
     loadPage(page) {
       const itemsPerPage = 20; // Điều chỉnh số lượng bài viết mỗi trang
       const apiUrl = `${window.config.API}?type=getPosts&page=${page}&itemsPerPage=${itemsPerPage}`;
 
       axios
         .get(apiUrl)
         .then(response => {
           this.posts = response.data.posts;
           this.totalPages = response.data.totalPages;
           this.page = page;
         })
         .catch(error => {
           console.error("Error fetching data:", error);
         });
     },
      redirectToPost(slug) {
         this.$router.push({ path: `/post/${slug}` });
      }
   }
 };
 </script>
 
 <style>
 .blog-page {
   max-width: 800px;
   margin: 0 auto;
   padding: 20px;
 }
 
 .blog-title {
   font-size: 24px;
   text-align: center;
   margin-bottom: 20px;
 }
 
 .blog-list {
   list-style: none;
   padding: 0;
 }
 
 .blog-post {
   display: flex; /* Sử dụng Flexbox để chia cột */
   border: 1px solid #ccc;
   padding: 10px;
   margin: 10px 0;
   background-color: #f9f9f9;
 }
 
 .post-image {
   flex: 1; /* Chia tỷ lệ cho cột ảnh */
   padding-right: 20px; /* Khoảng cách giữa ảnh và nội dung */
 }
 
 .post-content {
   flex: 2; /* Chia tỷ lệ cho cột nội dung */
   display: flex;
   flex-direction: column;
   justify-content: space-between; /* Căn giữa theo trục dọc và chia đều khoảng cách giữa các phần tử */
 }
 
 .post-title {
   font-size: 20px;
   margin: 0;
   text-align: left; /* Căn trái */

 }
 
 .post-image img {
   max-width: 100%;
   height: auto;
 }
 
 .post-excerpt {
   font-size: 16px;
   text-align: left; /* Căn trái */
 }
 
 .post-date {
   color: #999;
   font-size: 14px;
   text-align: left; /* Căn trái */
 }
 
 .read-more-button {
   background-color: #007BFF;
   color: #fff;
   padding: 5px 10px;
   border: none;
   cursor: pointer;
   text-align: center;
   margin-top: 10px;
 }
 
 .read-more-button:hover {
   background-color: #0056b3;
 }
 
 .pagination {
   display: flex;
   justify-content: center;
   align-items: center;
   margin-top: 20px;
 }
 
 .pagination-button {
   background-color: #007BFF;
   color: #fff;
   padding: 5px 10px;
   border: none;
   cursor: pointer;
   margin: 0 10px;
 }
 
 .pagination-button:hover {
   background-color: #0056b3;
 }
 
 .page-number {
   font-size: 18px;
   font-weight: bold;
 }
 </style>
 