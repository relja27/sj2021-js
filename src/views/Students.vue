<template>
  <div class="home">
    <StudentList/>
    <br>
    <b-container>
      <b-row>
        <b-col cm="6">
          <AddStudent/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import StudentList from "@/components/StudentList";
import AddStudent from "@/components/AddStudent";

export default {
  name: 'students',
  data() {
    return {
      students: []
    }
  },
  components: {
    AddStudent,
    StudentList
  }
}
</script>