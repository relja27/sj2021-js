<template>
  <div>
    <Header/>
    <b-container>
      <b-row>
        <b-col cm="6" >
          <div v-if="this.$route.params.id">
            <ShowStudent v-if="students.length" :student="student"/>
            <EditStudent v-if="students.length" :student="student"/>
          </div>
          <div v-else>
            <b-container>
              <b-row>
                <b-col cm="6">
                  <AddStudent/>
                </b-col>
              </b-row>
            </b-container>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ShowStudent from "@/components/ShowStudent";
import EditStudent from "@/components/EditStudent";
import AddStudent from "@/components/AddStudent";

export default {
  name: "UpdateStudent",
  components: {
    ShowStudent,
    EditStudent,
    AddStudent
  },
  computed: {
    ...mapState(['students']),

    student: function () {

      for (let i = 0; i < this.students.length; i++)
        if (this.students[i].id === parseInt(this.$route.params.id))
          return this.students[i];
      return null;
    }
  },
  methods: {
    ...mapActions(['load_students']),
  }
}
</script>

<style scoped>

</style>