import { type BlockInterface, type BlockContentInterface } from '@/services/drupal';
export declare const getBlockComponent: (block: BlockInterface) => import("vue").DefineComponent<{
    block: {
        type: import("vue").PropType<import("@/services/drupal").BlockContent>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    block: {
        type: import("vue").PropType<import("@/services/drupal").BlockContent>;
        required: true;
    };
}>>, {}, {}> | import("vue").DefineComponent<{
    block: {
        type: import("vue").PropType<import("@/services/drupal").BlockPlugin>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    block: {
        type: import("vue").PropType<import("@/services/drupal").BlockPlugin>;
        required: true;
    };
}>>, {}, {}> | import("vue").DefineComponent<{
    block: {
        type: import("vue").PropType<BlockInterface>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    block: {
        type: import("vue").PropType<BlockInterface>;
        required: true;
    };
}>>, {}, {}>;
export declare const getBlockContentComponent: (block: BlockContentInterface) => import("vue").DefineComponent<{
    blockContent: {
        type: import("vue").PropType<import("@/services/drupal").BlockContentBasicBlock>;
        required: true;
    };
    title: {
        type: import("vue").PropType<String | null>;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    blockContent: {
        type: import("vue").PropType<import("@/services/drupal").BlockContentBasicBlock>;
        required: true;
    };
    title: {
        type: import("vue").PropType<String | null>;
    };
}>>, {}, {}> | import("vue").DefineComponent<{
    blockContent: {
        type: import("vue").PropType<BlockContentInterface>;
        required: true;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    blockContent: {
        type: import("vue").PropType<BlockContentInterface>;
        required: true;
    };
}>>, {}, {}>;
