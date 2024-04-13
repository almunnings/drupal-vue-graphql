import type { PropType } from 'vue';
import type { MediaDocument } from '@/services/drupal';
declare const _default: import("vue").DefineComponent<{
    media: {
        type: PropType<MediaDocument>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    media: {
        type: PropType<MediaDocument>;
        required: true;
    };
    title: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
}>>, {}, {}>;
export default _default;
