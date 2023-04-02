import { library } from '@fortawesome/fontawesome-svg-core'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faFile,
  faFileArchive,
  faFileExcel,
  faFilePdf,
  faFilePowerpoint,
  faFileText,
  faFileWord
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faFile,
  faFileArchive,
  faFileExcel,
  faFilePdf,
  faFilePowerpoint,
  faFileText,
  faFileWord
)

const fontawesomePlugin = {
  install(app) {
    app.component('font-awesome-icon', FontAwesomeIcon)
  }
}

export default fontawesomePlugin
