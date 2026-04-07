export default defineAppConfig({
  ui: {
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto p-4 sm:p-6 lg:p-8'
    },
    card: {
      slots: {
        root: 'p-4 sm:p-6 lg:p-8 w-fit'
      }
    },
    formField: {
      slots: {
        label: 'text-sm md:text-base lg:text-lg'
      }
    },
    inputNumber: {
      slots: {
        base: 'text-sm md:text-base lg:text-lg'
      }
    },
    button: {
      slots: {
        base: 'cursor-pointer'
      }
    }

  }
})
