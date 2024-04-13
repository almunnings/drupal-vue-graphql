import type { PropType } from 'vue';
import type { ParagraphSection, ParagraphInterface } from '@/services/drupal';
declare const _default: import("vue").DefineComponent<{
    paragraph: {
        type: PropType<ParagraphSection>;
        required: true;
    };
    children: {
        type: PropType<ParagraphInterface[] | null>;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    paragraph: {
        type: PropType<ParagraphSection>;
        required: true;
    };
    children: {
        type: PropType<ParagraphInterface[] | null>;
        required: false;
    };
}>>, {}, {}>;
export default _default;
