const importModule = import.meta.globEager('./**/*.js')
const modules = { modules: {} }
for (let fileName in importModule) {
  const moduleNames = fileName.replace(/(\.\/|\.js)/g, '').split('/')
  moduleNames.reduce((acc, cur, index) => {
    const moduleName = cur
    if (index === moduleNames.length - 1) {
      const currentModule = {
        namespaced: true,
        ...importModule[fileName]
      }
      acc.modules[moduleName] = currentModule
      return acc.modules
    } else {
      if (!acc.modules[moduleName]) {
        acc.modules[moduleName] = {
          namespaced: true,
          modules: {}
        }
      }
      return acc.modules[moduleName]
    }
  }, modules)
}

export default modules.modules