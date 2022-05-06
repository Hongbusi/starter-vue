export const useUserStore = defineStore('user', () => {
  const name = ref('vitemplate')

  function setName(value: string) {
    name.value = value
  }

  return {
    name,
    setName
  }
})
