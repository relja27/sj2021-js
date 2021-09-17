<template>
  <div>
    <b-jumbotron header="Odobrene vakcine 💉" :lead="'Ukupno: ' + vaccines.length">
      <b-container fluid>
        <b-form>
          <b-table
              hover
              v-if="vaccines.length"
              sticky-header="800px"
              :items="vaccines"
              :fields="fields"
              head-variant="light"
              @row-clicked="rowClick">
            <template v-slot:cell(action)="row">
              <b-button variant="danger" @click="delete_vaccine(row.item.id)">Izbriši</b-button>
            </template>
          </b-table>
          <h1 v-else>Nema vakcina</h1>
        </b-form>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<script>
import router from "@/router";
import { mapState, mapActions  } from 'vuex';

export default {
  name: "VaccineList",
  computed: {
    ...mapState(['vaccines'])
  },
  data() {
    return {
      fields: [
        { key: 'id' },
        { key: 'name' },
        { key: 'country' },
        { key: 'doses' },
        { key: 'action' }
      ]
    }
  },
  methods: {
    ...mapActions(['delete_vaccine']),

    rowClick: function (item) {

      router.push({path: `/updatevaccine/${item.id}`});

    }
  }
}
</script>


<style>
tr:hover td{
  background: lightgreen;
}
</style>