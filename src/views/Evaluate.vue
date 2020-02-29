<template>
    <div class="evaluate-div">
        <div class="">
            <div class="" v-for="(v,i) in ratingsList" :key="i">
                <p>{{v.score}}</p>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import { getRatings } from '../api/apis.js'
    export default {
        data(){
            return{
                ratingsList:[]
            }
        },
        created(){
            getRatings().then(res=>{
                this.ratingsList = res.data.data;
                console.log(res.data.data)
            })
        }
    }
</script>

<style lang="less" scoped>

</style>