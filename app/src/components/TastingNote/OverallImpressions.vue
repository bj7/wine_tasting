<template>
  <v-layout row wrap align-content-center>
      <v-flex xs6>
        <v-card>
          <v-card-title primary-title>
            OVERALL RATINGS:
          </v-card-title>
          <v-card-text>
            <v-radio-group v-model="overallRatings" row>
              <v-radio label="Radio 1" value="radio-1"></v-radio>
              <v-radio label="Radio 2" value="radio-2"></v-radio>
            </v-radio-group>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
</template>
<script>
export default {
  name: 'OverallImpressions',
  data: () => ({

  })
}
</script>
