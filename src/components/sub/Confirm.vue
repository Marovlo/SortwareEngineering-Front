<template>
    <div class="confirm-button">
        <button @click="getButtonClick">{{text || '确认'}}</button>
    </div>
</template>

<script>

export default {
    name:"Confirm",
    props:["text"],
    data(){
        return {
            msg:true
        };
    },
    methods:{
        getButtonClick()
        {
            this.$emit("message",this.msg);
        }
    }
};
</script>
