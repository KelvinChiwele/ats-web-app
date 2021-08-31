<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Partners',

    metaInfo: { title: 'Partners' },

    extends: View,

    mixins: [
      LoadSections([
        'section-our-partners',
        'section-footer',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
