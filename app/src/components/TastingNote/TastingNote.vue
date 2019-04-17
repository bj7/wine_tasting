<template>
<section class="section">
  <Title/>
  <div class="box">
    <Page/>
  </div>
</section>
</template>
<script>
import Title from './Title'
import Page from './Page'

export default {
  name: 'TastingNote',
  data: () => ({

  }),
  components: {
    Title,
    Page
  }
}
</script>
