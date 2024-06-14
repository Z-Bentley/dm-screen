<template>
    <div id="conditions-table">
        <h1>Conditions</h1>
        <table>
            <tbody>
                <tr v-for="condition in conditions" :key="condition.index">
                    <td id="condition">
                        <tr id="condition-name" v-on:click="toggleView(condition.index)">{{ condition.name }}</tr>
                        <tr>
                            <ul v-if="descView === condition.index">
                                <li id="desc" v-for="desc in getConditionDefinition(condition)" :key="desc">{{ desc }}</li>
                            </ul>
                        </tr>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import DndService from '../services/DndService';

export default {
    data(){
        return{
            conditions: [],
            conditionDefinitions: {},
            descView: false,
        }
    },

    methods: {
        getConditionDefinition(condition){
            if(!this.conditionDefinitions[condition.index]){
                DndService.getUrl(condition.url)
                    .then(response => {
                        this.conditionDefinitions[condition.index] = response.data.desc;
                    })
                    .catch(error => {
                    console.error("there was an error fetching the conditions:", error)
                    })
            }
            return this.conditionDefinitions[condition.index] || ['Loading...']
        },

        toggleView(index){
            if(this.descView === index){
                this.descView = null;
            } else {
                this.descView = index;
            }
        }
    },

    mounted(){
        DndService.getUrl('/api/conditions')
            .then(response => {
                this.conditions = response.data.results;
            })
            .catch(error => {
                console.error("there was an error fetching the conditions:", error)
            })
    }
}
</script>

<style scoped>
#conditions-table{
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 20px;
    /* max-width: 800px;
    min-width: 800px; */
    border: 4px solid red;
    border-radius: 18px;
    background-image: url('../img/phb_background.jpg');
    padding: 16px;
    color: black;
}


h1{
    font-size: 2em;
}

#condition{
    border-top: 0.5px solid red;
}

#condition-name{
    font-size: 1.5em;
    /* color: black; */
}

#desc{
    list-style-type: none;
    padding-bottom: 10px;
}
</style>