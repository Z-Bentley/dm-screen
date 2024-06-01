<template>
    <conditions-table  id="conditions-table"/>
</template>

<script>
// import ConditionsTable from 'components/ConditionTable.vue'
import ConditionsTable from '../components/ConditionsTable.vue';

export default {
    components: {
        ConditionsTable
    }
}
</script>

<style scoped>
#conditions-table{
    display: flex;
    flex-direction: column;
    max-width: 600px;
    min-width: 300px;
    border: 4px solid red;
    border-radius: 18px;
    background-image: url('../img/phb_background.jpg');
    padding: 16px;
}
</style>