import { type PropType } from 'vue';
import type { TableRow } from '@/services/drupal';
declare const _default: import("vue").DefineComponent<{
    row: {
        type: PropType<TableRow | null>;
        required: true;
    };
    format: {
        type: PropType<String | null>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    row: {
        type: PropType<TableRow | null>;
        required: true;
    };
    format: {
        type: PropType<String | null>;
    };
}>>, {}, {}>;
export default _default;
