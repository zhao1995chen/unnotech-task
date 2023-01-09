<script>
import { mapActions, mapMutations } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import TIcon from '../common/TIcon.vue'

export default {
  props: {
    showCreate: {
      type: Boolean,
      required: true
    }
  },
  components: {
    TIcon
  },
  computed: {
    ...mapFields('route/books', {
      book: 'createForm'
    })
  },
  watch: {
    showCreate(newValue) {
      if (!newValue) this.resetCreateForm()
  }
  },
  methods: {
    ...mapActions({
      CREATE_BOOK: 'api/CREATE_BOOK',
      GET_BOOK_LIST: 'api/GET_BOOK_LIST'
    }),
    ...mapMutations('route/books', {
      resetCreateForm: 'resetCreateForm'
    }),
    createBook() {
      if (this.book.title === '') {
        alert('請輸入名稱')
        return
      }
      if (this.book.author === '') {
        alert('請輸入作者')
        return
      }
      this.CREATE_BOOK(this.book).then(
        () => {
          alert('新增成功')
        }).catch(e => {
          alert('新增失敗')
        }).finally(() => {
          this.GET_BOOK_LIST().then(() => {
            // dialog will be closed after get new book list response
            this.$emit('update')
          })
        })
    },
    backHandler() {
      this.$emit('update')
    }
  }
}
</script>

<template>
<div class="absolute block z-10 bg-gray-100 top-0 w-full h-full">
  <div class="w-full h-15 md:h-20 lg:h-25 bg-white absolute sticky top-0 shadow-lg shadow-gray-200 flex justify-center items-center text-2xl md:text-3xl">
    <TIcon :class="['text-gray-800 hover:text-gray-400 absolute left-5 cursor-pointer']" name="arrow" @click="backHandler" />
    新增書本
  </div>
  <div class="grid grid-flow-row gap-10 md:gap-15 p-5 md:p-20">
    <input type="text" class="title" v-model="book.title" placeholder="名稱" >
    <input type="text" class="author" v-model="book.author" placeholder="作者">
    <textarea type="textarea" class="description" v-model="book.description" placeholder="備註" />
  </div>
  <div class="grid grid-flow-col gap-10 w-full px-1/10 md:px-1/5 py-8 md:py-10 absolute bottom-0">
    <button class="bg-gray-200 hover:bg-gray-400" @click="$emit('update')">取消</button>
    <button class="bg-blue-400 hover:bg-blue-600" @click="createBook">新增</button>
  </div>
</div>
</template>

<style lang="scss" scoped>
button {
  @apply h-12 md:h-20 rounded-full text-white font-bold text-base md:text-2xl;
  @apply outline-none focus:outline-none select-none;
  @apply transition duration-500;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
input {
  @apply w-4/5 m-auto bg-white p-5;
  &.title, &.author {
    @apply h-15 md:h-20;
  }
}
textarea {
  @apply w-4/5 m-auto bg-white p-5;
  &.description {
    @apply h-40;
  }
}
</style>
