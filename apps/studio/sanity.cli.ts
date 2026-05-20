import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'vsd49p5h',
    dataset: 'production'
  },
  deployment: {
    appId: 'ru92oheekb0b403lgdoquddu',
    autoUpdates: true,
  }
})
