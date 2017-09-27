export default {
  name: 'b-button',
  props: {
    tag: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    classes () {
      return {
        'button': true
      }
    }
  },
  render (h) {
    return h(this.tag, { class: this.classes }, [this.$slots.default])
  }
}
