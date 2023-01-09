<script>
import TIcon from './common/TIcon.vue'
import { mapActions } from 'vuex'


export default {
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  components: {
    TIcon
  },
  methods: {
    ...mapActions({
      DELETE_BOOK: 'api/DELETE_BOOK',
    }),
    async deleteBook() {
      if (await window.confirm(`確認刪除${this.book.title || ''}?`)) {
        this.DELETE_BOOK(this.book).then(() => {
          alert('刪除成功')
        }).catch(e => {
          alert('刪除失敗')
        }).finally(() => {
          this.$emit('getList')
        })
      }
    }
  }
}
</script>

<template>
  <button class="flex flex-col justify-end bg-white hover:bg-red-200 hover:shadow-xl hover:shadow-gray-400 transition duration-500" @click="$router.push({ name: 'BookDetail', params: { id: book.id }})">
    <img class="w-full h-auto px-10 py-8" :src="book.image" >
    <div class="w-full flex justify-between items-center">
      <div class="p-2 md:p-5 w-full grid grid-row gap-4">
        <div class="md:text-2xl text-left truncate">{{ book.title }}</div>
        <div class="md:text-lg text-left truncate">{{ book.author }}</div>
      </div>
      <TIcon class="text-gray-400 hover:text-gray-700 cursor-pointer mr-5" name="delete" @click.stop="deleteBook" />
    </div>
  </button>
</template>

<style lang="scss" scoped>
button {
  @apply outline-none focus:outline-none  select-none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>
