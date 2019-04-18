<template>
  <div>
    <div class="columns">
      <div class="column is-one-third">
        <Sidebar />
      </div>
      <div class="column">
        <TastingNote />
      </div>
    </div>
  </div>
</template>
<script>
import TastingNote from "./TastingNote/TastingNote";
import Sidebar from "./Sidebar";
export default {
  name: "Body",
  components: {
    TastingNote,
    Sidebar
  }
};
</script>
