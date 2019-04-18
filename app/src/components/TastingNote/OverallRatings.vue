<template>
  <div class="panel">
    <p class="panel-heading">OVERALL RATINGS:</p>
    <div class="panel-block">
      <div class="columns">
        <div class="field">
          <div
            id="radios"
            v-for="i in ratings"
            v-bind:key="i"
            class="column is-one"
          >
            <b-radio v-model="radio" native-value="i">
              {{ i }}
            </b-radio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "OverallRatings",
  data: () => ({
    // fill ratings from [50..100]
    ratings: Array(51)
      .fill(51)
      .map((e, i) => i + 50),
    radio: 0
  })
};
</script>

<style lang="stylus" scoped>
.point15em {
  padding: 0.15em;
}
.display-inline {
  display: inline;
}
</style>
