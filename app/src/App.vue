<template>
<container>
  <Header/>
  <Body/>
</container>
</template>

<script>
import Header from './components/Header'
import Body from './components/Body'

export default {
  name: 'App',
  components: {
    Header,
    Body
  },
  data () {
    return {
      collapsed: false
    }
  }
}
</script>
