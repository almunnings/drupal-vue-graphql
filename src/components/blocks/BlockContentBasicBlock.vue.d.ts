import type { PropType } from 'vue';
import type { BlockContentBasicBlock } from '@/services/drupal';
declare const _default: import("vue").DefineComponent<{
    blockContent: {
        type: PropType<BlockContentBasicBlock>;
        required: true;
    };
    title: {
        type: PropType<String | null>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    blockContent: {
        type: PropType<BlockContentBasicBlock>;
        required: true;
    };
    title: {
        type: PropType<String | null>;
    };
}>>, {}, {}>;
export default _default;
