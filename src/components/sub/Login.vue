<template>
    <div class="login-button">
        <button @click="getButtonClick">{{text || '确认'}}</button>
    </div>
</template>

<script>

export default {
    name:"Login",
    props:["text"],
    data(){
        return {
            msg:"nmd"
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
