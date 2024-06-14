<template>
    <section id="abilities-tiles">
        <article class="ability-tile" v-for="score in abilityScores" :key="score.index">
            <h1 class="ability-score">
                {{ score.full_name }}
                ({{ score.index }})
            </h1>
            <div>
                <div class="desc">{{ joinDescriptions(score.desc) }}</div>
                <ul>
                    <li v-for="skill in score.skills" :key="skill.index">
                        {{ skill.name }}
                    </li>
                </ul>
            </div>
        </article>
    </section>
</template>

<script>
import DndService from '@/services/DndService';

export default{
    data(){
        return{
            abilityScores: [],
            abilitys: [],
            gatheredScores: [],
            descView: false,
        }
    },

    methods: {
        createAbilityScoreObject(gatheredScores){
            gatheredScores.forEach(score => {
                DndService.getUrl(score.url)
                    .then(response => {
                        this.abilityScores.push(response.data)
                    })
            });
        },
        joinDescriptions(desc){
            if(Array.isArray(desc)){
                return desc.join(' ')
            }
        },
    },

    mounted(){
        DndService.getUrl('/api/ability-scores')
            .then(response => {
                this.gatheredScores = response.data.results;
                this.createAbilityScoreObject(this.gatheredScores)
            })
            .catch(error => {
                console.error("there was an error fetching the ability scores:", error)
            })
    }
}
</script>

<style scoped>
#abilities-tiles{
    display: flex;
    flex-wrap: wrap;
    padding-top: 50px;
    /* flex-direction: row; */
    gap: 10px;
    margin: 10px;
    /* justify-content: space-between; */
    justify-content: center;
    /* align-items: center; */
}

.ability-tile{
    border: 5px solid green;
    border-radius: 16px;
    max-width: 600px;
    min-width: 600px;
    padding: 20px;
    margin: 5px;
    /* box-sizing: border-box; */
    background-color: black;
}
</style>