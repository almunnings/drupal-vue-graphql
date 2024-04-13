import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFile, faFileArchive, faFileExcel, faFilePdf, faFilePowerpoint, faFileText, faFileWord } from '@fortawesome/free-solid-svg-icons';
const fontawesomePlugin = {
    install(app) {
        library.add(faFile, faFileArchive, faFileExcel, faFilePdf, faFilePowerpoint, faFileText, faFileWord);
        app.component('font-awesome-icon', FontAwesomeIcon);
    }
};
export default fontawesomePlugin;
