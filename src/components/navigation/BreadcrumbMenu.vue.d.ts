import type { PropType } from 'vue';
import type { Link } from '@/services/drupal';
declare const _default: import("vue").DefineComponent<{
    links: {
        type: PropType<Link[]>;
        required: true;
    };
    current: {
        type: StringConstructor;
        required: false;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    links: {
        type: PropType<Link[]>;
        required: true;
    };
    current: {
        type: StringConstructor;
        required: false;
    };
}>>, {}, {}>;
export default _default;
