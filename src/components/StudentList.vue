<template>
  <div>
    <b-jumbotron header="Studenti 🎓" :lead="'Ukupno: ' + students.length">
      <b-container fluid>
        <b-form>
          <b-table
              hover
              v-if="students.length"
              sticky-header="800px"
              :items="students"
              :fields="fields"
              head-variant="light"
              @row-clicked="rowClick">
            <template v-slot:cell(action)="row">
              <b-button variant="danger" @click="delete_student(row.item.id)">Izbriši</b-button>
            </template>
          </b-table>
          <h1 v-else>Nema studenata ❌</h1>
        </b-form>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<script>
import router from "@/router";
import { mapState, mapActions  } from 'vuex';

export default {
  name: "StudentList",
  computed: {
    ...mapState(['students'])
  },
  data() {
    return {
      fields: [
        { key: 'id' },
        { key: 'name' },
        { key: 'lastname' },
        { key: 'year' },
        { key: 'vaccine_id' },
        { key: 'action' }
      ]
    }
  },
  methods: {
    ...mapActions(['delete_student']),

    rowClick: function (item) {

      router.push({path: `/updatestudent/${item.id}`});

    }
  }
}
</script>


<style>
tr:hover td{
  background: lightgreen;
}
</style>