<template>
 <Card :postTitle="dataBase[0].data.caption" :username="dataBase[0].data.username"></Card>
    {{ dataBase }}
</template>

<script>import store from "../store"
import Card from "../components/layout/Card.vue"

export default {
    setup() {
        const dataBase = store.getters.getDataBase;
        return {
            dataBase
        };
    },
    components: { Card }
}
</script>